import { combineReducers } from 'redux';
import homeReducer from "../components/home/reducer/homeReducer";
import todoReducer from "../components/todo/reducer/todoReducer";


const allReducers = combineReducers({
    home: homeReducer,
    todo: todoReducer
});
export default allReducers;