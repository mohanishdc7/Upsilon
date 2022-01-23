import React from "react";
import { Redirect, Route } from "react-router";
import Auth from "../Auth/Auth";

function ProtectedRoute({ component: Component, ...rest }) {
  console.log(Auth.isAuthenticated());
  return (
    <Route
      {...rest}
      render={(props) => {
        if (Auth.isAuthenticated() === true) {
          console.log("Going");
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    ></Route>
  );
}

export default ProtectedRoute;
