import studentService from "../services/function/student";

const studentReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_STUDENT":
      return action.data;
    case "ADD_STUDENT":
      return [...state, action.data];
    case "DELETE_STUDENT":
      return state.filter((student) => student.id !== action.id);
    default:
      return state;
  }
};

export const initStudent = () => {
  return async (dispatch) => {
    const data = await studentService.getAll();
    dispatch({
      type: "INIT_STUDENT",
      data,
    });
  };
};

export default studentReducer;
