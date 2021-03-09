import { TOGGLE_NIGHT_MODE } from "../actions/actionTypes";
const nightModeReducer = (state = { nightMode: false }, action) => {
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
export default nightModeReducer;
