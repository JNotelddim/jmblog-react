// Modules
import React from 'react';

// Hooks
import { Controller, useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { usePutPost, useDeletePost } from 'src/hook/api/posts';
import { handleParseJsonDraftState } from 'src/hook/effect';
import { useSnackbarNotification } from 'src/hook/effect';

// Components
import { Box, Button, IconButton } from '@material-ui/core';
import { DeleteForever } from '@material-ui/icons';
import Text from 'src/component/base/Text';
import { Form, TextField, FormFooter, Editor } from './PostForm.style';

// Types
import { PostFormData } from 'src/typings';
import { PostFormProps } from './PostForm.type';

/**
 * PostForm is where the user can write a new blog post or edit an existing one
 */
const PostForm: React.FC<PostFormProps> = ({ post }) => {
  // Hooks
  const { openNotification } = useSnackbarNotification();
  const history = useHistory();
  const { register, handleSubmit, formState, control } = useForm<PostFormData>({
    mode: 'onBlur',
    defaultValues: post,
  });
  const { mutate: deletePost } = useDeletePost({
    onSuccess: () => {
      openNotification({ message: 'Post deleted.', type: 'SUCCESS' });
    },
  });
  const { mutate: putPost } = usePutPost({
    onSuccess: () => {
      redirectFromForm();
    },
  });

  // State
  const { isValid, errors } = formState;

  // Handlers
  // note that this is not 'handleSubmit' because that name is taken
  const onSubmit = (formData: PostFormData) => {
    const state = handleParseJsonDraftState(formData.content);
    const contentText = state.getCurrentContent().getPlainText();
    const summary = `${contentText.slice(0, 80)}${
      contentText.length > 80 ? '...' : ''
    }`;
    putPost({ ...formData, summary, id: post?.id || undefined });
  };

  const handleCancel = () => {
    redirectFromForm();
  };

  const redirectFromForm = () => {
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
        <TextField
          label="Title"
          inputProps={{ ...register('title', { required: true }) }}
          errorType={errors?.title}
        />

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

export default PostForm;
