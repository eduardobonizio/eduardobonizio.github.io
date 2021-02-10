import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import gameConfig from './reducers/gameConfig.reducer';
import screenSize from './reducers/screenSize.reducer';
import settings from './reducers/settings.reducer';

const rootReducer = combineReducers({
  settings,
  screenSize,
  gameConfig,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
