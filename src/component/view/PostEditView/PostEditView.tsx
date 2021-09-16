// Modules
import React from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// Hooks
import { Controller, useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { usePutPost } from 'src/hook/api/posts';

// Components
import { Button } from '@material-ui/core';
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

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* TODO: add 'delete button' */}
      <TextField
        label="Title"
        inputProps={{ ...register('title', { required: true }) }}
        errorType={errors?.title}
      />

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
            // TODO: add validation logic
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
