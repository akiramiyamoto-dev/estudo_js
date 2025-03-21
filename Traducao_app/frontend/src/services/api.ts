import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:5000/api/auth",
// });

const api = axios.create({
  baseURL: "https://estudojs-production.up.railway.app/api/auth",
});

export const setAuthToken = (token: string) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

export default api;
