"use client";

import { combineReducers } from 'redux';
import tabReducer from './reducer';

const rootReducer = combineReducers({
  tabData: tabReducer,
});

export default rootReducer;