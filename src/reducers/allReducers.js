import faceReducer from './faceReducer';
import pageReducer from './pageReducer';
import qNumberReducer from './qNumberReducer';
import iconReducer from './iconsReducer';
import setNumReducer from './setNumReducer'; 
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    face: faceReducer,
    page: pageReducer, 
    qNumber: qNumberReducer,
    icons: iconReducer,
    setNum: setNumReducer
});

export default allReducers;