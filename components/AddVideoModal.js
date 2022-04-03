import React from "react";
import Modal from "react-modal";
import { useRecoilState } from "recoil";
import { modalAtom } from "../atoms/modalAtom";
import { ImCross } from "react-icons/im";
import { useFormik } from "formik";
import Button from "./Button";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import Stepper from "./Stepper";
import StepperControl from "./StepperControl";

const AddVideoModal = () => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalAtom);
  const addVideoForm = useFormik({
    initialValues: {
      image: "",
      title: "",
      description: "",
      videoKey: "",
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
      <div className="flex flex-col">
        
      </div>
    </Modal>
  );
};

export default AddVideoModal;
