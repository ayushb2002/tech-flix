import React from "react";
import { useFormik } from "formik";
import Button from "./Button";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import Stepper from "./Stepper";
import StepperControl from "./StepperControl";
import { useEffect, useState } from "react";

const AddVideoForm = () => {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    async function loadSubjectList() {
      let slist = []
      const subjectDocs = await getDocs(collection(db, "subjects"));
      subjectDocs?.docs?.map((doc) => slist.push(doc.data()));
      setSubjects(slist);
      setLoading(false);
    }
    loadSubjectList();
  }, []);
  const addVideoForm = useFormik({
    initialValues: {
      image: "",
      title: "",
      description: "",
      videoKey: "",
      subject: "",
      learnings: "",
    },
    onSubmit: (values) => {
      addDoc(collection(db, "videos"), {
        title: values.title,
        description: values.description,
        image: values.image,
        videoKey: values.videoKey,
        learnings: values.learnings.split(","),
      })
        .then((docData) => {
          alert("Video Added");
        })
        .catch((err) => {
          alert(err?.message);
        });
    },
  });
  return (
    !loading && (
      <div className="flex flex-col w-full m-10">
        <h2 className="text-2xl text-center text-white">
          Add Video to Database
        </h2>
        <form onSubmit={addVideoForm.handleSubmit} className="flex flex-col items-center justify-center p-2">
          <div className="form-control">
            <label htmlFor="image" className="form-control-label">
              Image
            </label>
            <input
              id="image"
              name="image"
              type="url"
              className="form-input"
              onChange={addVideoForm.handleChange}
              value={addVideoForm.values.image}
            />
          </div>
          <div className="form-control">
            <label htmlFor="title" className="form-control-label">
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              className="form-input"
              onChange={addVideoForm.handleChange}
              value={addVideoForm.values.title}
            />
          </div>
          <div className="form-control">
            <label htmlFor="videoKey" className="form-control-label">
              Youtube Video Key
            </label>
            <input
              id="videoKey"
              name="videoKey"
              type="text"
              className="form-input"
              onChange={addVideoForm.handleChange}
              value={addVideoForm.values.videoKey}
            />
          </div>
          <div className="form-control">
            <label htmlFor="learnings" className="form-control-label">
              Learnings (comma separate)
            </label>
            <input
              id="learnings"
              name="learnings"
              type="text"
              className="form-input"
              onChange={addVideoForm.handleChange}
              value={addVideoForm.values.learnings}
            />
          </div>
          <div className="form-control">
            <label htmlFor="subject" className="form-control-label">
              Subject
            </label>
            <select
              name="subject"
              id="subject"
              className="form-input"
              onChange={addVideoForm.handleChange}
              onBlur={addVideoForm.handleBlur}
            >
              <option value="" label="Select a Subject" selected disabled>
                Select Subject
              </option>
              {subjects.map((sub, idx) => (
                <option key={idx} value={sub.subjectCode}>
                  {sub.subjectName}
                </option>
              ))}
            </select>
          </div>
          <div className="form-control">
            <button
              type="submit"
              className="flex items-center justify-center px-6 py-2 text-white transition-all duration-200 bg-red-500 rounded-lg outline-none hover:bg-red-600"
            >
              Add Video
            </button>
          </div>
        </form>
      </div>
    )
  );
};

export default AddVideoForm;
