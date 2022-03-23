import { getAuth } from "@firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import app, { db } from "../firebase";
import Navbar from "../components/Navbar";
import { useRecoilValue } from "recoil";
import { authAtom } from "../atoms/authAtom";
import CourseList from "../components/CourseList";
import Head from "next/head";
import { collection, getDocs, query } from "firebase/firestore";

const Dashboard = () => {
  const user = useRecoilValue(authAtom);
  const router = useRouter();
  const [courseList, setCourseList] = useState([]);
  useEffect(() => {
    if (!user) return router.push("/login");
  }, [user, router]);

  useEffect(() => {
    getDocs(query(collection(db, "videos"))).then((snapshot) => {
      console.log(snapshot.docs);
      setCourseList(snapshot.docs);
    });
  }, []);

  return (
    <div className="flex flex-col w-full">
      <Head>
        <title>Techflix - {user?.displayName} | Dashboard</title>
      </Head>
      <Navbar />
      <div className="mx-24">
        <CourseList courseList={courseList} />
      </div>
    </div>
  );
};

export default Dashboard;
