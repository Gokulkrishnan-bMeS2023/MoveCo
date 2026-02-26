// import axios from "axios";

// export const api = axios.create({
//   baseURL: "http://bmes.runasp.net",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });



import axios from "axios";

export const api = axios.create({
  baseURL: "/api", 
  headers: {
    "Content-Type": "application/json",
  },
});