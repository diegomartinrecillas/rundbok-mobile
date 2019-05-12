import { pfx } from "../../utils/pfx";
import { NetworkService } from "../../api";

const base = "@@app/book";

export const START = pfx(base, "START");
const start = _ => ({
  type: START
});

export const SUCCESS = pfx(base, "SUCCESS");
const success = data => ({
  type: SUCCESS,
  data
});

export const ERROR = pfx(base, "ERROR");
const error = error => ({
  type: ERROR,
  error
});

export const fetchBook = id => {
  return async dispatch => {
    dispatch(start());
    try {
      dispatch(success(await NetworkService.getListedBookById(id)));
    } catch (err) {
      dispatch(error(err));
    }
  };
};
