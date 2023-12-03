"use client";
import { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";
import backgroundImage from "../Images/background.jpeg";

const Hero = ({ onAddCheckIn }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddCheckIn = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="relative h-[280px] bg-cover bg-no-repeat background-blend-mode-overlay mx-5 rounded-lg">
      <Image
        src={backgroundImage}
        alt="Hero Image"
        className="object-cover"
        layout="fill"
        style={{
          position: "absolute",
          mixBlendMode: "overlay",
          borderRadius: "16px",
        }}
      />
      <div className="absolute top-1/4 text-white ml-3">
        <h4 className="text-4xl font-bold">Hi!✋ Syed Ahmad</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button
          onClick={handleAddCheckIn}
          className="bg-[#7B5AFF] text-white py-2 px-4 rounded-full mt-4"
        >
          Add Check In
        </button>
        <Modal
          isOpen={modalOpen}
          onClose={closeModal}
          onAddCheckIn={onAddCheckIn}
        />
      </div>
    </div>
  );
};

export default Hero;
