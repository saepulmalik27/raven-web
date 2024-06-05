"use client";
import Input from "@/components/Input/Input";
import Image from "next/image";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  username: string;
  email: string;
  password: string;
};

const LoginForm = () => {
  const { handleSubmit, control } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="login-box">
      <div className="flex justify-center items-center">
        <Image
          src={"/images/logo-login.png"}
          width={309}
          height={181}
          alt="logo-raven"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-2xl font-bold mb-4">Masuk</h1>
        <Input name="userid" control={control} label="User ID" />
        <Input
          name="password"
          control={control}
          label="Password"
          type="password"
        />
        <button type="submit" className="btn-primary">
          Login
        </button>
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold">atau</p>
          <p>
            {" "}
            <span className="text-jet-black-200">Belum punya akun ?</span>{" "}
            <span className="text-green-raven-200">Daftar</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
