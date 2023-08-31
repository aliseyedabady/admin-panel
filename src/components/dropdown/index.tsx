import React from "react";
import { DropDownProps } from "../../types/dropdown";
import { motion } from "framer-motion";
const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};
const DropDown = ({ children, show }: DropDownProps) => {
  return (
    <>
      <motion.div
        className="absolute top-2 right-2"
        animate={show ? "open" : "closed"}
        variants={variants}
      >
        {children}
      </motion.div>
    </>
  );
};

export default DropDown;
