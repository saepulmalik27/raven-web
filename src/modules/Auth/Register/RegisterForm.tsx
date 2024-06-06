"use client";
import Input from "@/components/ui/Input/Input";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  userid: string;
  name: string;
  password: string;
};

const RegisterForm = () => {
  const { handleSubmit, control } = useForm<FormValues>();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="userid"
        control={control}
        label="User ID"
        placeholder={"Masukan user id"}
      />
      <Input
        name="name"
        control={control}
        label="Nama"
        placeholder={"Masukan nama"}
      />
      <Input
        name="password"
        control={control}
        label="Password"
        type="password"
        placeholder="Masukan password"
      />
      <Input
        name="password_confirmation"
        control={control}
        label="Konfirmasi Password"
        type="password"
        placeholder="Masukan konfirmasi password"
      />
      <button type="submit" className="btn-primary mt-10 lg:mt-16">
        Daftar
      </button>
    </form>
  );
};

export default RegisterForm;
