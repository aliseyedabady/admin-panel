import React from "react";
import { BtnProps } from "../../../types/form/btn";

const Btn = ({ text, onClick, classNames, rightIcon, leftIcon }: BtnProps) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`flex items-center gap-2  cursor-pointer rounded-lg	 ${classNames}`}
      >
        {rightIcon && rightIcon()}
        {text}
        {leftIcon && leftIcon()}
      </button>
    </>
  );
};

export default Btn;
