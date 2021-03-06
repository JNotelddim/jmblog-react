import React from 'react';

import { StyledTypography } from './Text.style';
import { TextProps } from './Text.type';

/**
 * Text is a wrapper for the Mui Typography component which ties in the Mui
 * 'spacing' props to make spacing on text a little easier.
 */
const Text: React.FC<TextProps> = (props) => <StyledTypography {...props} />;

export default Text;
