import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import {MyContext} from '../common/Contect';

function PrivateRoute({ element: Component, ...rest }) {
  // Use the useContext hook to access the AuthContext
  const { currentUser } = useContext(MyContext);

  return (
    <Route
      {...rest}
      render={props =>
        currentUser ? (
          <Component {...props} />
        ) : (
          <div>Not Auth</div>
        )
      }
    />
  );
}

export default PrivateRoute;
