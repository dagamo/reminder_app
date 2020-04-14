import { combineReducers } from 'redux';
//reducers
import { common } from './common';
import { calendar } from './calendar';
import { reminder } from './reminder';

export default combineReducers({ common, calendar, reminder });
