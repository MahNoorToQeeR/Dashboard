import axios from "axios";
const baseURL = "http://localhost:4000";
const headers = {
  "Content-Type": "application/json",
};
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
      headers: headers
    });
  };
  export const All = (body) => {
    return Axios.get(`/api/user/all`, body, {
      headers: headers
    });
  };
  export const ForgetPasswrd = (body) => {
    return Axios.post(`/api/user/forgotPassword`, body, {
      headers: headers
    });
  };
  export const Delete = (body) => {
    return Axios.post(`/api/user/delete`, body, {
      headers: headers
    });
  };
  export const UserUpdate = (body) => {
    return Axios.post(`/api/user/updateProfile`, body, {
      headers: headers
    });
  }
  export const CreateDomain = (body) => {
    return Axios.post(`/api/domain/create`, body, {
      headers: headers
    });
  };
  export const getAllDomains = (body) => {
    return Axios.get(`/api/domain/all`, body, {
      headers: headers
    });
  };
  export const deleteDomains = (id) => {
    return Axios.get(`/api/domain/delete/${id}`, {
      headers: headers
    });
  };
  export const updateDomain = (body) => {
    return Axios.post(`/api/domain/update`, body, {
      headers: headers
    });
  };
  export const CreateLandingData = (body) => {
    return Axios.post(`/api/landingPage/create`, body, {
      headers: headers
    });
  };
  export const getAllLandingData = (body) => {
    return Axios.get(`/api/landingPage/all`, body, {
      headers: headers
    });
  };
  export const deleteLandingPage = (id) => {
    return Axios.get(`/api/landingPage/delete/${id}`, {
      headers: headers
    });
  };
  export const updateLandingPage = (id, data ) => {
    return Axios.post(`/api/landingPage/update/${id}`, data,{
      headers: headers
    });
  };
  export const AddOffers = (body) => {
    return Axios.post(`/api/offer/addOffer`, body, {
      headers: headers
    });
  };
 