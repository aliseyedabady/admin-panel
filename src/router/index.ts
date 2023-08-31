import AuthLayout from "../layout/auth";
import MainLayout from "../layout/main";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Dashboard from "../pages/dashboard";
import UserCreate from "../pages/users/create";
import UserList from "../pages/users/list";
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
    user: true,
    layout: MainLayout,
    path: "/dashboard",
  },
  {
    component: UserList,
    user: true,
    layout: MainLayout,
    path: "/users/list",
  },
  {
    component: UserCreate,
    user: true,
    layout: MainLayout,
    path: "/users/list",
  },
];
