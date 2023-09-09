import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Routing from "./components/routing";
import { initial } from "./features/user";
import { routes } from "./router";

const App = () => {
  const dispatch = useDispatch();
  dispatch(initial());

  return <Routing user="/dashboard" routes={routes} />;
};

export default App;
