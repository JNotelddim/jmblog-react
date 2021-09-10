// Modules
import React from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// Hooks
import { Controller, useForm } from 'react-hook-form';

// Components
import { Button } from '@material-ui/core';
import Text from 'src/component/base/Text';
import { Form, TextField, FormFooter, Editor } from './PostEditView.style';

// Types
import { PostCreateData } from 'src/typings';
import { PostEditViewProps } from './PostEditView.type';

/**
 * PostCreateView is where the user can write a new blog post.
 */
const PostCreateView: React.FC<PostEditViewProps> = ({ post }) => {
  const { register, handleSubmit, formState, control } =
    useForm<PostCreateData>({
      mode: 'onBlur',
    });
  const { isValid, errors } = formState;

  const onSubmit = (formData: PostCreateData) => {
    console.log({ formData });
    // TODO: useSavePost(formData);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
        rules={{ required: true }}
        // TODO: add validation logic
        // TODO: ref?
        render={({ field: { onBlur, onChange, value } }) => (
          <Editor onBlur={onBlur} onChange={onChange} value={value} />
        )}
      />

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
