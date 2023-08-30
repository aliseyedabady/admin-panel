import React from "react";
import { CheckBoxProps } from "../../../types/form/checkbox";

const CheckBox = ({ label, classNames }: CheckBoxProps) => {
  return (
    <div className={`flex gap-2 ${classNames}`}>
      <input type="checkbox" />

      <label className="text-sm	">{label}</label>
    </div>
  );
};

export default CheckBox;
