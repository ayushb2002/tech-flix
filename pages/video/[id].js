import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { authAtom } from "../../atoms/authAtom";
import Head from "next/head";

const VideoPage = () => {
  const router = useRouter();
  const { id: videoKey } = router.query;

  const user = useRecoilValue(authAtom);
  useEffect(() => {
    if (!user) {
      router.push("/");
    }
    if (!videoKey) {
      router.push("/dashboard");
    }
  }, [user, router, videoKey]);

  return (
    <div className="flex flex-col w-screen h-screen overflow-y-scroll">

      <Head>
        <title>Techflix | Video</title>
      </Head>
      <Navbar />
      <div className="flex items-center justify-center h-full mx-2 my-10">
        {/* Video Iframe */}
        <iframe
          src="https://www.youtube.com/embed/JexRSV_3UDM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full flex-[0.7] w-full"
        ></iframe>
        {/* Video Content */}
        <div className="flex flex-[0.3] flex-col items-start justify-start w-full h-full gap-4 p-4 border border-white">
          <h2 className="text-2xl text-white">What you will learn.</h2>
          <ul className="w-full space-y-8 list-none">
            <li>
              <div className="w-full p-4 text-white bg-gray-900 rounded-lg">
                <p>Content 1</p>
              </div>
            </li>
            <li>
              <div className="w-full p-4 text-white bg-gray-900 rounded-lg">
                <p>Content 2</p>
              </div>
            </li>
            <li>
              <div className="w-full p-4 text-white bg-gray-900 rounded-lg">
                <p>Content 3</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* Overview */}
      <div className="flex flex-col mx-2 space-x-4 space-y-10 border-t border-white">
        <h2 className="text-3xl text-white">Overview</h2>
        <p className="text-sm font-medium text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          tristique, nulla ac tincidunt bibendum, ante urna vehicula tellus, ac
          ullamcorper ex mauris at ligula. Donec mollis tristique orci id
          interdum. Pellentesque urna dui, dapibus sit amet massa ac, volutpat
          tempus leo. Nunc mattis ligula eu tincidunt fringilla. Duis eget
          maximus nunc. Praesent eget mauris nec diam elementum facilisis.
          Phasellus dapibus rhoncus luctus. Sed dapibus eros elit, at porta arcu
          lobortis ac. In volutpat scelerisque felis non pellentesque. Quisque
          consequat efficitur leo ac dictum. Nam ligula nunc, imperdiet non
          fermentum ac, sagittis quis dolor. Proin tristique risus eu enim
          cursus euismod. In sed urna porttitor, fringilla felis ut, euismod
          nibh. Nullam vulputate turpis arcu, vulputate viverra sem volutpat eu.
          Mauris id elementum mi. Nulla a mi auctor, dapibus justo nec, blandit
          lorem.
        </p>
      </div>
      <div className="my-8 border-t border-white">
        <Footer />
      </div>
    </div>
  );
};

export default VideoPage;
