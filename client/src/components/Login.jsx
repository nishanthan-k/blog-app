import { Button } from "flowbite-react";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useMediaBreakpoint from "../hooks/useMediaBreakPoint.hook";
import { loginSchema } from "../utils/validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";

const Login = () => {
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

  const submitHandler = (data) => {
    // backend auth call
  };

  return (
    <div className="w-full h-full flex flex-col gap-6 justify-center items-center bg-slate-200 text-black overflow-hidden lg:text-lg">
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
