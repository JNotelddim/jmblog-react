import React from 'react';
import { styled } from '@material-ui/core';

import Text from 'src/component/base/Text';

export const Heading = styled((props) => (
  <Text variant="h1" mb={6} mt={10} {...props} />
))({});
