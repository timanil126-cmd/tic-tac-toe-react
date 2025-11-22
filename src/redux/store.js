import { createStore } from 'redux';
import { gameReducer } from './reducers';

// Создаем store
export const store = createStore(gameReducer);

// Функция для подписки на изменения store
let subscribers = [];

export const subscribe = (callback) => {
  subscribers.push(callback);

  // Возвращаем функцию для отписки
  return () => {
    subscribers = subscribers.filter((sub) => sub !== callback);
  };
};

// Функция для уведомления всех подписчиков
export const notifySubscribers = () => {
  subscribers.forEach((callback) => callback());
};

// Функция для получения текущего состояния
export const getState = () => store.getState();

// Функция для диспатча действий с автоматическим уведомлением подписчиков
export const dispatch = (action) => {
  store.dispatch(action);
  notifySubscribers();
};
