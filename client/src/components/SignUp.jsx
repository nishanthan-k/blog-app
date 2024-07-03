import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "flowbite-react";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useMediaBreakpoint from "../hooks/useMediaBreakPoint.hook";
import { signUpSchema } from "../utils/validationSchema";
import { authUrls } from "../utils/apiUrls";

const SignUp = () => {
  const navigate = useNavigate();
  const isMediumScreen = useMediaBreakpoint("md");
  const form = useForm({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const submitHandler = async (data) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(`${authUrls.signUp}`, options);

    if (!response.ok) {
      const errorData = await response.json();
      toast.error(errorData.message || "An error occurred", {
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

    localStorage.setItem("token", result?.data?.token);

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="w-full h-screen flex flex-col gap-6 justify-center items-center bg-slate-200 text-black overflow-hidden lg:text-lg">
      <ToastContainer />
      <h1 className="text-2xl font-semibold">Sign Up</h1>
      <form
        onSubmit={handleSubmit(submitHandler)}
        noValidate
        className="flex flex-col gap-3 w-80 md:w-1/2 lg:w-1/2"
      >
        <div className="flex flex-col gap-3">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            {...register("email", { required: "Email is required" })}
            className="rounded-md h-10 md:h-12 px-2 outline-none"
            placeholder="email@example.com"
            autoFocus
          ></input>
          <p className="m-0 text-red-600">{errors?.email?.message}</p>
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            {...register("password", { required: "Password is required" })}
            className="rounded-md h-10 md:h-12 px-2 outline-none"
            placeholder="password"
          ></input>
          <p className="m-0 text-red-600">{errors?.password?.message}</p>
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            type="text"
            {...register("confirmPassword", {
              required: "Confirm password is required",
            })}
            className="rounded-md h-10 md:h-12 px-2 outline-none"
            placeholder="confirm password"
          ></input>
          <p className="m-0 text-red-600">{errors?.confirmPassword?.message}</p>
        </div>

        <Button
          color="blue"
          size={isMediumScreen ? "lg" : "md"}
          className="w-full text-xl"
          type="submit"
        >
          Create Account
        </Button>

        <div className="flex justify-between">
          <p>Already an member?</p>
          <Link to="/login  ">
            <p className="m-0 text-sky-700">Login</p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
