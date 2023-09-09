import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { RootState } from "../../store";
import { route } from "../../types/route";
interface Props {
  routes: route[];
  user?: string;
  noUser?: string;
}
const Routing = ({ routes = [], user = "/", noUser = "/login" }: Props) => {
  const { token } = useSelector((state: RootState) => {
    return state.userReducer;
  });
  const isLogin = token ? true : false;
  return (
    <Routes>
      {routes.map((route: route, i) => {
        return (
          <Route
            path={route.path}
            element={
              route.user ? (
                isLogin ? (
                  <route.layout props={route}>
                    <route.component props={route} />
                  </route.layout>
                ) : (
                  <Navigate to={noUser} replace />
                )
              ) : isLogin ? (
                <Navigate to={user} replace />
              ) : (
                <route.layout props={route}>
                  <route.component props={route} />
                </route.layout>
              )
            }
          />
        );
      })}
    </Routes>
  );
};

export default Routing;
