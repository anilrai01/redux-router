import { combineReducers } from "redux";
import addActionReducer from "./taskActionReducers";

const rootreducer = combineReducers({
    taskData: addActionReducer
})

export default rootreducer;