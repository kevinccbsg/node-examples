// Reducer function
// inside this thera actions
const counter = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

// storage 
const createStore = (reducer) => {
  let state;
  let listeners = [];
  // method to get the values
  const getState = () => state;
  // Dispatch actions
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };
  // subscribe to actions
  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };
  
  dispatch({});
  return { getState, dispatch, subscribe };
};
const store = createStore(counter);

const render = () => {
  document.body.innerText = store.getState();
};

store.subscribe(render);

render();

document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});
