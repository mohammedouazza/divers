import { TOGGLE_NIGHT_MODE } from "./actionTypes";

export const toggleNightModeAction = (state) => ({
  type: TOGGLE_NIGHT_MODE,
  payload: {
    nightMode: !state.nightMode,
  },
});
