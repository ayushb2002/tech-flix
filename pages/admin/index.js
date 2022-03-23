import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import { useRecoilState } from "recoil";
import { authAtom } from "../../atoms/authAtom";
import Head from "next/head";
import Button from "../../components/Button";
import { modalAtom } from "../../atoms/modalAtom";
import AddVideoModal from "../../components/AddVideoModal";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../firebase";

const AdminHomePage = () => {
  const router = useRouter();
  const [user, setUser] = useRecoilState(authAtom);
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalAtom);
  const [userRegistration, setUserRegistration] = useState(0);
  const [videos, setVideos] = useState(0);
  useEffect(() => {
    if (!user) router.push("/admin/login");
  }, [user, router]);
  useEffect(() => {
    getDocs(query(collection(db, "videos"))).then((snapshot => {
      setVideos(snapshot.docs.length);
    }))
  }, [])
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
      <div className="flex items-center justify-center w-full my-4">
        <Button
          text="Add new Video"
          onClick={() => setIsModalOpen(true)}
        />
        <AddVideoModal />
      </div>
    </div>
  );
};

export default AdminHomePage;
