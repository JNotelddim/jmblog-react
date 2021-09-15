// Modules
import React, { useState, FC, forwardRef } from 'react';
import { stateToMarkdown } from 'draft-js-export-markdown';

// Components
import { ContentState, EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

// Styles
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// Types
import { WYSIWYGProps } from './WYSIWYGEditor.type';
import { useConvertMarkdownToDraftBlock } from 'src/hook/effect/convertMarkdownToDraftBlock';

/**
 * WYSIWYGEditor is a component which can be used for writing fresh lengths of markdown,
 * or for editing existing passages.
 */
const WYSIWYGEditor: FC<WYSIWYGProps> = forwardRef((props, ref) => {
  // State
  const { onChange, className, value } = props;

  // Hooks
  // TODO: find simpler way to conver from markdown to draft-js content blocks...
  const { contentBlocks, entityMap } = useConvertMarkdownToDraftBlock(value);
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(ContentState.createFromText(value))
  );

  console.log({
    content: convertToRaw(editorState.getCurrentContent()),
  });

  const exampleContent = ContentState.createFromBlockArray(
    contentBlocks,
    entityMap
  );
  console.log({ exampleContent, rawContent: convertToRaw(exampleContent) });

  // Handlers
  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState);
    return onChange(stateToMarkdown(editorState.getCurrentContent()));
  };

  // Render
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
