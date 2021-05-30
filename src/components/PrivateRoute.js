import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  let isLoggedIn;
  const getUserInfo = localStorage.getItem("userInfo");
  let userInfo = JSON.parse(getUserInfo);

  console.log(userInfo);

  //   if (Object.keys(userInfo).length !== 0) {
  //     isLoggedIn = false;
  //   } else {
  // }

  isLoggedIn = !getUserInfo ? false : userInfo.isValid;

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
