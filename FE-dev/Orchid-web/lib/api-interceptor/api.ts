import axios from "axios";

// const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL!;
// const baseURL = process.env.API_URL;
const baseURL = "http://128.199.185.211:8099/api/v1";

export const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // to send cookie
});
