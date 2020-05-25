import actionType from "./taskActionType";

const AddTask = (data) => {
    return {
        type: actionType.add,
        payload: data
    }
}

export { AddTask };