import React from 'react';
import useFetch from '../hooks/useFetch';

const usersEndpoint = "https://randomuser.me/api/?format=json&results=10";

function UsersHook() {
  const [data, isLoading, isError, fetchAPI] = useFetch(usersEndpoint);

  return (
    <div>
      <button onClick={fetchAPI}>get users</button>
      
      <div>
        {isError ?
          "could not download data... :("
          :
          isLoading ?
            "loading..."
            :
            data.map(user => {
              return <div key={user.login.uuid}>
                {user.name.first} {user.name.last}
              </div>
            })
        }
      </div>
    </div>
  )
}

export default UsersHook;