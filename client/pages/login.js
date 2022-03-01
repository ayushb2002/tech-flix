import Image from "next/image";
import React from "react";
import LoginForm from "../components/LoginForm";
import Head from "next/head";

const Login = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <Head>
        <title>Techflix | Login</title>
      </Head>
      <div className="flex flex-col items-center justify-center p-10 space-y-4 border border-white rounded-lg">
        <Image
          src="https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=256"
          height={24}
          width={161}
          alt="Logo"
        />
        <p className="text-xl font-semibold tracking-wide text-white">Login</p>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
