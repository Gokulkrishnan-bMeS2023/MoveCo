import axios from "axios";

export const api = axios.create({
  baseURL: "https://moveco.runasp.net/api",
  headers: {
    "Content-Type": "application/json",
  },
});