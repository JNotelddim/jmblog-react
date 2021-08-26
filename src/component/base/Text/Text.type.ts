import { TypographyProps } from '@material-ui/core';
import { SpacingProps } from '@material-ui/system';

interface WithComponentProp {
  component?: string;
}
export interface TextProps
  extends TypographyProps,
    SpacingProps,
    WithComponentProp {}
