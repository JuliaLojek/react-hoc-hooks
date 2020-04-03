import React from 'react';
import { withFetch } from '../hoc/withFetch';

const usersEndpoint = "https://randomuser.me/api/?format=json&results=10";

function UserList(props) {
  const renderData = () => props.data.map(user => 
    <div>
      <p>{user.name && user.name.first} {user.name && user.name.last}</p>
    </div>
  );

  return (
    <div>
      <h3>Our users:</h3>
      {renderData()}
    </div>
  );
}

export default withFetch(UserList, usersEndpoint);