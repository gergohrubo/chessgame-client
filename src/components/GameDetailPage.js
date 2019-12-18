import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
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
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  }
}));

function GameDetailPage(props) {
  const classes = useStyles();
  return (
    <div>
      {props.games.reduce((acc, game) => {
        if (game.id === parseInt(props.pageID)) {
          acc = <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                Hello this is game number {game.id} {/*game.users && game.users.length > 0 && game.users[0].name*/}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                White player: {assignPlayers(game)['white']}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                Black player: {assignPlayers(game)['black']}
              </Typography>
            </CardContent>
            {/*(game.users.length < 2)*/true && <CardActions>
              <Button size="small" color="primary" onClick={() => props.onClick(game.id, "white")}>
                Join as white
                </Button>
            </CardActions>}
            {/*(game.users.length < 2)*/true && <CardActions>
              <Button size="small" color="primary" onClick={() => props.onClick(game.id, "black")}>
                Join as black
              </Button>
            </CardActions>}
          </Card>
        }
        return acc
      }, 0)}
    </div>
  );
}

export default GameDetailPage;