import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import gameConfig from './reducers/gameConfig.reducer';
// import screenSize from './reducers/screenSize.reducer';

const rootReducer = combineReducers({
  // screenSize,
  gameConfig,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
