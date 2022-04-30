import React from "react";
import { useFormik } from "formik";
import Button from "./Button";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import Stepper from "./Stepper";
import StepperControl from "./StepperControl";
import { useEffect, useState } from "react";

const AddSubjectForm = () => {
  const addSubjectForm = useFormik({
    initialValues: {
      subjectCode: "",
      subjectName: ""
    },
    onSubmit: (values) => {
      addDoc(collection(db, "subjects"), {
        subjectCode: values.subjectCode,
        subjectName: values.subjectName
      })
        .then((_) => {
          alert("Subject Added");
        })
        .catch((err) => {
          alert(err?.message);
        });
    },
  });
  return (
      <div className="flex flex-col w-[90%] m-10">
        <h2 className="text-2xl text-center text-white">
          Add a Subject to Database
        </h2>
        <form onSubmit={addSubjectForm.handleSubmit} className="flex flex-col items-center justify-center p-2">
          <div className="form-control">
            <label htmlFor="subjectCode" className="form-control-label">
              Subject Code
            </label>
            <input
              id="subjectCode"
              name="subjectCode"
              type="text"
              className="form-input"
              onChange={addSubjectForm.handleChange}
              value={addSubjectForm.values.subjectCode}
            />
          </div>
          <div className="form-control">
            <label htmlFor="subjectName" className="form-control-label">
              Subject Name
            </label>
            <input
              id="subjectName"
              name="subjectName"
              type="text"
              className="form-input"
              onChange={addSubjectForm.handleChange}
              value={addSubjectForm.values.subjectName}
            />
          </div>
          <div className="form-control">
            <button
              type="submit"
              className="flex items-center justify-center px-6 py-2 text-white transition-all duration-200 bg-red-500 rounded-lg outline-none hover:bg-red-600"
            >
              Add Subject
            </button>
          </div>
        </form>
      </div>
    )
};

export default AddSubjectForm;
