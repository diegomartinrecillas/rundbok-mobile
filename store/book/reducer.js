import { RequestStatus } from "../../api";
import { START, SUCCESS, ERROR } from "./actions";
import { Book } from "../../models/Book";

const initialState = {
  data: new Book(),
  error: null,
  status: RequestStatus.IDLE
};

export const book = (state = initialState, action) => {
  switch (action.type) {
    case START: {
      return {
        ...state,
        state: RequestStatus.LOADING
      };
    }
    case SUCCESS: {
      return {
        data: new Book(action.data),
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
    default:
      return state;
  }
};
