import React, { useState, FC, forwardRef } from 'react';

// Components
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

// Hooks
import { useParseJsonDraftState } from 'src/hook/effect';

// Styles
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// Types
import { WYSIWYGProps } from './WYSIWYGEditor.type';

/**
 * WYSIWYGEditor wraps an npm component which is a WYSIWYG built from draft-js.
 * This wrapper component handles the state of the editor, and the conversions from
 * the DraftJS state shapes to values which can be stored in the database.
 */
const WYSIWYGEditor: FC<WYSIWYGProps> = forwardRef((props, ref) => {
  const { onChange, className, value } = props;
  // Convert stringified raw state back to actual editor state
  const handledVal = useParseJsonDraftState(value);
  // Initialize state while handling case where there was no stored state coming in
  const [editorState, setEditorState] = useState(
    handledVal || EditorState.createEmpty()
  );

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
