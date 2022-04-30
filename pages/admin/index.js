import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import { useRecoilValue } from "recoil";
import { adminAtom } from "../../atoms/authAtom";
import Head from "next/head";
import Button from "../../components/Button";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../firebase";
import AddVideoForm from "../../components/AddVideoForm";
import AddSubjectForm from "../../components/AddSubjectForm";
import AddAdminUser from "../../components/AddAdminUser";

const AdminHomePage = () => {
  const router = useRouter();
  const user = useRecoilValue(adminAtom);
  const [userRegistration, setUserRegistration] = useState(0);
  const [videos, setVideos] = useState(0);
  useEffect(() => {
    if (!user) router.push("/admin/login");
  }, [user, router]);
  useEffect(() => {
    getDocs(query(collection(db, "videos"))).then((snapshot) => {
      setVideos(snapshot.docs.length);
    });
  }, []);
  return (
    <div className="flex flex-col">
      <Head>
        <title>Techflix | Admin Dashboard</title>
      </Head>
      <Navbar />
      <div className="flex flex-row items-center justify-center gap-10 mx-4 my-4">
        <div className="flex flex-col w-full p-10 border border-white rounded-lg">
          <h1 className="text-2xl font-bold text-white">User Registrations</h1>
          <span className="text-xl text-white">10</span>
        </div>
        <div className="flex flex-col w-full p-10 border border-white rounded-lg">
          <h1 className="text-2xl font-bold text-white">Videos Uploaded</h1>
          <span className="text-xl text-white">{videos}</span>
        </div>
      </div>
      <div className="flex items-start justify-center w-full px-2 my-4 divide-x">
        <AddVideoForm />
        <div className="flex flex-col items-start w-full divide-y">
          <AddSubjectForm />
          <AddAdminUser />
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
