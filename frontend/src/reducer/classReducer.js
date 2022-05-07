import classService from "../services/function/class";

const classReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_CLASS":
      return action.data;
    case "ADD_CLASS":
      return [...state, action.data];
    case "DELETE_CLASS":
      return state.filter((classInfo) => classInfo.id !== action.id);
    default:
      return state;
  }
};

export const initClass = () => {
  return async (dispatch) => {
    const data = await classService.getAll();
    dispatch({
      type: "INIT_CLASS",
      data,
    });
  };
};

export const addClass = (classInfo) => {
  return async (dispatch) => {
    const data = await classService.create(classInfo);
    dispatch({
      type: "ADD_CLASS",
      data,
    });
  };
};

export const deleteClass = (id) => {
  return async (dispatch) => {
    const data = await classService.delete(id);
    dispatch({
      type: "DELETE_CLASS",
      data,
      id,
    });
  };
};

export default classReducer;
