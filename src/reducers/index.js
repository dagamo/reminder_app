import { combineReducers } from 'redux';
//reducers
import { common } from './common';
import { calendar } from './calendar';

export default combineReducers({ common, calendar });
