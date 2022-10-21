import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "./rootReducer";



const store = configureStore({ reducer: rootReducer, middleware: logger });

export default store;
