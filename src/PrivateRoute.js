import React from "react";
import { Route, Redirect } from "react-router-dom";
const PrivateRoute = ({ component: Component, path, ...props }) => {
  if (localStorage.getItem("token")) {
    return (
      <Route path={path}>
        <Component {...props} />
      </Route>
    );
  } else {
    return <Redirect to="/" />;
  }
};
export default PrivateRoute;
