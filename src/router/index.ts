import AuthLayout from "../layout/auth";
import MainLayout from "../layout/main";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Dashboard from "../pages/dashboard";
import { route } from "../types/route";

export const routes: route[] = [
  {
    component: Login,
    user: false,
    layout: AuthLayout,
    path: "/login",
  },
  {
    component: Register,
    user: false,
    layout: AuthLayout,
    path: "/register",
  },
  {
    component: Dashboard,
    user: false,
    layout: MainLayout,
    path: "/dashboard",
  },
];
