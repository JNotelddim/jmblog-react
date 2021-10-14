// Modules
import React, { FC } from 'react';
import { IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';

// Components
// import Text from 'src/component/base/Text';

// Styles
import { Base } from './Alert.style';

// Typings
import { AlertProps } from './Alert.type';

/**
 * Alert renders wherever desired to show notification in a view.
 * This is used by the Snackbar component to maintain a cohesive aesthetic for
 * the Alerts + Snackbar notifications.
 */
const Alert: FC<AlertProps> = ({ type, children, onClose, ...props }) => {
  return (
    <Base type={type} {...props}>
      {children}
      <IconButton onClick={onClose} size="small" color="inherit">
        <Close />
      </IconButton>
    </Base>
  );
};

export default Alert;
