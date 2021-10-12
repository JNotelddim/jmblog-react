import React from 'react';
import { styled } from '@material-ui/core';

import Text from 'src/component/base/Text';

export const Base = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: theme.spacing(2),
}));

export const LabelText = styled((props) => {
  const { variant, ...rest } = props;
  const labelVariant = variant || 'h6';
  return <Text variant={labelVariant} {...rest} />;
})({});

export const BaseText = styled((props) => {
  const { variant, ...rest } = props;
  const textVariant = variant || 'body1';
  return <Text variant={textVariant} {...rest} />;
})({});
