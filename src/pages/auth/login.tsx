import React from "react";
import Input from "../../components/form/input";
import Btn from "../../components/form/button";
import CheckBox from "../../components/form/checkbox";
import { Link } from "react-router-dom";
import { usePost } from "../../hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AuthProps } from "../../types/auth";
import { useDispatch } from "react-redux";
import { login } from "../../features/user";
const schema = yup
  .object({
    email: yup.string().required("ایمیل اجباری است"),
    password: yup.string().required("رمز عبور اجباری است"),
  })
  .required();

const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<AuthProps>({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const [, , send] = usePost({
    route: "admin_login",
    redirect: {
      status: true,
      action: data => {
        dispatch(login(data.data));
      },
    },
    setError: ob => {
      Object.keys(ob).map(key => {
        setError(key, { message: ob[key][0] });
      });
    },
  });
  const onSubmit = (data: AuthProps) => send(data);
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
            text="ورود با گوگل"
          />
          <Btn
            classNames="py-2 px-5 border border-inputBorder text-sm	font-normal	"
            text="ورود با فیسبوک"
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
            <p>یا ورود با</p>
          </div>
          <div className="bg-inputBorder h-[1px] flex-1"></div>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="ایمیل"
          props={{
            ...register("email" as const),
          }}
          error={errors.email}
        />
        <Input
          type="password"
          label="رمز عبور"
          props={{
            ...register("password" as const),
          }}
          error={errors.password}
        />
        <div className="flex justify-between items-center">
          <CheckBox label="مرا به خاطر بسپار" classNames="my-4" />
          <Link className="text-sm text-primary" to={"/forget-password"}>
            فراموشی رمز عبور
          </Link>
        </div>
        <Btn
          text="ورود"
          classNames="bg-primary mt-6 hover:bg-subPrimary text-white w-full justify-center  px-6 py-2 "
        />
      </form>
    </div>
  );
};

export default Login;
