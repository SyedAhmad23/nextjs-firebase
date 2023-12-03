import { FaBell, FaInfoCircle, FaUserCircle } from "react-icons/fa";
import { RiNotificationOffLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className=" m-5 bg-white shadow-lg rounded-full">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h2 className="text-2xl font-bold text-[#7B5AFF]">Next.js</h2>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-[#7B5AFF] text-white rounded-full px-4 py-2">
              Feedback
            </button>
            <FaBell className="text-black" size={20} />
            <FaInfoCircle className="text-black" size={20} />
            <FaUserCircle className="text-black" size={40} />
            <RiNotificationOffLine className="text-black" size={10} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
