import { combineReducers } from 'redux';
import {homeReducer} from '../container/HomeContainer/reducers/homeReducer';


const RootReducer = combineReducers({
    home: homeReducer,
});

export default RootReducer;