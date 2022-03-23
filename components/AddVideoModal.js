import React from "react";
import Modal from "react-modal";
import { useRecoilState } from "recoil";
import { modalAtom } from "../atoms/modalAtom";
import { ImCross } from "react-icons/im";
import { useFormik } from "formik";
import Button from "./Button";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const AddVideoModal = () => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalAtom);
  const addVideoForm = useFormik({
    initialValues: {
      image: "",
      title: "",
      description: "",
      videoKey: "",
      learnings: ""
    },
    onSubmit: (values) => {
      addDoc(collection(db, "videos"), {
        title: values.title,
        description: values.description,
        image: values.image,
        videoKey: values.videoKey,
        learnings: values.learnings.split(',')
      })
        .then((docData) => {
          setIsModalOpen(false);
          alert("Video Added");
        })
        .catch((err) => {
          alert(err?.message);
        });
    },
  });
  const closeModal = () => setIsModalOpen(false);
  return (
    <Modal
      isOpen={isModalOpen}
      className="Modal"
      overlayClassName="Overlay"
      onRequestClose={closeModal}
    >
      <div className="flex flex-col gap-2 mx-2 my-2">
        <div
          className="flex items-start hover:cursor-pointer"
          onClick={() => setIsModalOpen(false)}
        >
          <ImCross className="text-white" />
        </div>
        {/* Form */}
        <div className="flex flex-col">
          <form className="space-y-20" onSubmit={addVideoForm.handleSubmit}>
            <div className="flex gap-4 px-10">
              <div className="flex flex-col">
                <label className="text-white" htmlFor="title">
                  Title
                </label>
                <input
                  className="text-white bg-transparent border border-white rounded-lg outline-none"
                  id="title"
                  name="title"
                  type="text"
                  onChange={addVideoForm.handleChange}
                  value={addVideoForm.values.title}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-white" htmlFor="description">
                  Description
                </label>
                <textarea
                  className="text-white bg-transparent border border-white rounded-lg outline-none"
                  id="description"
                  name="description"
                  onChange={addVideoForm.handleChange}
                  value={addVideoForm.values.description}
                  rows={10}
                  cols={30}
                />
              </div>
            </div>
            <div className="flex gap-4 px-10">
              <div className="flex flex-col">
                <label className="text-white" htmlFor="image">
                  Image URL
                </label>
                <input
                  className="text-white bg-transparent border border-white rounded-lg outline-none"
                  id="image"
                  name="image"
                  type="url"
                  onChange={addVideoForm.handleChange}
                  value={addVideoForm.values.image}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-white" htmlFor="image">
                  Video Key
                </label>
                <input
                  className="text-white bg-transparent border border-white rounded-lg outline-none"
                  id="videoKey"
                  name="videoKey"
                  type="text"
                  onChange={addVideoForm.handleChange}
                  value={addVideoForm.values.videoKey}
                />
              </div>
            </div>
            <div className="flex flex-col">
                <label className="text-white" htmlFor="learnings">
                  Learnings (separate with a , (comma))
                </label>
                <input
                  className="text-white bg-transparent border border-white rounded-lg outline-none"
                  id="learnings"
                  name="learnings"
                  type="text"
                  onChange={addVideoForm.handleChange}
                  value={addVideoForm.values.learnings}
                />
              </div>
            <button
              type="submit"
              className="flex items-center justify-center px-6 py-2 text-white transition-all duration-200 bg-green-500 rounded-lg outline-none hover:bg-green-600"
            >
              Add video
            </button>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default AddVideoModal;
