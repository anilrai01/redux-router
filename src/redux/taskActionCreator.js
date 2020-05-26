import actionType from "./taskActionType";

const AddTask = (data) => {
  return {
    type: actionType.add,
    payload: data,
  };
};

const EditTask = (data) => {
  return {
    type: actionType.edit,
    payload: data,
  };
};

const DelTask = (dataID) => {
  return {
    type: actionType.del,
    payload: dataID,
  };
};

export { AddTask, EditTask, DelTask };
