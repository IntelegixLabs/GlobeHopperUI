import axios from "axios";

export const ApiTBO = axios.create({
  method: "post",
  baseURL: import.meta.env.VITE_APP_TBO_API,
  headers: {
    Accept: 'application/json',
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
  auth: {
    username: import.meta.env.VITE_APP_TBO_USERNAME,
    password: import.meta.env.VITE_APP_TBO_PASSWORD,
  }
});
