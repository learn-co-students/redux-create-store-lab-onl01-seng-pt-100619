function createStore(candyReducer){
  let state;

  function dispatch(action) {
    // can dispatch actions with data associated to update the state
    state = candyReducer(state, action);
    render();
  }

  // returns the default state based on the reducer for the store:
  function getState(){
    return state;
  }


  return {
    dispatch,
    getState
  }
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

// Define a variable named store
// assign it to whatever is returned by the createStore function
// when it is passed the candyReducer function
let store = createStore(candyReducer);

store.dispatch({ type: '@@INIT' })

// use your createStore function and the functions provided here to create a store
// once the store is created, call an initial dispatch