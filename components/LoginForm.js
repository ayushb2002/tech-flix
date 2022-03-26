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
          setUser(userCreds?.user);
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
            className="text-white bg-transparent border border-white rounded-lg outline-none"
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
            className="text-white bg-transparent border border-white rounded-lg outline-none"
            id="password"
            name="password"
            type="password"
            onChange={loginForm.handleChange}
            value={loginForm.values.password}
          />
        </div>
        <button
          className="w-full p-2 text-white transition-all duration-200 bg-red-500 rounded-lg hover:bg-red-600"
          type="submit"
        >
          Login
        </button>
        <p className="text-sm text-center text-white">OR</p>
        <button
          className="w-full p-2 text-white transition-all duration-200 bg-blue-500 rounded-lg hover:bg-blue-600"
          type="submit"
        >
          Sign in with Google
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
