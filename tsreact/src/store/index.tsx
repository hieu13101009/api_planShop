import {createStore} from "redux";
import RootReducer from "../reducers/RootReducer";

const Store = createStore(RootReducer);

export type RootStore = ReturnType<typeof RootReducer>

export default Store