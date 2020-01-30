import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  navbar: {
    backgroundColor: '#BF6A24',
    padding: '1% 0',
    textAlign: 'left'
  },
  navbarUsername: {
    display: 'inline',
    position: 'absolute',
    right: 0,
    margin: 'auto 1 %'
  },
  logout: {
    display: 'inline'
  }
}));