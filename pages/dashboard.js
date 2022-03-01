import { getAuth } from "@firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Image from "next/image";
import app from "../firebase";
import Navbar from "../components/Navbar";
import { useRecoilValue } from "recoil";
import { authAtom } from "../atoms/authAtom";
import CourseList from "../components/CourseList";
import Head from "next/head";

const Dashboard = () => {
  const auth = getAuth(app);
  const user = useRecoilValue(authAtom);
  const router = useRouter();
  useEffect(() => {
      if (!user) return router.push('/login');
  }, [user, router]);

  return (
    <div className="flex flex-col w-full">
      <Head>
        <title>Techflix - {user?.displayName} | Dashboard</title>
      </Head>
      <Navbar />
      <div className="mx-24">
      <CourseList />
      </div>
    </div>
  );
};

export default Dashboard;
