import React from "react";
import { CardWrapperProps } from "../../../types/card/wrapper";

const CardWrapper = ({
  children,
  title,
  classNames = "",
}: CardWrapperProps) => {
  return (
    <div
      className={`rounded-[7px] card-wrapper-shadow overflow-hidden text-text ${classNames}`}
    >
      <div className="px-4 py-6">
        <h3 className="text-lg	font-semibold	">{title}</h3>
      </div>
      <div className="h-[1px] bg-inputBorder"></div>
      {children}
    </div>
  );
};

export default CardWrapper;
