import teacherService from "../services/function/teacher";

const teacherReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_TEACHER":
      return action.data;
    case "UPDATE_TEACHER":
      const id = action.data.id;
      const teacher = state.find((t) => t._id === id);
      const updatedTeacher = { ...teacher, object: action.data.object };
      return state.map((t) => (t._id === id ? updatedTeacher : t));
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

export const updateTeacher = (id, object) => {
  console.log(id, object);
  return async (dispatch) => {
    await teacherService.update(id, object);
    dispatch({
      type: "UPDATE_TEACHER",
      data: {
        id,
        object,
      },
    });
  };
};

export default teacherReducer;
