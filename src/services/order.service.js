import axios from "axios";
const token = localStorage.getItem("token");

export const createOrder = (data, callback) => {
  axios
    .post("http://localhost:8000/api/orders", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      callback(true, res.data);
    })
    .catch((err) => {
      callback(false, err.response.data.message);
    });
};

export const getOrders = (callback) => {
  axios
    .get("http://localhost:8000/api/orders", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => callback(true, res.data))
    .catch((err) => callback(false, err));
};

export const getUserPendingPayments = (callback) => {
  axios
    .get("http://localhost:8000/api/orders/pending-payment", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => callback(true, res.data))
    .catch((err) => callback(false, err));
};

export const getUserCompletedOrders = (callback) => {
  axios
    .get("http://localhost:8000/api/orders/completed", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => callback(true, res.data))
    .catch((err) => callback(false, err));
};

export const getUserProcessOrders = (callback) => {
  axios
    .get("http://localhost:8000/api/orders/in-process", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => callback(true, res.data))
    .catch((err) => callback(false, err));
};
