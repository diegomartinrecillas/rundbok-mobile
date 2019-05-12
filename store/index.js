import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import { availableProgrammes } from "./available-programmes/reducer";
import { book } from "./book/reducer";
import { books } from "./books/reducer";

const reducers = combineReducers({
  availableProgrammes,
  book,
  books
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export store
export const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(thunk))
);

// export actions
export { fetchAvailableProgrammes } from "./available-programmes/actions";
export { fetchBook } from "./book/actions";
export { loadBooks, searchBooks } from "./books/actions";
