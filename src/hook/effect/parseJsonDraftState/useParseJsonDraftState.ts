import { EditorState, convertFromRaw } from 'draft-js';

const UseParseJsonDraftState = (value: string) => {
  if (value) {
    const parsed = JSON.parse(value);
    const fromRaw = convertFromRaw(parsed);
    return EditorState.createWithContent(fromRaw);
  } else {
    return null;
  }
};

export default UseParseJsonDraftState;
