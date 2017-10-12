// Dependencies
import { combineReducers } from 'redux';

// Containers Reducers
import items from '../../app/items/reducer';

// Shared Reducers
import device from './deviceReducer';

const rootReducer = combineReducers({
  items,
  device
});

export default rootReducer;
