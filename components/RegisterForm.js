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
    <div className="flex flex-col w-72 h-auto">
      <form onSubmit={registerForm.handleSubmit} className="space-y-5">
        <div className="flex flex-col">
          <label className="text-white" htmlFor="email">
            Email Address
          </label>
          <input
            className="bg-transparent border-white border outline-none text-white rounded-lg"
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
            className="bg-transparent border-white border outline-none text-white rounded-lg"
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
            className="bg-transparent border-white border outline-none text-white rounded-lg"
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
            className="bg-transparent border-white border outline-none text-white rounded-lg"
            id="cpassword"
            name="confirmPassword"
            type="password"
            onChange={registerForm.handleChange}
            value={registerForm.values.confirmPassword}
          />
        </div>
        <button
          className="bg-green-500 p-2 hover:bg-green-600 rounded-lg text-white w-full transition-all duration-200"
          type="submit"
        >
          Register
        </button>
        <p className="text-white text-sm text-center">OR</p>
        <button
          className="bg-blue-500 p-2 hover:bg-blue-600 rounded-lg text-white w-full transition-all duration-200"
          type="submit"
        >
          Register with Google
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
