import React from "react";
import { InputProps } from "../../../types/form/input";

const Input = ({ label }: InputProps) => {
  return (
    <div className="flex flex-col mt-6">
      <label className="text-sm	font-semibold mb-1">{label}</label>
      <input className="border-borderSidebar border rounded-lg	px-4 py-3" />
    </div>
  );
};

export default Input;
