import React, { useState, FC, forwardRef } from 'react';
import { stateToMarkdown } from 'draft-js-export-markdown';

// Components
import { ContentState, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { WYSIWYGProps } from './WYSIWYGEditor.type';

const WYSIWYGEditor: FC<WYSIWYGProps> = forwardRef((props, ref) => {
  const { onChange, className, value } = props;

  // TODO: instead of just 'createFromText', convert text to blocks, and apply correct 'type'
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(ContentState.createFromText(value))
  );

  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState);
    return onChange(stateToMarkdown(editorState.getCurrentContent()));
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
