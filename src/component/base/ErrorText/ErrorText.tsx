import React from 'react';

import Text from 'src/component/base/Text';

const ErrorText: React.FC = (props) => (
  <Text variant="body2" color="error" {...props} />
);

export default ErrorText;
