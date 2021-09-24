import { EditorState, convertFromRaw } from 'draft-js';

export const handleParseJsonDraftState = (value: string) => {
  const parsed = JSON.parse(value);
  const fromRaw = convertFromRaw(parsed);
  return EditorState.createWithContent(fromRaw);
};

const UseParseJsonDraftState = (value?: string) => {
  if (value) {
    return handleParseJsonDraftState(value);
  } else {
    return null;
  }
};

export default UseParseJsonDraftState;
