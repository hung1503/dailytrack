import teacherService from "../services/function/teacher";

const teacherReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_TEACHER":
      return action.data;
    default:
      return state;
  }
};

export const initTeacher = () => {
  return async (dispatch) => {
    const data = await teacherService.getAll();
    dispatch({
      type: "INIT_TEACHER",
      data,
    });
  };
};

export default teacherReducer;
