import { combineReducers } from 'redux';

import productsReducer from '../products/reducer';
import authReducer from '../auth/reducer';

const rootReducer = combineReducers({
  products: productsReducer,
  login: authReducer,
});

export default rootReducer;
