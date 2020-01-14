import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import thunk from "redux-thunk";
import logger from "redux-logger";

const persistConfig = {
  key: "root",
  storage,
  blacklist: [],
  debug: true
};
const enhancer = compose(applyMiddleware(thunk, logger));
const initialState = {};
const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer, initialState, enhancer);
let persistor = persistStore(store);

export { store, persistor };
