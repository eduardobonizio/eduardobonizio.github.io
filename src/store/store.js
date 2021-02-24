import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import currentUser from './reducers/currentUser.reducer';
import gameConfig from './reducers/gameConfig.reducer';
// import screenSize from './reducers/screenSize.reducer';

const rootReducer = combineReducers({
  // screenSize,
  currentUser,
  gameConfig,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

// store.subscribe(() => console.log(store.getState()));

export default store;
