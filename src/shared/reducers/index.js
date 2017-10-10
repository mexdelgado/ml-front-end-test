// Dependencies
import { combineReducers } from 'redux';

// Containers Reducers
import blog from '../../app/blog/reducer';
import items from '../../app/items/reducer';

// Shared Reducers
import device from './deviceReducer';

const rootReducer = combineReducers({
  blog,
  items,
  device
});

export default rootReducer;
