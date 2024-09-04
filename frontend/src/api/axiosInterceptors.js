import axios from "axios";
const baseURL = "http://localhost:4000";
export const Axios = axios.create({
  baseURL: baseURL,
});
export const Login = (body) => {
  return Axios.post(`/api/user/login`, body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const Register = (body) => {
    return Axios.post(`/api/user/register`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  export const All = (body) => {
    return Axios.get(`/api/user/all`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };