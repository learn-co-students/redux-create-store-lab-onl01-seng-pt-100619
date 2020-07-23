// write your createStore function here
function createStore(reducer) { //any reducer
  let state;
 
  function dispatch(action) { //takes in action
    state = reducer(state, action); //assign state to new value when passed through reducer
    render(); //renders new state
  }
 
  function getState() { //returns current state
    return state;
  }
 
  return {
    dispatch,
    getState
  };
}

function candyReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
      return state;
  }
}

function render() {
  let container = document.getElementById('container');
  if(store.getState()) {
    container.textContent = store.getState().join(' ')
  } else {
    throw new Error("the store's state has not been defined yet")
  }
};

// use your createStore function and the functions provided here to create a store
let store = createStore(candyReducer)
// once the store is created, call an initial dispatch
store.dispatch("ADD_CANDY") 