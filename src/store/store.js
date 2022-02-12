import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import globalUser from './reducers/currentLoggedUser.reducer';
import gameConfig from './reducers/gameConfig.reducer';
import currentSet from './reducers/kakeleCurrentSet.reducer';

const rootReducer = combineReducers({
  globalUser,
  gameConfig,
  currentSet,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
