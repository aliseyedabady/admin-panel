import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { motion } from "framer-motion";
import { toggle } from "../../features/theme";
import { useDispatch } from "react-redux";

const Sidebar = () => {
  const drawer = useSelector((state: RootState) => state.themeReducer.drawer);
  const dispatch = useDispatch();
  console.log("r", drawer);
  const variants = {
    open: { width: 270 },
    closed: { width: 87 },
  };

  return (
    <motion.div
      className={`fixed top-0 right-0 w-[87px] border-borderSidebar border-l min-h-screen px-[21px] pt-[30px]`}
      animate={drawer ? "open" : "closed"}
      variants={variants}
      onHoverStart={() => dispatch(toggle())}
      onHoverEnd={() => dispatch(toggle())}
    >
      <div className="flex gap-2">
        <img src={require("../../assets/images/logo/1.png")} alt="" />
        {drawer && <h2 className="text-2xl	font-bold ">مدرنیزه</h2>}
      </div>
    </motion.div>
  );
};

export default Sidebar;
