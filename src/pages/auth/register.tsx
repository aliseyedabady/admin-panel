import React from "react";
import Input from "../../components/form/input";
import Btn from "../../components/form/button";
import CheckBox from "../../components/form/checkbox";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div>
        <h3 className="font-bold	text-2xl	mb-2">به مدرنیزه خوش آمدید</h3>
        <p className="text-sm	font-normal mb-2	">پنل ادمین شما</p>
        <div className="flex gap-4 mt-6">
          <Btn
            classNames="py-2 px-5 border border-inputBorder text-sm	font-normal	"
            rightIcon={() => {
              return (
                <div className="w-4 h-4 flex justify-center items-center">
                  <img
                    alt=""
                    className="w-4 h-4 "
                    src={require("../../assets/icons/google.svg").default}
                  />
                </div>
              );
            }}
            text="ثبت نام با گوگل"
          />
          <Btn
            classNames="py-2 px-5 border border-inputBorder text-sm	font-normal	"
            text="ثبت نام با فیسبوک"
            rightIcon={() => {
              return (
                <div className="w-4 h-4 flex justify-center items-center">
                  <img
                    alt=""
                    className="w-4 h-4 "
                    src={require("../../assets/icons/facebook.svg").default}
                  />
                </div>
              );
            }}
          />
        </div>
        <div className="mt-6 flex gap-4 items-center ">
          <div className="bg-inputBorder h-[1px] flex-1"></div>
          <div>
            <p>یا ثبت نام با</p>
          </div>
          <div className="bg-inputBorder h-[1px] flex-1"></div>
        </div>
      </div>

      <Input label="نام" />
      <Input label="ایمیل" />
      <Input label="رمز عبور" />
      <Btn
        text="ثبت نام"
        classNames="bg-primary mt-6 hover:bg-subPrimary text-white w-full justify-center  px-6 py-2 "
      />
    </div>
  );
};

export default Register;
