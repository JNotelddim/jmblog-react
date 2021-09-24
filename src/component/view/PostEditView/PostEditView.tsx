// Modules
import React from 'react';

// Hooks
import { Controller, useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { usePutPost, useDeletePost } from 'src/hook/api/posts';

// Components
import { Box, Button, IconButton } from '@material-ui/core';
import { DeleteForever } from '@material-ui/icons';
import Text from 'src/component/base/Text';
import { Form, TextField, FormFooter, Editor } from './PostEditView.style';

// Types
import { PostFormData } from 'src/typings';
import { PostEditViewProps } from './PostEditView.type';

/**
 * PostEditView is where the user can write a new blog post or edit an existing one
 */
const PostEditView: React.FC<PostEditViewProps> = ({ post }) => {
  // Hooks
  const history = useHistory();
  const { register, handleSubmit, formState, control } = useForm<PostFormData>({
    mode: 'onBlur',
    defaultValues: post,
  });
  const { mutate: deletePost } = useDeletePost();
  const { mutate: putPost } = usePutPost({
    onSuccess: () => {
      redirectFromEditView();
    },
  });

  // State
  const { isValid, errors } = formState;

  // Handlers
  const onSubmit = (formData: PostFormData) => {
    putPost({ ...formData, id: post?.id || undefined });
  };
  const handleCancel = () => {
    redirectFromEditView();
  };
  const redirectFromEditView = () => {
    if (post !== undefined) {
      const pathLessEdit = history.location.pathname.replace(/\/edit/, '');
      history.push(pathLessEdit);
    } else {
      history.push('/');
    }
  };
  const handleDeleteClick = () => {
    // TODO: don't use 'confirm' once you've got a better alternative.
    // eslint-disable-next-line no-restricted-globals
    const result = confirm(
      'Are you sure you want to delete this post?'
    ).valueOf();
    if (result && post) {
      deletePost(post);
      history.push('/');
    }
  };

  // Render
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="flex-end"
        justifyContent="space-between"
      >
        <div>
          <TextField
            label="Title"
            inputProps={{ ...register('title', { required: true }) }}
            errorType={errors?.title}
          />
        </div>

        {post && post.id && (
          <IconButton onClick={handleDeleteClick}>
            <DeleteForever />
          </IconButton>
        )}
      </Box>

      <Text variant="h6" mt={3}>
        Content
      </Text>
      <Controller
        name="content"
        control={control}
        // TODO: why doesn't 'touched' update for this field? onBlur?
        rules={{
          required: true,
          validate: (value: string) => {
            return value !== '';
          },
        }}
        // TODO: ref?
        render={({ field: { onBlur, onChange, value } }) => (
          <Editor onBlur={onBlur} onChange={onChange} value={value} />
        )}
      />

      <FormFooter>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button type="submit" disabled={!isValid}>
          Save
        </Button>
      </FormFooter>
    </Form>
  );
};

export default PostEditView;
