import axios from "axios";

export const Api = axios.create({
  baseURL: import.meta.env.VITE_APP_API,
  headers: {
    "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});
