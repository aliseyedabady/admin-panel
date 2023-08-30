import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { motion } from "framer-motion";
import { closeDrawer, openDrawer, toggle } from "../../features/theme";
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
      onMouseEnter={() => dispatch(openDrawer())}
      onMouseLeave={() => dispatch(closeDrawer())}
    >
      <div className="flex gap-2">
        {drawer ? (
          <img
            src={require("../../assets/icons/logo-text.svg").default}
            alt=""
          />
        ) : (
          <img
            className="w-[33px] h-[26px]"
            src={require("../../assets/images/logo/1.png")}
            alt=""
          />
        )}
      </div>
    </motion.div>
  );
};

export default Sidebar;
