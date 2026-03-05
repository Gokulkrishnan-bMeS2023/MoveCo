// // import { api } from "./api";

import { api } from "./api";

// import { api } from "./api";

// // export type StringArrayResponse = string[];

// // export type KeyValueResponse = Record<string, string>;

// // export interface DropdownOption {
// //   label: string;
// //   value: string;
// // }
// // export const getMoveSizes = () => {
// //   return api.get<StringArrayResponse>("/staticdata/move-sizes");
// // };

// // export const getStates = () => {
// //   return api.get<KeyValueResponse>("/staticdata/states");
// // };

// // export const getStatesInstant = () => {
// //   return api.get<KeyValueResponse>("/staticdata/states-instant");
// // };
// // export const getTimeSlots = () => {
// //   return api.get<StringArrayResponse>("/staticdata/time-slots");
// // };



// export const getMoveSizes = async () => {
//   const res = await api.get<string[]>("/staticdata/move-sizes");
//   return res.data.map(v => ({ label: v, value: v }));
// };

// export const getTimeSlots = async () => {
//   const res = await api.get<string[]>("/staticdata/time-slots");
//   return res.data.map(v => ({ label: v, value: v }));
// };

// export const getHearAbout = async () => {
//   const res = await api.get<string[]>("/staticdata/referred-by");
//   return res.data.map(v => ({ label: v, value: v }));
// };

// export const getStates = async () => {
//   const res = await api.get<Record<string, string>>("/staticdata/states");
//   return Object.entries(res.data).map(([key, value]) => ({
//     label: value,
//     value: key,
//   }));
// };

//   export const getStateInstant = async () => {
//   const res = await api.get<Record<string, string>>("/staticdata/states-instant");
//   return Object.entries(res.data).map(([key, value]) => ({
//     label: value,
//     value: key,
//   }));
// };



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