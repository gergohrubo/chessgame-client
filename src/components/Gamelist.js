import React from 'react';
import { Card, CardContent, CssBaseline, Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import assignPlayers from '../assignPlayer'

const useStyles = makeStyles(theme => ({
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

export default function Gamelist(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.cardGrid} maxWidth="md">
        <Typography gutterBottom variant="h5" component="h2">
          List of games
        </Typography>
        <Grid container spacing={4}>
          {props.games && props.games.map(game => (
            <Grid item key={game.name} xs={12} sm={6} md={4}>
              <Link to={`/game/${game.id}`}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Game number: {game.id}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      White player: {assignPlayers(game)['white']}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      Black player: {assignPlayers(game)['black']}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}