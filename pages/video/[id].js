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
    });
  }, [user, router, videoKey]);

  const videoPlayerOpts = {
    height: "100%",
    width: "100%",
  };

  return (
    <div className="flex flex-col w-screen h-screen overflow-y-scroll">
      <Head>
        <title>Techflix | Video</title>
      </Head>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-full mx-2 my-10 space-x-4 md:flex-row">
        {/* Video Iframe */}
        <div className="w-full h-full flex-[0.7]">
          <ReactPlayer
            controls
            width="100%"
            height="100%"
            url={`https://youtube.com/watch?v=${videoKey}`}
          />
        </div>

        {/* Video Content */}
        <div className="flex flex-[0.3] flex-col items-start rounded-lg justify-start w-full h-[600px] gap-4 p-4 border border-white max-h-[600px]">
          <h2 className="text-2xl text-white">What you will learn.</h2>
          <ul className="w-full h-full space-y-8 overflow-y-scroll list-none">
            {video?.learnings?.map((learning, index) => (
              <li key={index}>
                <div className="w-full p-4 text-white bg-gray-900 rounded-lg">
                  <p>{learning}</p>
                </div>
              </li>
            ))}
            
          </ul>
        </div>
      </div>
      {/* Overview */}
      <div className="flex flex-col mx-2 space-x-4 space-y-4 border-t border-white">
        <h2 className="p-3 text-3xl text-white">Overview</h2>
        <p className="text-sm font-medium text-white">{video.description}</p>
      </div>
      <div className="my-8 border-t border-white">
        <Footer />
      </div>
    </div>
  );
};

export default VideoPage;
