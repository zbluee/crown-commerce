import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import persistedReducer from "./rootReducer";
import {persistStore} from 'redux-persist'

const middleware = process.env.NODE_ENV === 'development' ? [logger] : []
console.log(process.env.NODE_ENV);
export const store = configureStore({ reducer: persistedReducer, middleware: middleware });
export const persistor = persistStore(store)

