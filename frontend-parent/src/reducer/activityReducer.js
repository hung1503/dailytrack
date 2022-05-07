import activityService from "../services/function/activity";

const activityReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_ACTIVITY":
      return action.data;
    case "ADD_ACTIVITY":
      return [...state, action.data];
    case "DELETE_ACTIVITY":
      return state.filter((activity) => activity._id !== action.id);
    case "DELETE_ROUTINE":
      const stateRoutine = state.find(
        (activity) => activity._id === action.data.id
      );
      const newRoutine = stateRoutine.routine.filter(
        (routine) => routine._id !== action.data.routine.routineId
      );
      console.log(newRoutine);
      return state.map((activity) => {
        if (activity._id === action.data.id) {
          return {
            ...activity,
            routine: newRoutine,
          };
        }
        return activity;
      });
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
    const data = await activityService.createDate(activity);
    dispatch({
      type: "ADD_ACTIVITY",
      data,
    });
  };
};

export const addActivityRoutine = (id, activity) => {
  return async (dispatch) => {
    const data = await activityService.creatActivity(id, activity);
    dispatch({
      type: "ADD_ACTIVITY",
      data,
    });
  };
};

export const addParentTime = (id, activity) => {
  return async (dispatch) => {
    const data = await activityService.addingParentTime(id, activity);
    dispatch({
      type: "ADD_ACTIVITY",
      data,
    });
  };
};

export const deleteActivity = (id) => {
  return async (dispatch) => {
    await activityService.removeDate(id);
    dispatch({
      type: "DELETE_ACTIVITY",
      id,
    });
  };
};

export const deleteRoutine = (id, routine) => {
  const data = {
    id,
    routine,
  };
  return async (dispatch) => {
    await activityService.removeRoutine(id, routine);
    dispatch({
      type: "DELETE_ROUTINE",
      data,
    });
  };
};

export default activityReducer;
