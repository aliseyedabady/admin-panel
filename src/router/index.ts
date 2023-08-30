import AuthLayout from "../layout/auth";
import Login from "../pages/auth/login";
import { route } from "../types/route";

export const routes: route[] = [
  {
    component: Login,
    user: false,
    layout: AuthLayout,
    path: "/login",
  },
];
