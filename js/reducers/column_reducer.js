import merge from 'lodash/merge';

const defaultState = {
  cards: {
    1: {id: 1, body: "fdsa", colId: 0},
    2: {id: 2, body: "fdsa", colId: 0},
    3: {id: 3, body: "fdsa", colId: 1},
    4: {id: 4, body: "fdsa", colId: 2},
    5: {id: 5, body: "fdsa", colId: 3},
  }
};

const DataReducer = (state = defaultState, action) => {

  let newState = merge({}, state);

  switch (action.type){
    case "MOVE_RIGHT":
      debugger
      newState.cards[action.cardId].colId += 1;
      return newState;
    case "MOVE_LEFT":
      newState.cards[action.cardId].colId -= 1;
      return newState;
    case "ADD_CARD":
      newState.cards[Object.keys(newState.cards).length] = {id: Object.keys(newState.cards).length, body: action.body, colId: action.colId}
      return newState;
    default:
      return newState;
  }
}


export default DataReducer;
