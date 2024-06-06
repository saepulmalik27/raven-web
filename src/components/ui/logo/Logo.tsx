import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Image src={"/logo/raven.svg"} width={45} height={40} alt="logo" />
      <div>
        <h6 className="font-bold text-[12px] leading-none">Raven</h6>
        <p className="text-[10px]">Travel Solution by Randy</p>
      </div>
    </div>
  );
};

export default Logo;
