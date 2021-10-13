import React from 'react';
import { styled } from '@material-ui/core';

import BaseLabelledText from 'src/component/base/LabelledText';

export const LabelledText = styled(BaseLabelledText)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    width: '267px',
  },
}));
