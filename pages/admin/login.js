import Image from "next/image";
import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AdminLoginForm from "../../components/AdminLoginForm";
import { useRecoilValue } from "recoil";
import { adminAtom } from "../../atoms/authAtom";

const AdminLogin = () => {
  const router = useRouter();
  const user = useRecoilValue(adminAtom);
  
  useEffect(() => {
    console.log(user)
    if (user) {
      router.push("/admin");
    }
  }, [user, router]);

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <Head>
        <title>Techflix | Admin Login</title>
      </Head>
      <div className="flex flex-col items-center justify-center p-10 space-y-4 border border-white rounded-lg">
        <Image
          src="https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=256"
          height={24}
          width={161}
          alt="Logo"
        />
        <p className="text-xl font-semibold tracking-wide text-white">Login</p>
        <AdminLoginForm />
      </div>
    </div>
  );
};

export default AdminLogin;
