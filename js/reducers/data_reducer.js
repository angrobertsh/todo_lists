import merge from 'lodash/merge';

const defaultState = {
};

const DataReducer = (state = defaultState, action) => {

  let newState = merge({}, state);

  switch (action.type){
    case "TRA_LALA":
      newState = merge(newState);
      return newState;
    default:
      return newState;
  }
}


export default DataReducer;
