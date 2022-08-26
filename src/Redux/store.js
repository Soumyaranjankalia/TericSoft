import { legacy_createStore, combineReducers, } from "redux";

import { armouryReducer } from "./reducer";

const rootReducer = combineReducers({
  armourypageData: armouryReducer,
  
});

export const store = legacy_createStore(rootReducer);