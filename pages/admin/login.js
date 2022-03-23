import Image from "next/image";
import React, { useEffect } from "react";
import Head from "next/head";
import AdminLoginForm from "../../components/AdminLoginForm";
import { useRecoilValue } from "recoil";
import { adminAtom, authAtom } from "../../atoms/authAtom";
import { useRouter } from "next/router";

const AdminLogin = () => {
  const user = useRecoilValue(authAtom);
  const router = useRouter();
  const isAdmin = useRecoilValue(adminAtom);
  useEffect(() => {
    if (user && !isAdmin) {
      return router.push("/admin/login");
    }
  }, [user, router, isAdmin]);
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
        <p className="text-xl font-semibold tracking-wide text-white">
          Admin Login
        </p>
        <AdminLoginForm />
      </div>
    </div>
  );
};

export default AdminLogin;
