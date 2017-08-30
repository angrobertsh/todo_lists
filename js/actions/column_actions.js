
export const moveRight = (cardId) => ({
  type: "MOVE_RIGHT",
  cardId
})

export const moveLeft = (cardId) => ({
  type: "MOVE_LEFT",
  cardId
})

export const addCard = (body, colId) => ({
  type: "ADD_CARD",
  body,
  colId
})
