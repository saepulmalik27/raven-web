"use client";
import { formatRupiah } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const data = {
  _id: "6549a23162433e1d401769d9",
  name: "Antartica",
  slug: "Indahnya dunia",
  rating: 2.7,
  price: 9329470,
  description:
    "Dolor repudiandae error qui incidunt quidem. Fugiat amet reiciendis culpa in autem est. Vel id in libero nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  image:
    "https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  __v: 0,
};

const DetailPencarianView = () => {
  const handleOnError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null; // To prevent infinite loop in case the default image also fails to load
    target.src = "/images/default_illu.png";
    target.srcset = "/images/default_illu.png";
  };

  return (
    <div className="py-10 px-4 md:px-10 flex flex-col gap-5">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h1 className="font-bold text-4xl md:text-6xl text-green-500" data-cy="tour-title">
          {data.name}
        </h1>
        <h2 className="font-bold text-2xl md:text-4xl" data-cy="tour-slug">
          {data.slug}
        </h2>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={data.image}
          width={1280}
          height={380}
          alt={data.name}
          data-cy="tour-image"
          onError={handleOnError}
        />
      </div>
      <div className="flex flex-col justify-center gap-4 items-center">
        <h5 className="title-5">
          <span className="text-green-500">{data.name},</span>&nbsp;
          {data.slug}
        </h5>
        <p className="text-justify" data-cy="tour-description">
          {data.description}
        </p>
        <p className="font-bold" data-cy="tour-price">
          Mulai dari : ${formatRupiah(data.price)}
        </p>
      </div>
    </div>
  );
};

export default DetailPencarianView;
