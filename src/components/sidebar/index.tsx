import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Power } from "tabler-icons-react";
import { Menuitems } from "../../constants/menuItems";
import { RootState } from "../../store";
import Menu from "../menu";

const Sidebar = () => {
  const drawer = useSelector((state: RootState) => state.themeReducer.drawer);
  const variants = {
    open: { width: 270 },
    closed: { width: 87 },
  };

  return (
    <motion.div
      className={`fixed top-0 right-0 w-[87px] border-borderSidebar border-l min-h-screen px-[21px] pt-[30px]`}
      animate={drawer ? "open" : "closed"}
      variants={variants}
    >
      <div className="flex gap-2 pb-8">
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
      <Menu items={Menuitems} />

      {drawer && (
        <>
          <div className="p-4  bg-light rounded-lg	flex items-center justify-between gap-4">
            <div className="w-10 h-10">
              <img
                src={require("../../assets/images/avatars/1.jpg")}
                className="rounded-full"
                alt=""
              />
            </div>
            <div>
              <p className="font-semibold	text-base	">علی</p>
              <p className="font-normal	text-xs	">برنامه نویس</p>
            </div>
            <button>
              <Power color="#5D87FF" />
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default Sidebar;
