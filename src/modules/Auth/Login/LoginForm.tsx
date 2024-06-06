"use client";
import Input from "@/components/ui/Input/Input";
import Checkbox from "@/components/ui/checkbox/checkbox";
import routes from "@/lib/routes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  userid: string;
  email: string;
  password: string;
};

const LoginForm = () => {
  const { handleSubmit, control } = useForm<FormValues>();
const router = useRouter()  

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  const handleClickRegister = () => {
    router.push(routes.register)
  }

  return (
    <div className="auth-box">
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
        <Checkbox name="rememberme" control={control} label="Ingat Saya" />
        <button type="submit" className="btn-primary">
          Login
        </button>
      </form>
      <div className="flex flex-col justify-center items-center">
        <p className="font-bold">atau</p>
        <p>
          <span className="text-jet-black-200">Belum punya akun ?</span>{" "}
          <span onClick={handleClickRegister} className="text-green-raven-200 cursor-pointer hover:text-green-500">Daftar</span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
