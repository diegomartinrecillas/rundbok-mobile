import Fuse from "fuse.js";
import { RequestStatus } from "../../api";
import { START, SUCCESS, ERROR, SEARCH } from "./actions";
import { Book } from "../../models/Book";

const options = {
  keys: ["title", "author", "releaseYear"]
};

let fuse = new Fuse([], options);

const initialState = {
  data: [],
  searchResults: [],
  error: null,
  status: RequestStatus.IDLE
};

export const books = (state = initialState, action) => {
  switch (action.type) {
    case START: {
      return {
        ...state,
        status: RequestStatus.LOADING
      };
    }
    case SUCCESS: {
      const books = action.data.map(book => new Book(book));
      fuse = new Fuse(books, options);
      return {
        ...state,
        data: books,
        searchResults: books,
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
    case SEARCH: {
      const results = fuse.search(action.query);
      return {
        ...state,
        searchResults: results.length > 0 || action.query ? results : state.data
      };
    }
    default:
      return state;
  }
};

export const selectBooksByProgramme = state => {
  return groupBy("programmeId")(state.books.data);
};

export const selectBooksByCourse = state => {
  return groupBy("courseId")(state.books.data);
};

const groupBy = key => array =>
  array
    ? array.reduce(
        (objectsByKeyValue, obj) => ({
          ...objectsByKeyValue,
          [obj[key]]: (objectsByKeyValue[obj[key]] || []).concat(obj)
        }),
        {}
      )
    : {};
