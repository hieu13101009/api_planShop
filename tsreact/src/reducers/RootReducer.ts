import { combineReducers } from 'redux';
import {homeReducer} from '../container/HomeContainer/reducers/homeReducer';
import {p5jsReducer} from '../container/P5jsContainer/reducers/p5jsReducer';



const RootReducer = combineReducers({
    home: homeReducer,
    p5js: p5jsReducer
});

export default RootReducer;