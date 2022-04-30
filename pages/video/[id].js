import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { authAtom } from "../../atoms/authAtom";
import Head from "next/head";
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import ReactPlayer from "react-player";
import ReactMarkdown from "react-markdown";

const VideoPage = () => {
  const router = useRouter();
  const { id: videoKey } = router.query;
  const [video, setVideo] = useState({});

  const user = useRecoilValue(authAtom);
  useEffect(() => {
    if (!user) {
      router.push("/");
    }
    if (!videoKey) {
      router.push("/dashboard");
    }
    getDocs(
      query(collection(db, "videos"), where("videoKey", "==", videoKey))
    ).then((snapshot) => {
      setVideo(snapshot?.docs[0].data());
      console.log(snapshot?.docs[0].data());
    });
  }, [user, router, videoKey]);

  return (
    <div className="flex flex-col w-screen h-screen overflow-y-scroll">
      <Head>
        <title>Techflix | Video</title>
      </Head>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-full mx-2 my-10 space-x-4">
        <ReactPlayer
          controls
          width="95vw"
          height="80vh"
          url={`https://youtube.com/watch?v=${videoKey}`}
        />
      </div>
      {/* Overview */}
      <div className="flex flex-col mx-2 space-x-4 space-y-4 border-t border-white">
        <h2 className="p-3 text-3xl text-white">Overview</h2>
        <p className="text-sm font-medium text-white">
          <ReactMarkdown>{video.description}</ReactMarkdown>
        </p>
      </div>
      <div className="my-8 border-t border-white">
        <Footer />
      </div>
    </div>
  );
};

export default VideoPage;
