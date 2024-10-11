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
  export const updateDomain = (id, body) => {
    return Axios.post(`/api/domain/update/${id}`, body, {
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
  export const GetAllOffer = (body) => {
    return Axios.get(`/api/offer/all`, body,{
      headers: headers
    });
  };
  export const UpdateOffers = (id, updatedData) => {
    return Axios.post(`/api/offer/offers/${id}`,updatedData,{
      headers: headers
    });
  };
  export const DeleteOffers = (offerId) => {
    return Axios.post(`/api/offer/offers/delete/${offerId}`,{
      headers: headers
    });
  };
  
  export const GetMultiOfferMultiUsers = (userId, offerId) => {
    return Axios.post(`/api/${offerId}/assign/${userId}`, { userId, offerId }, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  export const AddNetwork = (body) => {
    return Axios.post(`/api/network/create`, body, {
      headers: headers
    });
  };
  export const GetAllNetworks = (body) => {
    return Axios.get(`/api/network/all`, body, {
      headers: headers
    });
  };
  export const DeleteNetwork = (id) => {
    return Axios.post(`/api/network/delete/${id}`, {
      headers: headers
    });
  };
  export const UpdateNetwork = (id, body) => {
    return Axios.post(`/api/network/update/${id}`, body,{
      headers: headers
    });
  };
 