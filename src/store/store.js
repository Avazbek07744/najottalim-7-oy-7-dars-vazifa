import { createStore, combineReducers } from 'redux';
import counterReducer from './counterReducer';
import languageReducer from './languageReducer';
import themeReducer from './themeReducer';

const Reduc = combineReducers({
  usersData: counterReducer,
  languageData: languageReducer,
  themeData: themeReducer,
});

const store = createStore(Reduc);

export default store;
