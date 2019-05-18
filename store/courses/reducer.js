import { RequestStatus } from "../../api";
import { START, SUCCESS, ERROR } from "./actions";
import { Course } from "../../models/Course";

const initialState = {
  data: [],
  error: null,
  status: RequestStatus.IDLE
};

export const courses = (state = initialState, action) => {
  switch (action.type) {
    case START: {
      return {
        ...state,
        status: RequestStatus.LOADING
      };
    }
    case SUCCESS: {
      return {
        ...state,
        data: action.data.map(course => new Course(course)),
        status: RequestStatus.SUCCESS
      };
    }
    case ERROR: {
      return {
        ...state,
        error: action.error,
        status: RequestStatus.ERROR
      };
    }
    default:
      return state;
  }
};

export const selectCourseById = state => id => {
  const courses = state.courses.data;

  return courses && courses.find(course => course.id == id);
};
