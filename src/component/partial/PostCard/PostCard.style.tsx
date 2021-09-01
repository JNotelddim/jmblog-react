import { styled } from '@material-ui/core';
import Text from 'src/component/base/Text';

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(4),
  margin: theme.spacing(1, 0),
  cursor: 'pointer',

  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: '2px 2px 5px lightGrey',
  },
}));

export const Title = styled((props) => <Text variant="h3" {...props} />)(
  ({ theme }) => ({
    marginBottom: theme.spacing(1),
  })
);

export const Summary = styled((props) => <Text variant="body2" {...props} />)(
  {}
);
