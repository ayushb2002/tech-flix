import React from "react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { db } from "../firebase";
import { useRecoilState } from "recoil";
import { adminAtom, authAtom } from "../atoms/authAtom";
import { collection, getDoc, doc } from "firebase/firestore";

const AdminLoginForm = () => {
  const router = useRouter();
  const [adminUser, setAdminUser] = useRecoilState(adminAtom);

  const checkForAdmin = async (email, password) => {
    const adminDoc = doc(collection(db, "admin"), email);
    const docSnap = await getDoc(adminDoc);
    if (!docSnap.exists()) return false;
    const userData = docSnap.data();
    const resp = await fetch("/api/admin/check", {
      method: "POST",
      body: JSON.stringify({ hash: userData?.password, string: password }),
    });
    if (resp.status === 200) {
      setAdminUser({ email, name: userData?.name, image: userData?.image });
      return true;
    }
    return false;
  };
  const adminLoginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      if (values.email === "" || values.password === "") {
        alert("Enter valid email");
        return false;
      }

      const isAdmin = await checkForAdmin(values.email, values.password);
      if (isAdmin) {
        alert("Admin auth successful");
        setAdminUser({
          email: values.email,
          name: "Administrator",
          image: "https://avatars.dicebear.com/api/initials/Administrator.svg"
        })
        router.push("/admin");
      } else {
        router.push("/login");
      }
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
          Login as Administrator
        </button>
      </form>
    </div>
  );
};

export default AdminLoginForm;
