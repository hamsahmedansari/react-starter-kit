import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import Router from "./routers";
import "./App.scss";
function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <div className="app">
            <Router />
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
