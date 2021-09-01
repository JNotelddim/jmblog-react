// Modules
import React from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// Hooks
import { useForm } from 'react-hook-form';

// Components
import { Button } from '@material-ui/core';
import { Editor } from 'react-draft-wysiwyg';
import { Form, TextField, FormFooter } from './PostCreateView.style';

// Types
import { PostCreateData } from 'src/typings';

// TODO: consider condensing this in with the Edit view if the typings
// on the submit hooks allows it.
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
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Title"
        inputProps={{ ...register('title', { required: true }) }}
        errorType={errors?.title}
      />

      <Editor {...register('content', { required: true })} />

      <FormFooter>
        <Button>Cancel</Button>
        <Button type="submit" disabled={!isValid}>
          Save
        </Button>
      </FormFooter>
    </Form>
  );
};

export default PostCreateView;
