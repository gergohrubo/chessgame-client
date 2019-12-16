import React from 'react';

function Gamelist(props) {
  return (
    <div>
      <p>This is the list of all the games</p>
      {props.games && props.games.map(game => <div key={game.id}>
        <p>Player1: {game.username1}</p>
        <p>Player2: {game.username2}</p>
        {(!game.username1 || !game.username2) && <button onClick={() => props.onClick(game.id)}>Join!</button>}
      </div>)}
    </div>
  );
}

export default Gamelist;