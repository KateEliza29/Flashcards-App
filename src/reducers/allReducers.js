import faceReducer from './faceReducer';
import pageReducer from './pageReducer';
import qNumberReducer from './qNumberReducer';
import iconReducer from './iconsReducer';
import setNumReducer from './setNumReducer'; 
import techReducer from './techReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    face: faceReducer,
    page: pageReducer, 
    qNumber: qNumberReducer,
    icons: iconReducer,
    setNum: setNumReducer,
    tech: techReducer
});

export default allReducers;