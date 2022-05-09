import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import teacherReducer from "./reducer/teacherReducer";
import studentReducer from "./reducer/studentReducer";
import activityReducer from "./reducer/activityReducer";
import classReducer from "./reducer/classReducer";
import notificationReducer from "./reducer/notificationReducer";

const reducer = combineReducers({
  notification: notificationReducer,
  teachers: teacherReducer,
  students: studentReducer,
  activities: activityReducer,
  classes: classReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
