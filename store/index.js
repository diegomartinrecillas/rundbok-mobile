import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import { book } from "./book/reducer";
import { books } from "./books/reducer";
import { courses } from "./courses/reducer";
import { programmes } from "./programmes/reducer";

const reducers = combineReducers({
  book,
  books,
  courses,
  programmes
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export store
export const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(thunk))
);

// export actions
export { fetchBook } from "./book/actions";
export { fetchBooks, searchBooks } from "./books/actions";
export { fetchCourses } from "./courses/actions";
export { fetchProgrammes } from "./programmes/actions";

// export selectors
export { selectBooksByProgramme, selectBooksByCourse } from "./books/reducer";
export { selectCourseById } from "./courses/reducer";
export { selectProgrammeById } from "./programmes/reducer";
