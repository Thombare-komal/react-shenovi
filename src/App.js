

import React, { Component } from "react";
import AdminLayout from "./AdminLayout";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/dashboard" render={props => <AdminLayout {...props} />} />
            <Route path="/users" render={props => <AdminLayout {...props} />} />
            <Route path="/public-forum" render={props => <AdminLayout {...props} />} />
            {/* <Route path="/login" render={props => <Login {...props} />} /> */}
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
