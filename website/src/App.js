import React from 'react';

import Signup from "./components/Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "./contexts/Auth"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// import Dashboard from "./Dashboard"
import Login from "./components/login"
import PrivateRoute from "./components/privateRoute"
// import ForgotPassword from "./ForgotPassword"
// import UpdateProfile from "./UpdateProfile"
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";

const App = () => {
  return (
      <Router>
        <AuthProvider>
          <Switch>
            {/* <PrivateRoute exact path="/" component={Dashboard} /> */}
            <PrivateRoute path="/" exact component={Join} />
            <PrivateRoute path="/chat" component={Chat} />
            {/* <PrivateRoute path="/update-profile" component={UpdateProfile} /> */}
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            {/* <Route path="/forgot-password" component={ForgotPassword} /> */}
          </Switch>
        </AuthProvider>
      </Router>)
};

export default App;