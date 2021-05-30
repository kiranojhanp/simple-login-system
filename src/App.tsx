import React from "react";
import { Route, Switch, BrowserRouter, HashRouter } from "react-router-dom";
import "./App.css";

import { Login } from "./screen/LoginScreen";
import { Signup } from "./screen/SignupScreen";
import { Dashboard } from "./screen/DashboardScreen";

import PrivateRoute from "./components/PrivateRoute.js";

import { UserProvider } from "./UserContext";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <div className="App">
          {/* <Navbar /> */}
          <div className="App-header">
            <Switch>
              <Route path="/" component={Login} exact />
              <Route path="/signup" component={Signup} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <h1>Error 404</h1>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
