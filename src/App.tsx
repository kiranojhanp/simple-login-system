import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";

import { Login } from "./screen/LoginScreen";
import { Signup } from "./screen/SignupScreen";
import { Dashboard } from "./screen/DashboardScreen";

import PrivateRoute from "./components/PrivateRoute.js";


import { UserProvider } from "./UserContext";

function App() {
  return (
    <UserProvider>
      <div className="App">
        {/* <Navbar /> */}
        <div className="App-header">
          <BrowserRouter>
            <Switch>
              <Route path="/" component={Login} exact />
              <Route path="/signup" component={Signup} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <h1>Error 404</h1>
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
