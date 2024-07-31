import axios from "axios";

export const createOrder = (data, callback) => {
  const token = localStorage.getItem("token");

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
