import { Link, useNavigate } from "react-router-dom";
import mediumlogo from "../assets/medium.png";
import { Avatar } from "./Blogcard";

export const Appbar = () => {
  const navigate = useNavigate();
  return (
    <div className="border-b-2 py-1 border-gray-200 px-10 flex justify-between">
      <div className="flex items-center gap-4">
        <img className="w-9 h-9 cursor-pointer" src={mediumlogo} alt="" />
        <Link to="/blogs">
          <div className="text-xl font-bold">Medium</div>
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => {
            navigate("/publish");
          }}
          className="relative mr-2 px-5 h-7 w-28 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
        >
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-green-600 group-hover:w-full ease"></span>
          <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-green-600 group-hover:w-full ease"></span>
          <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-green-600 group-hover:h-full ease"></span>
          <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-green-600 group-hover:h-full ease"></span>
          <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-green-900 opacity-0 group-hover:opacity-100"></span>
          <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
            Publish
          </span>
        </button>

        {/* Avatar with hover effect for Sign Out button */}
        <div className="relative group">
          <Avatar size={"big"} name="sanjeev" />
          {/* Sign Out Button on hover */}
          <button
            onClick={() => navigate("/signin")}
            className="absolute top-12 left-1/2 transform -translate-x-1/2 mt-2 w-20 bg-gray-800 text-white py-1 px-2 rounded-md text-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};
