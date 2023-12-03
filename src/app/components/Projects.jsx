"use client";
import { AiOutlineBars } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import Modal from "./Modal";
import Image from "next/image";

const Projects = ({ checkIns = [], onAddCheckIn }) => {
  return (
    <div>
      <div className="flex justify-between font-bold m-5">
        <h1 className="text-2xl ">Added CheckIns</h1>
        <span className="text-2xl mr-2">
          <AiOutlineBars />
        </span>
      </div>
      <div className="flex flex-wrap items-start m-4 font-bold">
        {checkIns.map((checkIn) => (
          <div key={checkIn.title} className="m-2">
            <div
              className="flex flex-col bg-white p-4 rounded-2xl border shadow-lg"
              style={{ width: "313px", height: "300px", flex: "0 0 auto" }}
            >
              <div className="relative h-48 mb-4 overflow-hidden">
                <Image
                  src={checkIn.imageSrc}
                  width={271}
                  height={160}
                  className="object-cover rounded-md"
                  layout="responsive"
                />
                <button className="absolute top-2 right-2 bg-[#7B5AFF] text-white py-1 px-2 rounded-full">
                  Checked
                </button>
              </div>
              <div className="flex flex-col mt-3">
                <h2 className="text-lg font-bold">{checkIn.title}</h2>
                <span className="text-gray-500 mt-3">
                  {checkIn.date.toLocaleDateString()}
                </span>
                <div className="flex items-center mt-3">
                  <FaUserCircle className="text-black" size={35} />
                  Owner: {checkIn.ownerName}
                </div>
              </div>
            </div>
          </div>
        ))}
        <Modal onAddCheckIn={onAddCheckIn} />
      </div>
    </div>
  );
};

export default Projects;
