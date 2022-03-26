import React from "react";
import { useFormik } from "formik";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from "../firebase";
import { useRouter } from "next/router";

const RegisterForm = () => {
  const auth = getAuth(app);
  const router = useRouter();
  const registerForm = useFormik({
    initialValues: {
      email: "",
      displayName: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((credentials) => {
          const user = credentials.user;
          updateProfile(user, {
              displayName: values.displayName,
              photoURL: `https://avatars.dicebear.com/api/initials/${values.displayName.split(' ').join('')}.svg`
          })
          router.push('/');
        })
        .catch((err) => {
          const errCode = err.code;
          const errMsg = err.message;
          alert(errCode, errMsg);
        });
    },
  });
  return (
    <div className="flex flex-col h-auto w-72">
      <form onSubmit={registerForm.handleSubmit} className="space-y-5">
        <div className="flex flex-col">
          <label className="text-white" htmlFor="email">
            Email Address
          </label>
          <input
            className="text-white bg-transparent border border-white rounded-lg outline-none"
            id="email"
            name="email"
            type="email"
            onChange={registerForm.handleChange}
            value={registerForm.values.email}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white" htmlFor="displayName">
            Display Name
          </label>
          <input
            className="text-white bg-transparent border border-white rounded-lg outline-none"
            id="displayName"
            name="displayName"
            type="text"
            onChange={registerForm.handleChange}
            value={registerForm.values.displayName}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-white" htmlFor="password">
            Password
          </label>
          <input
            className="text-white bg-transparent border border-white rounded-lg outline-none"
            id="password"
            name="password"
            type="password"
            onChange={registerForm.handleChange}
            value={registerForm.values.password}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-white" htmlFor="cpassword">
            Confirm Password
          </label>
          <input
            className="text-white bg-transparent border border-white rounded-lg outline-none"
            id="cpassword"
            name="confirmPassword"
            type="password"
            onChange={registerForm.handleChange}
            value={registerForm.values.confirmPassword}
          />
        </div>
        <button
          className="w-full p-2 text-white transition-all duration-200 bg-red-500 rounded-lg hover:bg-red-600"
          type="submit"
        >
          Register
        </button>
        <p className="text-sm text-center text-white">OR</p>
        <button
          className="w-full p-2 text-white transition-all duration-200 bg-blue-500 rounded-lg hover:bg-blue-600"
          type="submit"
        >
          Register with Google
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
