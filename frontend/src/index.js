import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="496795311742-rfdjfti62dvq10c4jedi02e2n3609ped.apps.googleusercontent.com">
      <Router>
        <App />
      </Router>
    </GoogleOAuthProvider>
  </Provider>
);
