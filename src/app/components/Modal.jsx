import { useState, useRef } from "react";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebaseConfig";
import { v4 } from "uuid";
import { TiUploadOutline } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const Modal = ({ isOpen, onClose, onAddCheckIn }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const hiddenInputRef = useRef(null);

  const handleUploadClick = () => {
    hiddenInputRef.current.click();
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const addCheckIn = async (e) => {
    e.preventDefault();
    if (title.trim() !== "" && image) {
      const storageRef = ref(storage, `images/${v4()}` + image.name);
      await uploadBytes(storageRef, image);
      const imageUrl = await getDownloadURL(storageRef);
      const docRef = await addDoc(collection(db, "checkins"), {
        title: title.trim(),
        imageUrl,
      });
      onAddCheckIn(title, imageUrl);
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-80 z-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      {/* Background overlay */}
      <div className="fixed inset-0 "></div>

      <div className="flex items-center justify-center h-screen">
        <div
          className="bg-white rounded-lg  border z-50"
          style={{ width: "500px" }}
        >
          <div className="flex justify-between font-bold bg-[#F8F8F8] mb-4 p-2">
            <h2 className="text-2xl font-bold  text-gray-700">Add Check In</h2>
            <button onClick={onClose}>
              <IoClose size={20} className="text-black" />
            </button>
          </div>

          <div className="mb-4 px-4">
            <label className="block text-gray-700 font-bold">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 p-2 w-full border rounded text-gray-700"
            />
          </div>
          <div className="mb-4 text-gray-700 font-bold px-4">
            <p className="mb-2">Upload Image</p>
            <div className="bg-white border rounded-md px-2 py-4 text-center">
              <div
                className="flex flex-col items-center justify-center"
                onClick={handleUploadClick}
              >
                <TiUploadOutline size={30} className="m-2 text-[#7B5AFF]" />
                <input
                  type="file"
                  ref={hiddenInputRef}
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
              </div>
              <h3 className="mt-2">
                Click or drag file to this area to upload
              </h3>
              <p className="mt-2 text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti officia perspiciatis?
              </p>
            </div>
          </div>
          <div className="flex justify-end mt-4 p-6">
            <button
              onClick={onClose}
              className="text-gray-700 py-2 px-4 rounded-full border mr-2"
            >
              Cancel
            </button>
            <button
              onClick={addCheckIn}
              className="bg-[#7B5AFF] text-white py-2 px-4 rounded-full"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
