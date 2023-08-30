import React from "react";
interface Props {
  children: React.ReactNode;
}
const AuthLayout = ({ children }: Props) => {
  return (
    <div className="h-screen items-stretch grid grid-cols-12">
      <div className="bg-bgAuth flex-1 flex justify-center items-center xl:col-span-8 lg:col-span-7 col-span-12">
        <img
          className="w-[500px] h-[500px] hidden lg:block"
          alt=""
          src={require("../assets/images/vector/login.png")}
        />
      </div>
      <div className="flex items-center xl:col-span-4 lg:col-span-5 col-span-12 justify-center ">
        <div className="p-8">{children}</div>
      </div>
      <div className="fixed top-6 right-6 flex">
        <img alt="" src={require("../assets/icons/logo-text.svg").default} />
      </div>
    </div>
  );
};

export default AuthLayout;
