import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000",  // backend ka port
  withCredentials: true
});

export default API;
