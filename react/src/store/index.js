import { createStore } from 'redux';
import allReducers from '../reducers/rootReducers';

export const store = createStore(allReducers);
