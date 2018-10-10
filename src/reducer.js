let initialState =  {
  history: [{
    squares: Array(9).fill(null),
  }],
  stepNumber: 0,
  xIsNext: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    /*case 'ADD_MOVE':


      return {
        history: state.history.concat([{
          squares: state.history[-1]state.id

        }])
      }*/
    default:
      return state
    }
}

export default reducer