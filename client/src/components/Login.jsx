import { Button } from "flowbite-react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useMediaBreakpoint from "../hooks/useMediaBreakPoint.hook";
import { loginSchema } from "../utils/validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { authUrls } from "../utils/apiUrls";

const Login = () => {
  const navigate = useNavigate();
  const isMediumScreen = useMediaBreakpoint("md");
  const form = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const submitHandler = async (data) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(`${authUrls.login}`, options);

    if (!response.ok) {
      const errorData = await response.json();
      toast.error(errorData?.message, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    const result = await response.json();
    toast.success(result?.message, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: "colored",
    });

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="w-full h-screen flex flex-col gap-6 justify-center items-center bg-slate-200 text-black overflow-hidden lg:text-lg">
      <ToastContainer />
      <h1 className="text-2xl font-semibold">Login</h1>
      <form
        onSubmit={handleSubmit(submitHandler)}
        noValidate
        className="flex flex-col gap-6 w-80 md:w-1/2 lg:w-1/2"
      >
        <div className="flex flex-col gap-3">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            {...register("email", { required: "Email is required" })}
            className="rounded-md h-10 md:h-12 px-2 outline-none focus:border-2 focus:border-black"
            placeholder="email@example.com"
            autoFocus
          ></input>
          <p className="text-red-600">{errors?.email?.message}</p>
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            {...register("password", { required: "Password is required" })}
            className="rounded-md h-10 md:h-12 px-2 outline-none focus:border-2 focus:border-black"
            placeholder="password"
          ></input>
          <p className="text-red-600">{errors?.password?.message}</p>
        </div>

        <Button
          color="blue"
          size={isMediumScreen ? "lg" : "md"}
          className="w-full text-xl"
          type="submit"
        >
          Log in
        </Button>

        <div className="flex justify-between">
          <p>Not registered?</p>
          <Link to="/signup">
            <p className="text-sky-700">Create Account</p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
