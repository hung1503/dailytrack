import activityService from "../services/function/activity";

const activityReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_ACTIVITY":
      return action.data;
    case "ADD_ACTIVITY":
      return [...state, action.data];
    case "DELETE_ACTIVITY":
      return state.filter((activity) => activity.id !== action.id);
    default:
      return state;
  }
};

export const initActivity = () => {
  return async (dispatch) => {
    const data = await activityService.getAll();
    dispatch({
      type: "INIT_ACTIVITY",
      data,
    });
  };
};

export const addActivity = (activity) => {
  return async (dispatch) => {
    const data = await activityService.add(activity);
    dispatch({
      type: "ADD_ACTIVITY",
      data,
    });
  };
};

export const deleteActivity = (id) => {
  return async (dispatch) => {
    await activityService.delete(id);
    dispatch({
      type: "DELETE_ACTIVITY",
      id,
    });
  };
};

export default activityReducer;
