import { pfx } from "../../utils/pfx";
import { NetworkService } from "../../api";

const base = "@@app/books";

export const START = pfx(base, "START");
const start = _ => ({ type: START });

export const SUCCESS = pfx(base, "SUCCESS");
const success = data => ({ type: SUCCESS, data });

export const ERROR = pfx(base, "ERROR");
const error = error => ({ type: ERROR, error });

export const loadBooks = () => {
  return async dispatch => {
    dispatch(start());
    try {
      dispatch(success((await NetworkService.getAllBooks()).data));
    } catch (err) {
      dispatch(error(err));
    }
  };
};

export const SEARCH = pfx(base, "SEARCH");
export const searchBooks = query => ({
  type: SEARCH,
  query
});
