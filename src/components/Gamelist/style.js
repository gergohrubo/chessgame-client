import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  gamelistContainer: {
    display: 'inline-block',
    width: '50%'
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  }
}));