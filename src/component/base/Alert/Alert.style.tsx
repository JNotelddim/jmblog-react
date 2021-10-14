import { Theme, styled } from '@material-ui/core';
import { AlertType, ERROR, INFO, SUCCESS, WARNING } from 'src/typings';

const getColorByType = (type: AlertType, theme: Theme) => {
  // TODO replace switch with ${theme.palette[type.toLowerCase()]} -- index type doesn't align
  switch (type) {
    case ERROR:
      return theme.palette.error;
    case WARNING:
      return theme.palette.warning;
    case SUCCESS:
      return theme.palette.success;
    case INFO:
      return theme.palette.info;
  }
};

export const Base = styled('div')<Theme, { type: AlertType }>(
  ({ theme, type }) => {
    const background = getColorByType(type, theme).light;
    const color = theme.palette.getContrastText(background);

    return {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: theme.spacing(1.5, 4, 1.5, 6),
      width: '95%',

      background,
      color,
      zIndex: 1,
      border: `1px solid ${getColorByType(type, theme).dark}`,
      borderRadius: '4px',

      [theme.breakpoints.up('md')]: {
        width: '300px',
      },
    };
  }
);
