import { Button } from "flowbite-react";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useMediaBreakpoint from "../hooks/useMediaBreakPoint.hook";

const Login = () => {
  const isMediumScreen = useMediaBreakpoint("md");
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { register, handleSubmit } = form;

  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full h-full flex justify-center items-center bg-slate-200 text-black overflow-hidden lg:text-lg">
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
            className="rounded-md h-10 md:h-12 px-2"
            placeholder="email@example.com"
            autoFocus
          ></input>
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            {...register("password", { required: "Password is required" })}
            className="rounded-md h-10 md:h-12 px-2"
            placeholder="password"
          ></input>
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
