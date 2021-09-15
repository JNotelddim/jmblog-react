import { ContentBlock, convertFromHTML } from 'draft-js';

// const blockTypeMap = {
//   unstyled: undefined,
//   paragraph: undefined,
//   'header-one': '#',
//   'header-two': '##',
//   'header-three': '###',
//   'header-four': '####',
//   'header-five': '#####',
//   'header-six': '######',
//   'unordered-list-item': '-',
//   'ordered-list-item': undefined,
//   blockquote: '>',
//   'code-block': undefined,
//   atomic: undefined,
// };
type MarkdownMarker =
  | '#'
  | '##'
  | '###'
  | '####'
  | '#####'
  | '######'
  | '-'
  | '>';
// TODO: resolve why I can't use this type as a key --
const blockTypeByMarkdownMap: { [key: MarkdownMarker]: string } = {
  '#': 'header-one',
  '##': 'header-two',
  '###': 'header-three',
  '####': 'header-four',
  '#####': 'header-five',
  '######': 'header-six',
  '-': 'unordered-list-item',
  '>': 'blockquote',
};

const getBlockTypeByText = (text: string) => {
  const firstWord = text.split(' ')[0];
  if (Object.keys(blockTypeByMarkdownMap).includes(firstWord)) {
    const style = blockTypeByMarkdownMap[firstWord as MarkdownMarker];
    return style;
  }

  return 'unstyled';
};

/**
 * useConvertMarkdownToDraftBlock takes a string which is expected to be markdown,
 * it then splits that markdown into blocks, and converts those blocks into
 */
const UseConvertMarkdownToDraftBlock = (input: string) => {
  const splitByNewline = input.split('\n');

  // const basic = convertFromHTML(input);
  // console.log({ basic });

  const transformed = splitByNewline.map((textBlock) => {
    let newBlock = convertFromHTML(textBlock);
    newBlock.contentBlocks.forEach((block) =>
      block.set('type', getBlockTypeByText(block.getText()))
    );
    // newBlock.contentBlocks[0].set('type', 'header-three');
    console.log({ textBlock, newBlock });
    return newBlock;
  });

  let blocks: ContentBlock[] = [];

  transformed.forEach((item) => {
    blocks.push(...item.contentBlocks);
  });

  const retVal = {
    transformed,
    contentBlocks: blocks,
    entityMap: transformed.map((item) => item.entityMap),
  };
  // console.log({ retVal });
  return retVal;
};

export default UseConvertMarkdownToDraftBlock;
