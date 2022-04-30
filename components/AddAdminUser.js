import React from "react";
import { useFormik } from "formik";
import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../firebase";

const hashPassword = async (password) => {
  const hashResp = await fetch("/api/admin/hash", {
    method: "POST",
    body: JSON.stringify({ password }),
  });
  const jsonResp = await hashResp.json();
  return jsonResp.hash;
};

const AddAdminUser = () => {
  const addUserForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      let hash = await hashPassword(values.password);
      setDoc(doc(db, "admin", values.email), {
        name: values.name,
        email: values.email,
        password: hash,
      })
        .then((_) => {
          alert("Admin User Added");
        })
        .catch((err) => {
          alert(err?.message);
        });
    },
  });
  return (
    <div className="flex flex-col w-[90%] m-10">
      <h2 className="text-2xl text-center text-white">Add a Admin User</h2>
      <form
        onSubmit={addUserForm.handleSubmit}
        className="flex flex-col items-center justify-center p-2"
      >
        <div className="form-control">
          <label htmlFor="email" className="form-control-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-input"
            onChange={addUserForm.handleChange}
            value={addUserForm.values.email}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password" className="form-control-label">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="form-input"
            onChange={addUserForm.handleChange}
            value={addUserForm.values.password}
          />
        </div>
        <div className="form-control">
          <label htmlFor="name" className="form-control-label">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="form-input"
            onChange={addUserForm.handleChange}
            value={addUserForm.values.name}
          />
        </div>
        <div className="form-control">
          <button
            type="submit"
            className="flex items-center justify-center px-6 py-2 text-white transition-all duration-200 bg-red-500 rounded-lg outline-none hover:bg-red-600"
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAdminUser;
