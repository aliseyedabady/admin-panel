import React from "react";
import { InputProps } from "../../../types/form/input";
import { motion } from "framer-motion";
const Input = ({ label, props, error, type = "text" }: InputProps) => {
  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };
  return (
    <div className="flex flex-col mt-6">
      <label className="text-sm	font-semibold mb-1">{label}</label>
      <input
        type={type}
        {...props}
        className="border-borderSidebar border rounded-lg	px-4 py-3"
      />
      <motion.p
        animate={error ? "open" : "closed"}
        variants={variants}
        className="text-red text-xs mt-2"
      >
        {error?.message}
      </motion.p>
    </div>
  );
};

export default Input;
