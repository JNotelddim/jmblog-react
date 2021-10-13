// Modules
import React from 'react';
import { Helmet } from 'react-helmet';

// Components
import NavHeader from 'src/component/partial/NavHeader';

// Styled Components
import { Base } from './CenteredLayout.style';

// Types
import { CenteredLayoutProps } from './CenteredLayout.type';

/**
 * CenteredLayout is used as a wrapper for page contents to get a consistently
 * centered layout between pages.
 */
const CenteredLayout: React.FC<CenteredLayoutProps> = ({
  children,
  helmetProps: { title = 'Blog', description = "JM's React blogging app" } = {},
}) => (
  <>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
    <NavHeader />
    <Base>{children}</Base>
  </>
);

export default CenteredLayout;
