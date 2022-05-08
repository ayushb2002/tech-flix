import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "../components/Footer";
import HeroCard from "../components/HeroCard";
import LargeButton from "../components/LargeButton";
import Navbar from "../components/Navbar";
import Head from "next/head";

import { fadeInUp, reverseFadeInUp } from "../animations/fadeInUp";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { authAtom } from "../atoms/authAtom";
import { useEffect } from "react";
import { getSession } from "next-auth/react";

export default function Home({ user }) {
  const [currentUser, setUser] = useRecoilState(authAtom);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      setUser(null);
    }
    setUser(user);
  }, [user, setUser]);

  const subs = ["College Sems", "DSA", "DBMS", "SDF", "Web Dev for College"];
  return (
    <div className="flex flex-col space-y-10">
      <Head>
        <title>Techflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="flex items-center justify-around">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 3000 }}
          className="flex flex-col items-start justify-center"
        >
          <div className="flex flex-row items-center justify-evenly">
            <div>
            <p className="text-5xl font-bold tracking-wide text-white">
              <span>India&apos;s largest</span>
              <div className="h-4" />
              <span>learning platform</span>
            </p>
            </div>
          </div>
          <div className="h-10" />
          <LargeButton
            text="Start Learning"
            onClick={() =>
              !currentUser ? router.push("/login") : router.push("/dashboard")
            }
          />
          
        </motion.div>
        
        <motion.div
          variants={reverseFadeInUp}
          transition={{ duration: 3000 }}
          initial="initial"
          animate="animate"
        >
          <div>
            <Image src="/heroimg.svg" height={400} width={400} alt="Hero" />
          </div>
        </motion.div>
      </div>
      
      <div className="flex items-center justify-around">
        <div className="grid grid-cols-1 space-x-10 md:grid-cols-2 lg:grid-cols-3">
          <HeroCard
            image="https://static.uacdn.net/web-cms/dailyliveclasses_0c0023950f_c187155ee3.svg?q=75&w=384"
            heading="Daily Video Upload"
            text="We will be uploading daily videos"
          />
          <HeroCard
            image="https://static.uacdn.net/web-cms/syllabus_a9da21d824_b20b285483.svg?q=75&w=384"
            heading="Daily Video Upload"
            text="We will be uploading daily videos"
          />

          <HeroCard
            image="https://static.uacdn.net/web-cms/learnanytimeanywhere_cb19d5de30_b92bc0c6a1.svg?q=75&w=384"
            heading="Daily Video Upload"
            text="We will be uploading daily videos"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      props: {},
    };
  }
  return {
    props: {
      user: session?.user,
    },
  };
}
