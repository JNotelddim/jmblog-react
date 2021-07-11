import React from 'react';
import { Base } from './CenteredLayout.style';

const CenteredLayout: React.FC = ({ children }) => (
  // TODO: add nav header
  <Base>{children}</Base>
);

export default CenteredLayout;
