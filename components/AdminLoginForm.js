import React from "react";
import { useFormik } from "formik";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import app, { db } from "../firebase";
import { useRecoilState } from "recoil";
import { adminAtom, authAtom } from "../atoms/authAtom";
import { collection, getDoc, onSnapshot, query, where, doc } from "firebase/firestore";

const AdminLoginForm = () => {
  const auth = getAuth(app);
  const router = useRouter();
  const [user, setUser] = useRecoilState(authAtom);
  const [isAdmin, setIsAdmin] = useRecoilState(adminAtom);

  const checkForAdmin = (uid) => {
    const adminDoc = doc(collection(db, "admin"), uid);
    getDoc(adminDoc).then(docSnap => {
      if (docSnap.data().isAdmin) {
        setUser(auth?.currentUser);
        alert('You are an admin');
        setIsAdmin(true);
        router.push('/admin')
      } else {
        alert("You are not an admin");
        setIsAdmin(false);
        router.push('/login');
      }
    }).catch((err) => false);
  };
  const adminLoginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCreds) => {
          const uid = userCreds?.user?.uid;
          checkForAdmin(uid);
        })
        .catch((err) => alert(err?.message));
    },
  });
  return (
    <div className="flex flex-col w-64 h-58">
      <form onSubmit={adminLoginForm.handleSubmit} className="space-y-5">
        <div className="flex flex-col">
          <label className="text-white" htmlFor="email">
            Email Address
          </label>
          <input
            className="text-white bg-transparent border border-white rounded-lg outline-none"
            id="email"
            name="email"
            type="email"
            onChange={adminLoginForm.handleChange}
            value={adminLoginForm.values.email}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-white" htmlFor="email">
            Password
          </label>
          <input
            className="text-white bg-transparent border border-white rounded-lg outline-none"
            id="password"
            name="password"
            type="password"
            onChange={adminLoginForm.handleChange}
            value={adminLoginForm.values.password}
          />
        </div>
        <button
          className="w-full p-2 text-white transition-all duration-200 bg-red-500 rounded-lg hover:bg-green-600"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLoginForm;
