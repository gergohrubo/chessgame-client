import React from 'react';

function Gamelist(props) {
  return (
    <div>
      <p>This is the list of all the games</p>
      {props.games && props.games.map(game => <div key={game.id}>
        {game.username1}
      </div>)}
    </div>
  );
}

export default Gamelist;