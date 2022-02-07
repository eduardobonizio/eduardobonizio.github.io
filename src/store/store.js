import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import globalUser from './reducers/currentLoggedUser.reducer';
import gameConfig from './reducers/gameConfig.reducer';
// import screenSize from './reducers/screenSize.reducer';

const rootReducer = combineReducers({
  // screenSize,
  globalUser,
  gameConfig,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
