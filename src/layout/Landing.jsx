import React from "react";

// ROUTER
import { Link, useNavigate } from "react-router-dom";

// API
import { usersAPI } from "../api/Users";

// COMPONENTS
import InputBox from "../components/UIComponents/InputBox";

// IMG
import LoginBg from "../images/LoginBg.png";
import blgImage from "../images/blgImage.png";
import MisLogo from "../images/MIS LOGO.png";
import MainLogo from "../images/FINAL - Dark@300x.png";

// REACT-ICONS
import { MdOutlineLogin } from "react-icons/md";

// HOOK FORMS
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

const Landing = () => {
  // const { token } = useSelector((state) => state.token);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(watch("username"));

  const Login = useNavigate();

  const onSubmitHandler = async (data) => {
    // setLoading(true);
    console.log({ data });
    try {
      const result = await usersAPI.post("/login", data);
      // const result = await usersAPI.post("/UserLogin", data);
      console.log(result.data);
      localStorage.setItem("token", result.data.data.token);
      localStorage.setItem("username", result.data.data.user.username);
      Login("/");
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    } finally {
      // setLoading(false);
    }
    reset();
  };

  return (
    <>
      <div className="absolute mt-14 flex h-auto w-full justify-center p-2 lg:hidden ">
        <img src={MainLogo} alt="Q-System" className="z-40 h-16 lg:h-20" />
      </div>
      <div className="relative flex h-screen select-none flex-col items-center justify-center bg-[#202327]">
        <img
          className="absolute h-full w-full bg-left-top object-cover object-right-bottom md:bg-auto md:object-cover"
          src={LoginBg}
        />
        {/* <div className="absolute z-0 flex h-full w-full items-center justify-center md:justify-end ">
          <img
            src={MainLogo}
            alt="Q-System"
            className=" absolute z-40 h-20 translate-x-[50px] animate-move-logo md:right-1/4 lg:h-20"
          />
        </div> */}

        <div className="z-30 flex w-full max-w-3xl animate-fade items-center justify-center opacity-0">
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className="h-full w-auto rounded-xl bg-gradient-to-b from-neutral-700 to-neutral-900 p-10 shadow-lg sm:w-[55%] lg:w-[85%] lg:pr-14"
          >
            <h1 className="flex items-center text-2xl font-bold text-gray-50">
              <MdOutlineLogin className="mr-3 text-4xl font-bold text-[#1FB58F]" />
              Login
            </h1>
            <div className="mt-8 space-y-4">
              <InputBox
                {...register("username")}
                autoComplete="off"
                type="text"
                label="Username"
                name="username"
                htmlFor="username"
                placeholder="Username"
              />
              <span className="ml-2 text-xs text-red-500 ">
                {errors.username?.message}
              </span>
              <InputBox
                {...register("password")}
                autoComplete="off"
                type="password"
                label="Password"
                name="password"
                htmlFor="password"
                placeholder="Password"
              />
              <span className="ml-2 mb-2 text-xs text-red-500 ">
                {errors.password?.message}
              </span>

              {/* Remember Me */}
              {/* <div className="form-check flex items-center py-2 pl-2">
                <input
                  {...register("checkbox")}
                  id="checked-checkbox"
                  type="checkbox"
                  value=""
                  className="h-4 w-4 appearance-none rounded border-gray-300 bg-gray-100 text-qsystem checked:bg-qsystem focus:ring-2 focus:ring-orange-400 "
                />
                <label
                  htmlFor="checked-checkbox"
                  className="ml-2 text-sm text-gray-300"
                >
                  Remember me
                </label>
              </div> */}

              <button
                className="flex w-full justify-center rounded-md bg-qsystem p-2 text-base text-gray-50 shadow-lg disabled:bg-gray-600  hover:bg-[#f07320] hover:shadow-[#402a1b] disabled:hover:bg-gray-600 disabled:hover:shadow-none"
                disabled={
                  (errors.password ? true : false) ||
                  (errors.username ? true : false) ||
                  watch("username") === undefined ||
                  watch("password") === undefined ||
                  watch("username") === "" ||
                  watch("password") === ""
                }
                type="submit"
              >
                LOGIN
              </button>
            </div>
            <div className="flex flex-col items-center pt-5">
              <img src={MisLogo} alt="MIS-Logo" className="flex h-auto w-14" />
              <span className="text-center text-[0.5rem] font-normal text-gray-50 ">
                Powered By MIS All rights reserved <br />
                Copyrights © 2021
              </span>
            </div>
          </form>
          <div className="z-30 ml-[-20px] hidden h-full w-full items-center justify-center object-cover shadow-lg lg:flex">
            <img
              src={MainLogo}
              alt="Q-System"
              className="absolute z-40 lg:h-20"
            />
            <img src={blgImage} className="h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
