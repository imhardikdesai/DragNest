import { combineReducers } from 'redux';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
// slices
import screenReducer from './slices/screen';
import templateReducer from './slices/template';
import searchReducer from './slices/search';

// ----------------------------------------------------------------------

export const createNoopStorage = () => ({
  getItem(_key: string) {
    return Promise.resolve(null);
  },
  setItem(_key: string, value: any) {
    return Promise.resolve(value);
  },
  removeItem(_key: string) {
    return Promise.resolve();
  },
});

export const storage =
  typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

export const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};

export const rootReducer = combineReducers({
  screen: screenReducer,
  template: templateReducer,
  search: searchReducer,
});
