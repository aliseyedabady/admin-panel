import React from "react";
import Sidebar from "../components/sidebar";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { toggle } from "../features/theme";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { RootState } from "../store";
interface Props {
  children: React.ReactNode;
}
const MainLayout: React.FC<Props> = ({ children }) => {
  const dispatch = useDispatch();
  const drawer = useSelector((state: RootState) => state.themeReducer.drawer);
  const variants = {
    open: { marginRight: 270 },
    closed: { marginRight: 87 },
  };
  return (
    <div className="min-h-screen ">
      <Sidebar />
      <motion.div
        animate={drawer ? "open" : "closed"}
        variants={variants}
        className={`py-[24px] px-[30px] mr-[87px]`}
      >
        <nav>
          <button onClick={() => dispatch(toggle())}>
            <RxHamburgerMenu size={"1.5rem"} />
          </button>
        </nav>
      </motion.div>
      {children}
    </div>
  );
};

export default MainLayout;
