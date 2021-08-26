// Modules
import React from 'react';

// Components
import NavHeader from 'src/component/partial/NavHeader';

// Styled Components
import { Base } from './CenteredLayout.style';

/**
 * CenteredLayout is used as a wrapper for page contents to get a consistently
 * centered layout between pages.
 */
const CenteredLayout: React.FC = ({ children }) => (
  <div>
    <NavHeader />
    <Base>{children}</Base>
  </div>
);

export default CenteredLayout;
