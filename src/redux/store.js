import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import persistedReducer from "./rootReducer";
import {persistStore} from 'redux-persist'

export const store = configureStore({ reducer: persistedReducer, middleware: [logger] });
export const persistor = persistStore(store)

