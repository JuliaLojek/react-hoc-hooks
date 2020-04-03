import React from 'react';
import { withFetch } from '../hoc/withFetch';

const womenEndpoint = "https://randomuser.me/api/?gender=female&?format=json&results=10";

function Women(props) {
  const renderData = () => props.data.map(user => 
    <div>
      <p>{user.name && user.name.first} {user.name && user.name.last}</p>
    </div>
  );

  return (
    <div>
      <h3>Women in our team:</h3>
      {renderData()}
    </div>
  );
}

export default withFetch(Women, womenEndpoint);