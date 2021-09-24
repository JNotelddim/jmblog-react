import React, { useState, FC, forwardRef } from 'react';
// import { stateToMarkdown } from 'draft-js-export-markdown';

// Components
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { WYSIWYGProps } from './WYSIWYGEditor.type';

const WYSIWYGEditor: FC<WYSIWYGProps> = forwardRef((props, ref) => {
  const { onChange, className, value } = props;

  let basis;
  if (value) {
    const parsed = JSON.parse(value);
    const fromRaw = convertFromRaw(parsed);
    const result = EditorState.createWithContent(fromRaw);
    basis = result;
  } else {
    basis = EditorState.createEmpty();
  }
  const [editorState, setEditorState] = useState(basis);

  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState);

    return onChange(
      JSON.stringify(convertToRaw(editorState.getCurrentContent()))
    );
  };

  return (
    <div className={`wysiwyg-wrapper ${className}`}>
      <Editor
        ref={ref}
        editorState={editorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        onEditorStateChange={onEditorStateChange}
      />
    </div>
  );
});

export default WYSIWYGEditor;
