import { combineReducers } from "redux";
import { BurgerReducer } from './reducers/BurgerComponent';

const rootReducer = combineReducers({
    BurgerReducer,
  });
  
  export default rootReducer;