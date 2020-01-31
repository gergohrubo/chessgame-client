import React from 'react';
import { Typography, Card, CardActions, CardContent, Button } from '@material-ui/core';
import assignPlayers from '../../assignPlayer'
import { useStyles } from './style'

function checkIfThereIsAPlayer(game, color) {
  if (game.users) {
    if (game.users.length > 0) {
      if (game.users.length > 1) {
        return true
      } else {
        if (game.users[0]['player']['color'] === color) {
          return true
        }
      }
    }
  }
  return false
}

function GameDetailPage(props) {
  const classes = useStyles();
  return (
    <div>
      {props.games.reduce((acc, game) => {
        if (game.id === parseInt(props.pageID)) {
          acc = <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                Hello this is game number {game.id}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                White player: {assignPlayers(game)['white']}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                Black player: {assignPlayers(game)['black']}
              </Typography>
              {!checkIfThereIsAPlayer(game, 'white') && props.user.jwt && <CardActions className={classes.cardAction}>
                <Button size="small" color="primary" variant="contained" onClick={() => props.onClick(game.id, "white")}>
                  Join as white
              </Button>
              </CardActions>}
              {!checkIfThereIsAPlayer(game, 'black') && props.user.jwt && <CardActions className={classes.cardAction}>
                <Button size="small" color="primary" variant="contained" onClick={() => props.onClick(game.id, "black")}>
                  Join as black
              </Button>
              </CardActions>}
            </CardContent>
          </Card>
        }
        return acc
      }, 0)}
    </div>
  );
}

export default GameDetailPage;