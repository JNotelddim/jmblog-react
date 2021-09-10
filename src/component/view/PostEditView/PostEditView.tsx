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
import { PostFormData } from 'src/typings';
import { PostEditViewProps } from './PostEditView.type';
import { usePutPost } from 'src/hook/api/posts';

/**
 * PostCreateView is where the user can write a new blog post or edit an existing one
 */
const PostCreateView: React.FC<PostEditViewProps> = ({ post }) => {
  const { register, handleSubmit, formState, control } = useForm<PostFormData>({
    mode: 'onBlur',
  });
  const { isValid, errors } = formState;
  const { mutate: putPost } = usePutPost({
    onSuccess: () => {
      // TODO: redirect to 'read' view.
    },
  });

  const onSubmit = (formData: PostFormData) => {
    console.log({ post, formData });
    putPost({ ...formData, id: post?.id || undefined });
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
        // TODO: why doesn't 'touched' update for this field?
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
        <Button>Cancel</Button>
        <Button type="submit" disabled={!isValid}>
          Save
        </Button>
      </FormFooter>
    </Form>
  );
};

export default PostCreateView;
