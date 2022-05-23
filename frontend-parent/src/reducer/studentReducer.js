import studentService from "../services/function/student";

const studentReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_STUDENT":
      return action.data;
    case "ADD_STUDENT":
      return [...state, action.data];
    case "DELETE_STUDENT":
      return state.filter((student) => student.id !== action.id);
    case "UPDATE_STUDENT":
      const id = action.data.id;
      const student = state.find((student) => student.id === id);
      const updatedStudent = { ...student, object: action.data.object };
      return state.map((student) =>
        student.id === id ? updatedStudent : student
      );
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

export const updateStudent = (id, object) => {
  return async (dispatch) => {
    await studentService.update(id, object);
    dispatch({
      type: "UPDATE_STUDENT",
      data: {
        id,
        object,
      },
    });
  };
};
export default studentReducer;
