import React from "react";
import LoginForm from "./LoginForm";


const LoginView = () => {
  return (
    <main className="flex-1 overflow-hidden flex flex-col">
      <div className="grid grid-cols-2 flex-1 ">
        <div className="bg-[url('/images/login_illu.png')] bg-cover"></div>
        <div className="p-5 flex items-center justify-center">
          <LoginForm />
        </div>
      </div>
    </main>
  );
};

export default LoginView;
