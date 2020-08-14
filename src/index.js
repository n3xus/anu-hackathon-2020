/*!

=========================================================
* Now UI Dashboard PRO React - v1.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v=1.4.0";
import "assets/css/demo.css";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";

import { UserProvider } from "components/User";

const hist = createBrowserHistory();

// const user = {
//   AboutMe: "",
//   Address: "",
//   City: "",
//   Country: "",
//   DoB: "",
//   Email: "",
//   FirstName: "Ryan",
//   Gender: "",
//   LastName: "",
//   UserName: "",
//   Zip: "",
//   loggedIn: true,
// };

ReactDOM.render(
  <UserProvider>
    <Router history={hist}>
      <Switch>
        <Route
          path="/admin"
          render={(props) => {
            return <AdminLayout {...props} />;
          }}
        />
        <Route
          path="/auth"
          render={(props) => {
            return <AuthLayout {...props} />;
          }}
        />
        <Redirect to="/admin/doctors" />
      </Switch>
    </Router>
  </UserProvider>,
  document.getElementById("root")
);
