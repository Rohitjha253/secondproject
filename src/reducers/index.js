import { combineReducers } from 'redux';
import postReducer from './postReducer';

const reduce = combineReducers(
    {
        posts: postReducer
    }
)

export default reduce