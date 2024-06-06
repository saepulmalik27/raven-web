import React, { Fragment } from "react";
import { navigationList } from "@/lib/navigation";
import Logo from "../ui/logo/Logo";
import Navbar from "../ui/navbar/Navbar";
import Profile from "../ui/avatar/Profile";

const Header = () => {
  return (
    <header className="border  bg-white flex-shrink-0 h-20 border-b-jet-black-400 px-4 md:px-10 lg:px-14 flex justify-between items-center">
      <Logo />
      <Navbar lists={navigationList} />
      <div className="hidden md:block">
        <Profile greeting="Hallo," name="Malik" avatar="https://image.com/image.png" />
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className=" mt-8 md:mt-10 flex-shrink-0 bg-jet-black-500 gap-2 flex px-4 md:px-10 md:py-5 py-3 items-center">
      <div className="text-white flex-shrink-0 flex flex-col justify-center items-center">
        <h5 className="font-bold  text-base md:text-4xl">Raven</h5>
        <p className="text-sm md:text-2xl"> Travel Solution</p>
      </div>
      <p className="flex-grow text-center text-white text-sm md:text-base ">Copyright ©2024 All rights reserved</p>
    </footer>
  );
};

const Mainlayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main className="flex-1">
      {children}
      </main>
      
      <Footer/>
    </Fragment>
  );
};

export default Mainlayout;
