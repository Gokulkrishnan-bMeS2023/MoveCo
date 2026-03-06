// lib/queries.ts

import {
  getMoveSizes,
  getTimeSlots,
  getHearAbout,
  getStateInstant,
} from "../api/statciDataService";
import {
  toOptions,
  toStateOptions,
} from "../pages/services/InHomeMoveEstimate/selectOptionUtils";

// ⚠️ Defined OUTSIDE component — runs once, promise is reused
export const staticDataPromise = Promise.all([
  getMoveSizes(),
  getTimeSlots(),
  getHearAbout(),
  getStateInstant(),
]).then(([moveSizes, timeSlots, hearAbout, states]) => ({
  moveSizeOptions: toOptions(moveSizes.data ?? []),
  timeOptions: toOptions(timeSlots.data ?? []),
  hearAboutOptions: toOptions(hearAbout.data ?? []),
  stateOptions: toStateOptions(states.data ?? {}),
}));
