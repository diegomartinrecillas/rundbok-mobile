import React from "react";
import { Provider } from "react-redux";
import Router from "./Router.js";

import { store } from "./store/";

// Render the app container component with the provider around it
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router persistenceKey={__DEV__ ? "NavigationState" : null} />
      </Provider>
    );
  }
}
