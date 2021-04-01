
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { createStore } from 'redux';
import rootReducer from '../src/redux/reducers';
import { Provider } from "react-redux";
import AdminLayout from "layouts/Admin";


const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Redirect from="/" to="/admin/dashboard" />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
