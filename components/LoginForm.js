import React from "react";
import { useFormik } from "formik";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import app from "../firebase";
import { useRecoilState } from "recoil";
import { authAtom } from "../atoms/authAtom";

const LoginForm = () => {
  const auth = getAuth(app);
  const router = useRouter();
  const [user, setUser] = useRecoilState(authAtom);
  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCreds) => {
          setUser(auth?.currentUser);
          router.push('/');
        })
        .catch((err) => {
          const errCode = err.code;
          const errMsg = err.message;
          alert(errMsg);
        });
    },
  });
  return (
    <div className="flex flex-col w-64 h-72">
      <form onSubmit={loginForm.handleSubmit} className="space-y-5">
        <div className="flex flex-col">
          <label className="text-white" htmlFor="email">
            Email Address
          </label>
          <input
            className="bg-transparent border-white border outline-none text-white rounded-lg"
            id="email"
            name="email"
            type="email"
            onChange={loginForm.handleChange}
            value={loginForm.values.email}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-white" htmlFor="email">
            Password
          </label>
          <input
            className="bg-transparent border-white border outline-none text-white rounded-lg"
            id="password"
            name="password"
            type="password"
            onChange={loginForm.handleChange}
            value={loginForm.values.password}
          />
        </div>
        <button
          className="bg-green-500 p-2 hover:bg-green-600 rounded-lg text-white w-full transition-all duration-200"
          type="submit"
        >
          Login
        </button>
        <p className="text-white text-sm text-center">OR</p>
        <button
          className="bg-blue-500 p-2 hover:bg-blue-600 rounded-lg text-white w-full transition-all duration-200"
          type="submit"
        >
          Sign in with Google
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
