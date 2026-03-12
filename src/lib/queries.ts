import {
  getMoveSizes,
  getTimeSlots,
  getHearAbout,
  getStateInstant,
  getFlightsOfStairs,
  getDoorToTruck,
} from "../api/statciDataService";
import { toOptions, toStateOptions } from "../utils/selectOptionUtils";

const basePromise = Promise.all([
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

export const inHomeStaticDataPromise = basePromise;

export const instantOnlineStaticDataPromise = Promise.all([
  basePromise,
  getFlightsOfStairs(),
  getDoorToTruck(),
]).then(([base, stairs, doorToTruck]) => ({
  ...base,
  stairsOptions: stairs.data ?? [],
  doorToTruckOptions: doorToTruck.data ?? [],
}));

export const jobApplicationStaticDataPromise = basePromise.then(
  ({ stateOptions }) => ({
    stateOptions,
  }),
);
