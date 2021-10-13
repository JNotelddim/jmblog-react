// Modules
import React, { FC } from 'react';

// Styles
import { Base, LabelText, BaseText } from './LabelledText.style';

// Typings
import { LabelledTextProps } from './LabelledText.type';

/**
 * LabelledText bundles together text and a label above that text.
 * This is intended for ease of displaying fields in a non-editing state.
 */
const LabelledText: FC<LabelledTextProps> = ({
  label,
  labelVariant,
  textVariant,
  children,
  ...props
}) => {
  return (
    <Base {...props}>
      <LabelText variant={labelVariant}>{label}</LabelText>
      <BaseText variant={textVariant}>{children}</BaseText>
    </Base>
  );
};

export default LabelledText;
