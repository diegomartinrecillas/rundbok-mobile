import { pfx } from "../../utils/pfx";
import { NetworkService } from "../../api";

const base = "@@app/available-programmes";

export const START = pfx(base, "START");
const start = _ => ({ type: START });

export const SUCCESS = pfx(base, "SUCCESS");
const success = data => ({ type: SUCCESS, data });

export const ERROR = pfx(base, "ERROR");
const error = error => ({ type: ERROR, error });

export const fetchAvailableProgrammes = _ => {
  return async dispatch => {
    dispatch(start());
    try {
      dispatch(success(await NetworkService.getAvailableProgrammes()));
    } catch (err) {
      dispatch(error(err));
    }
  };
};
