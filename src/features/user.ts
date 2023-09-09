import { createSlice } from "@reduxjs/toolkit";
import Cookie from "js-cookie";

export interface User {
  token: string;
  full_name: string;
  mobile: string;
}
const initialState: User = {
  token: "",
  full_name: "",
  mobile: "",
};
export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, userData) => {
      const _data = {
        token: userData.payload.token,
        full_name: userData.payload.full_name,
        mobile: userData.payload.mobile,
      };
      state = _data;
      Cookie.set("user", JSON.stringify(_data), {
        expires: Number(process.env.REACT_APP_COOKIE_EXPIRE_IN_DAYS) || 365,
      });
    },
    initial: state => {
      const user = Cookie.get("user");
      if (user) {
        state.full_name = JSON.parse(user).full_name;
        state.mobile = JSON.parse(user).mobile;
        state.token = JSON.parse(user).token;
      }
    },
    logout: state => {
      state = { full_name: "", mobile: "", token: "" };
      Cookie.remove("user");
    },
  },
});
export const { initial, login } = user.actions;
export default user.reducer;
