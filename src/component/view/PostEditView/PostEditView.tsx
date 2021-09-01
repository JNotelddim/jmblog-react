// Modules
import React from 'react';

// Hooks
import { useForm } from 'react-hook-form';

// Components
import { Button } from '@material-ui/core';
import TextField from 'src/component/form/TextField';

// Types
import { PostEditData } from 'src/typings';
import { PostEditViewProps } from './PostEditView.type';

/**
 * PostView is
 */
const PostView: React.FC<PostEditViewProps> = ({ post }) => {
  const { register, handleSubmit, formState } = useForm<PostEditData>({
    mode: 'onBlur',
    defaultValues: post,
  });
  const { isValid, errors } = formState;

  const onSubmit = () => {
    // TODO: useSavePost(formData);
  };

  // TODO: if this user is not the author, then redirect back to the post view page.
  // TODO: wysiwyg?

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Title"
        inputProps={{ ...register('title', { required: true }) }}
        errorType={errors?.title}
      />

      <TextField
        label="Content"
        inputProps={{ ...register('content', { required: true }) }}
        errorType={errors?.content}
      />

      <Button>Cancel</Button>
      <Button type="submit" disabled={!isValid}>
        Save
      </Button>
    </form>
  );
};

export default PostView;
