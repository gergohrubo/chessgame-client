import React from 'react';
import { Card, CardContent, CssBaseline, Grid, Typography, Container } from '@material-ui/core';
import { Link } from 'react-router-dom'
import assignPlayers from '../../assignPlayer'
import { useStyles } from './style'

export default function Gamelist(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.gamelistContainer}>
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
      </div>
    </React.Fragment>
  );
}