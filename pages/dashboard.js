import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import Navbar from "../components/Navbar";
import { useRecoilValue } from "recoil";
import { authAtom } from "../atoms/authAtom";
import CourseList from "../components/CourseList";
import Head from "next/head";
import { collection, getDocs, query, where } from "firebase/firestore";

const Dashboard = () => {
  const user = useRecoilValue(authAtom);
  const router = useRouter();
  const [courseList, setCourseList] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [currentWatching, setCurrentWatching] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // if (!user) return router.push("/login");
    
    async function getData() {
      const subjectSnapshot = await getDocs(collection(db, "subjects"));
      if (subjectSnapshot.size != 0) {
        setSubjects(subjectSnapshot?.docs);
      }

      const videosSnapshot = await getDocs(collection(db, "videos"))
      if (videosSnapshot.size != 0) {
        setCourseList(videosSnapshot.docs);
      }

      // const watchingSnapshot = await getDocs(query(collection(db, "watching"), where("userId", "==", user?.uid)))
      // if (watchingSnapshot.size != 0) {
      //   setCurrentWatching(watchingSnapshot?.docs[0]?.data())
      // }
      
    }
    getData().then(() => setIsLoading(false)).catch(err => alert(err));
  }, [user, router]);

  return (
    <>
      {!isLoading && (
        <div className="flex flex-col w-full">
          <Head>
            <title>Techflix - {user?.displayName} | Dashboard</title>
          </Head>
          <Navbar />
          <div className="mx-24">
            {currentWatching && (
              <div>
                <h2 className="text-xl text-white">
                  Current Watching: {currentWatching?.videoId}
                </h2>
              </div>
            )}
            <CourseList courseList={courseList} subjects={subjects} />
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
