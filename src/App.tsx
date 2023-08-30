import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Routing from "./components/routing";
import { initial } from "./features/user";
import { routes } from "./router";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initial());
  }, []);

  return <Routing routes={routes} />;
};

export default App;
