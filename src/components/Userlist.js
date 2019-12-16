import React from 'react';

function Userlist(props) {
  return (
    <div>
      <p>This is the list of all the users</p>
      {props.users && props.users.map(user => <div key={user.id}>{user.name}</div>)}
    </div>
  );
}

export default Userlist;