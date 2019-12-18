import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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

export default function Gamelist(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.cardGrid} maxWidth="md">
        <Typography gutterBottom variant="h5" component="h2">
          List of games
        </Typography>
        {/* End hero unit */}
        <Grid container spacing={4}>
          {props.games && props.games.map(game => (
            <Grid item key={game.name} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Player1: {/*game.users && game.users.length > 0 && game.users[0].name*/}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                    Player2: {/*game.users && game.users.length > 1 && game.users[1].name*/}
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
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}