import { motion } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "../components/sidebar";
import { RootState } from "../store";
import Header from "../components/header";
interface Props {
  children: React.ReactNode;
}
const MainLayout: React.FC<Props> = ({ children }) => {
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
        className={`py-[24px] px-[30px] mr-[270px]`}
      >
        <Header />
        <div className="max-w-[1200px] mx-auto">{children}</div>
      </motion.div>
    </div>
  );
};

export default MainLayout;
