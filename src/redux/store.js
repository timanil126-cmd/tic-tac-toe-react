import { createStore } from 'redux';
import { gameReducer } from './reducers';

const store = createStore(gameReducer);

let subscribers = [];

const subscribe = (callback) => {
  const unsubscribe = store.subscribe(callback);
  subscribers.push(callback);

  return () => {
    unsubscribe();
    subscribers = subscribers.filter((sub) => sub !== callback);
  };
};

const notifySubscribers = () => {
  subscribers.forEach((callback) => callback());
};

const dispatch = (action) => {
  store.dispatch(action);
  notifySubscribers();
};

export { store, subscribe, dispatch };
