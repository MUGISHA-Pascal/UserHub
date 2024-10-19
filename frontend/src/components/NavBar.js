import React from "react";
import MiniLogo from "../assets/mini-logo.png";
import Logo from "../assets/logo.png";
import { FaUsers } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const Navbar = ({ setNavExist }) => {
  return (
    <div className="w-[300px] h-[600px] absolute left-0 top-0 bg-black flex flex-col items-center rounded-tr-[10px] rounded-br-[10px]">
      <div className="flex flex-row space-x-[90px] items-center justify-center pt-[40px]">
        <img src={MiniLogo} className="w-[125px] h-[50px]" />
        <IoClose
          className="text-white hover:opacity-55 w-[30px] h-[30px]"
          onClick={() => {
            setNavExist(false);
          }}
        />
      </div>
      <div className="text-white flex flex-col space-y-[20px] mt-[50px] font-bold text-[15px] ">
        <a className="hover:cursor-pointer flex flex-row space-x-[10px] items-center hover:bg-gray-700 hover:bg-opacity-50 p-[10px]  rounded-[10px] w-[200px] justify-center hover:border-[1px] border-white ">
          <FaUsers className="text-white" />
          <p>manage user</p>
        </a>
        <a className="hover:cursor-pointer flex flex-row space-x-[10px] items-center hover:bg-gray-700 hover:bg-opacity-50 p-[10px]  rounded-[10px] w-[200px] justify-center hover:border-[1px] border-white ">
          <MdDashboard />
          <p>Dashboard</p>
        </a>
      </div>
      <img src={Logo} className="mt-[300px] w-[45px] h-[30px]" />
    </div>
  );
};

export default Navbar;
