import React from "react";
import { Provider } from "react-redux";
import configureStore from "./src/store";
import AppContainer from "./navigation";


const App = () => {
  return (
    <Provider store={configureStore()}>
      <AppContainer />
    </Provider>
  );
};

export default App;