import { api } from "../lib/axios";

export const getMoveSizes = () => {
  return api.get("/staticdata/move-sizes");
};

export const getTimeSlots = () => {
  return api.get("/staticdata/time-slots");
};

export const getHearAbout = () => {
  return api.get("/staticdata/referred-by");
};

export const getStates = () => {
  return api.get("/staticdata/states");
};

export const getStateInstant = () => {
  return api.get("/staticdata/states-instant");
};

export const getFlightsOfStairs = () => {
  return api.get("/staticdata/flights-of-stairs");
};

export const getDoorToTruck = () => {
  return api.get("/staticdata/door-to-truck");
};
