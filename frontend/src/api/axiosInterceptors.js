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
  export const ForgetPasswrd = (body) => {
    return Axios.post(`/api/user/forgotPassword`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  export const Delete = (body) => {
    return Axios.post(`/api/user/delete`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  export const Update = (body) => {
    return Axios.post(`/api/user/updateProfile`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  export const CreateDomain = (body) => {
    return Axios.post(`/api/domain/create`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  export const getAllDomains = (body) => {
    return Axios.get(`/api/domain/all`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  export const deleteDomains = (id) => {
    return Axios.get(`/api/domain/delete/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  export const updateDomain = (body) => {
    return Axios.post(`/api/domain/update`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  export const CreateLandingData = (body) => {
    return Axios.post(`/api/landingPage/create`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  export const getAllLandingData = (body) => {
    return Axios.get(`/api/landingPage/all`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  export const deleteLandingPage = (id) => {
    return Axios.get(`/api/landingPage/delete/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  export const updateLandingPage = (id, data ) => {
    return Axios.post(`/api/landingPage/update/${id}`, data,{
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  export const AddOffers = (body) => {
    return Axios.post(`/api/offer/addOffer`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
 