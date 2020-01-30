import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  }
}));

export default function CreateGameButton(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={props.onClick}
      >
        Create New Game
      </Button>
    </React.Fragment>
  );
}