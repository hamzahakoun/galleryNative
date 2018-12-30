import { combineReducers } from 'redux' ;
import authReducer from './authReducer' ;
import routeReducer from './routeReducer' ;
import imagesReducer from './imagesReducer' ;
import tagsReducer from './tagsReducer' ;


const rootReducer = combineReducers({
  auth : authReducer,
  route : routeReducer ,
  images : imagesReducer ,
  tags : tagsReducer ,
})

export default rootReducer ;
