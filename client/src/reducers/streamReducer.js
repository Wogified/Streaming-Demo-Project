import _ from "lodash";
import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case EDIT_STREAM:
      // regular method of adding to an object
      // const newState = {...state};
      // newState[action.payload.id] = action.payload;
      // return newState;

      // using key value interpolation
      return { ...state, [action.payload.id]: action.payload };

    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };

    case DELETE_STREAM:
      return _.omit(state, action.payload);

    default:
      return state;
  }
};
