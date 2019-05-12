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
        state: RequestStatus.LOADING
      };
    }
    case SUCCESS: {
      const books = action.data.map(book => new Book(book));
      fuse = new Fuse(books, options);
      return {
        data: books,
        state: RequestStatus.SUCCESS
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
      return {
        ...state,
        searchResults: fuse.search(action.query)
      };
    }
    default:
      return state;
  }
};
