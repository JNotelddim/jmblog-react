import { styled } from '@material-ui/core';
import Text from 'src/component/base/Text';

export const TitleText = styled((props) => (
  <Text variant="h1" color="textSecondary" {...props} />
))(({ theme }) => ({
  paddingLeft: theme.spacing(3),
}));

export const ListContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

export const MenuContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  margin: theme.spacing(2, 0),
  padding: theme.spacing(0, 3),
}));
