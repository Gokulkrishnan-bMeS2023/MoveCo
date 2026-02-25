// import axios from "axios";

// export const api = axios.create({
//   baseURL: "http://bmes.runasp.net",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });



import axios from "axios";

export const api = axios.create({
  // Before: baseURL: "http://bmes.runasp.net",
  // After: Point to the proxy path defined in vite.config.ts
  baseURL: "/api", 
  headers: {
    "Content-Type": "application/json",
  },
});