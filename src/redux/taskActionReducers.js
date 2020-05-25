import actionType from "./taskActionType";

const initialState = []

const addActionReducer = (state = initialState, action) => {
    switch(action.type){
        case(actionType.add):
            return [
                ...state,
                {
                    taskID: new Date().getTime(),
                    taskName: action.payload.taskName,
                    taskDesc: action.payload.taskDesc,
                    taskStat: action.payload.taskStat
                }
            ]
        default:
            return state
    }
}

export default addActionReducer;