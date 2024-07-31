import axios from "axios";

export const uploadImage = (data, callback) => {
  axios
    .post("http://127.0.0.1:8000/api/upload", data)
    .then((res) => {
      callback(true, res.data);
    })
    .catch((err) => {
      callback(false, err);
    });
};
