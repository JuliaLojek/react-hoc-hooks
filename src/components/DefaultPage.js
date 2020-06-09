import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

function DefaultPage() {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    setTimeout(() => setRedirect(true), 3000)
  }, []);

  return (
    <div>
      This page doesn't exist!
      <br />
      You will be redirected to our home page :)
      {redirect ? <Redirect to="/" /> : null}
    </div>
  )
}

export default DefaultPage;