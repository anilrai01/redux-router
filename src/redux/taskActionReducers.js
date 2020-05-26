import actionType from "./taskActionType";

const initialState = [
  {
    taskID: 0,
    taskName: "First Task",
    taskDesc: "Complete this task as soon as possible",
    taskStat: "Incomplete",
  },
  {
    taskID: 1,
    taskName: "Second Task",
    taskDesc: "This is test task",
    taskStat: "Incomplete",
  },
  {
    taskID: 2,
    taskName: "Third Task",
    taskDesc: "This is success test task",
    taskStat: "Complete",
  },
];

const addActionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.add:
      return [
        ...state,
        {
          taskID: action.payload.taskID,
          taskName: action.payload.taskName,
          taskDesc: action.payload.taskDesc,
          taskStat: action.payload.taskStat,
        },
      ];
    case actionType.edit:
      state = state.map((el) =>
        el.taskID === action.payload.taskID ? (el = action.payload) : el
      );
      return state;
    case actionType.del:
      state = state.filter((el) => el.taskID !== action.payload);
      return state;
    default:
      return state;
  }
};

export default addActionReducer;
