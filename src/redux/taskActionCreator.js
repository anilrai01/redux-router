import actionType from "./taskActionType";

const AddTask = (data) => {
    return {
        type: actionType.add,
        payload: data
    }
}

const EditTask = data => {
    return {
        type: actionType.edit,
        payload: data
    }
}

export { AddTask, EditTask };