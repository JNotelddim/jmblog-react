import React from 'react';
import { styled, Box } from '@material-ui/core';

export const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
});

export const FootingContainer = styled((props) => (
  <Box
    mt={4}
    display="flex"
    flexDirection="row"
    justifyContent="space-between"
    alignItems="center"
    {...props}
  />
))({});
