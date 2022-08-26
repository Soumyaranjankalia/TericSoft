import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import { armouryReducer } from "./reducer";

const middleware = [reduxThunk]

const rootReducer = combineReducers({
  armoury: armouryReducer,
  
});

export const store = legacy_createStore(rootReducer, applyMiddleware(...middleware))