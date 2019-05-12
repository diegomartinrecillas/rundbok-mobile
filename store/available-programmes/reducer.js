import { RequestStatus } from "../../api";
import { START, SUCCESS, ERROR } from "./actions";
import { Programme } from "../../models/Programme";

const initialState = {
  programmes: [],
  error: null,
  status: RequestStatus.IDLE
};

export const availableProgrammes = (state = initialState, action) => {
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
        programmes: action.data.map(programme => new Programme(programme)),
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
