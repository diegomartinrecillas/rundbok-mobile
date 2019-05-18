import { RequestStatus } from "../../api";
import { START, SUCCESS, ERROR } from "./actions";
import { Programme } from "../../models/Programme";

const initialState = {
  data: [],
  error: null,
  status: RequestStatus.IDLE
};

export const programmes = (state = initialState, action) => {
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
        data: action.data.map(programme => new Programme(programme)),
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

export const selectProgrammeById = state => id => {
  const programmes = state.programmes.data;

  return programmes && programmes.find(programme => programme.id == id);
};
