import { createStore, combineReducers } from 'redux';
import counterReducer from './counter';
import languageReducer from './language';
import themeReducer from './theme';

const Reduc = combineReducers({
  usersData: counterReducer,
  languageData: languageReducer,
  themeData: themeReducer,
});

const store = createStore(Reduc);

export default store;
