import { TOGGLE_NIGHT_MODE } from "../actions/actionTypes";

export default (state = { nightMode: false }, action) => {
  switch (action.type) {
    case TOGGLE_NIGHT_MODE:
      return {
        ...state,
        nightMode: !state.nightMode,
      };
    default:
      return state;
  }
};
