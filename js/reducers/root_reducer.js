import { combineReducers } from 'redux';
import ColumnReducer from './column_reducer';

const RootReducer = combineReducers({
  columns: ColumnReducer
});

export default RootReducer;
