import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const login = (data, callback) => {
  axios
    .post("http://localhost:8000/api/login", data)
    .then((res) => {
      callback(true, res.data.token);
    })
    .catch((err) => {
      callback(false, err.response.data.message);
    });
};

export const register = (data, callback) => {
  axios
    .post("http://localhost:8000/api/register", data)
    .then((res) => {
      callback(true, res.data);
    })
    .catch((err) => {
      callback(false, err.response.data.message);
    });
};

export const getPayload = (token) => {
  const decoded = jwtDecode(token);
  const currentTime = Date.now() / 1000;

  if (decoded.exp < currentTime) {
    localStorage.removeItem("token");
    console.log("Token has expired and has been removed from localStorage");
  }
  return decoded;
};
