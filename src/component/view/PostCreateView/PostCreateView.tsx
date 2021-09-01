// Modules
import React from 'react';

// Hooks
import { useForm } from 'react-hook-form';

// Components
import { Button } from '@material-ui/core';
import TextField from 'src/component/form/TextField';

// Types
import { PostCreateData } from 'src/typings';

/**
 * PostCreateView is where the user can write a new blog post.
 */
const PostCreateView: React.FC = () => {
  const { register, handleSubmit, formState } = useForm<PostCreateData>({
    mode: 'onBlur',
  });
  const { isValid, errors } = formState;

  const onSubmit = () => {
    // TODO: useSavePost(formData);
  };

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

export default PostCreateView;
