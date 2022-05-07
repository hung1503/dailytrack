import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import teacherService from "./reducer/teacherReducer";
import studentService from "./reducer/studentReducer";
import activityService from "./reducer/activityReducer";
import classService from "./reducer/classReducer";

const reducer = combineReducers({
  teachers: teacherService,
  students: studentService,
  activities: activityService,
  classes: classService,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
