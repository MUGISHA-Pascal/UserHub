import React from "react";
import MiniLogo from "../assets/mini-logo.png";
import Logo from "../assets/logo.png";
import { FaUsers } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = ({ setNavExist }: { setNavExist: any }) => {
  return (
    <div className="w-[300px] max-sm:w-[230px] h-[600px] max-sm:h-[300px] absolute left-0 top-0 bg-black flex flex-col items-center rounded-tr-[10px] rounded-br-[10px]">
      <div className="flex flex-row space-x-[90px] max-sm:space-x-[90px] items-center justify-center pt-[40px] max-sm:p-[20px]">
        <img
          alt="logo"
          src={MiniLogo}
          className="w-[125px] h-[50px] max-sm:w-[70px] max-sm:h-auto"
        />
        <IoClose
          className="text-white hover:opacity-55 w-[30px] max-sm:w-[15px] max-sm:h-[15px] h-[30px] max-sm:mb-[3px]"
          onClick={() => {
            setNavExist(false);
          }}
        />
      </div>
      <div className="text-white flex flex-col space-y-[20px] max-sm:space-y-[2px] mt-[50px] max-sm:mt-[17px] font-bold text-[15px] ">
        <Link
          to="/manage-user"
          className="hover:cursor-pointer flex flex-row max-sm:text-[12px] space-x-[10px] items-center hover:bg-gray-700 hover:bg-opacity-50 p-[10px]  rounded-[10px] w-[200px] justify-center hover:border-[1px] border-white "
        >
          <FaUsers className="text-white" />
          <p>manage user</p>
        </Link>
        <Link
          to="/"
          className="hover:cursor-pointer flex flex-row space-x-[10px] max-sm:text-[12px] items-center hover:bg-gray-700 hover:bg-opacity-50 p-[10px]  rounded-[10px] w-[200px] justify-center hover:border-[1px] border-white "
        >
          <MdDashboard />
          <p>Dashboard</p>
        </Link>
      </div>
      <img
        alt="logo"
        src={Logo}
        className="mt-[300px] max-sm:mt-[90px] max-sm:w-[25px] max-sm:h-auto w-[45px] h-[30px]"
      />
    </div>
  );
};

export default Navbar;
