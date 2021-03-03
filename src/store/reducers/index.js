import { combineReducers } from 'redux';

import currentUser from './currentUser.reducer';
import gameConfig from './gameConfig.reducer';
// import screenSize from './screenSize.reducer';

const rootReducer = combineReducers({ currentUser, gameConfig });

export default rootReducer;
