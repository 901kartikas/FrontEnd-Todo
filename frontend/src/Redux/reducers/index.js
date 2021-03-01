import { combineReducers } from "redux";

import user from './userReducer';
import loading from './loadingReducer';
import todoCategory from './todolistReducer';
const rootReducer = combineReducers({user, loading, todoCategory});

export default rootReducer;

