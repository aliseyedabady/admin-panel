import axios from "axios";
import Cookie from "js-cookie";
import { User } from "../types/user";
import { toast } from "react-toastify";

export const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

API.interceptors.request.use(
  config => {
    let _userJson = Cookie.get("user");
    let _user: User = { full_name: "", token: "", mobile: "" };
    if (_userJson) {
      _user = JSON.parse(_userJson);
    }
    if (_user?.token) config.headers.Authorization = `Bearer ${_user?.token}`;
    return config;
  },
  error => {
    toast.error("خطایی پیش آمده است لطفا مجددا تلاش نمایید.");
    // Do something with request error
    return Promise.reject(error);
  }
);
API.interceptors.response.use(
  function (response) {
    if (response?.data?.message) {
      toast.success(response.data.message);
    }
    return response;
  },
  function (error) {
    if (error?.response?.status === 401) {
      Cookie.remove("user");
      window.location.replace("/login");
    } else if (error?.response?.status === 422) {
      let _errors = error.response.data.message;

      let _msgs = [];
      for (const key in _errors) {
        if (_errors.hasOwnProperty.call(_errors, key)) {
          let element = _errors[key];
          _msgs = element.join("<br/>");
        }
      }
      toast.error(_msgs);
    } else if (
      error?.response?.data?.message &&
      typeof error.response.data.message === "string"
    ) {
      toast.error(error.response.data.message);
    } else if (typeof error?.response?.message === "string") {
      toast.error(error.response.message);
    } else {
      toast.error("خطایی پیش آمده است. لطفا مجددا تلاش نمایید.");
    }
    return Promise.reject(error);
  }
);
