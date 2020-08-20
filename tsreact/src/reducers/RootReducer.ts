import { combineReducers } from 'redux';
import {homeReducer} from '../container/HomeContainer/reducers/homeReducers';


const RootReducer = combineReducers({
    home: homeReducer,
});

export default RootReducer;