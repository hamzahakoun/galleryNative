import { combineReducers } from 'redux' ;
import authReducer from './authReducer' ;
import routeReducer from './routeReducer' ;
import imagesReducer from './imagesReducer' ;


const rootReducer = combineReducers({
  auth : authReducer,
  route : routeReducer ,
  images : imagesReducer ,
})

export default rootReducer ;
