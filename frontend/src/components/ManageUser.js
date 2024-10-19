import React from "react";
import { FaUsers } from "react-icons/fa";
const ManageUser = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row space-x-[10px] items-center mt-[20px]">
        <FaUsers /> <p className="font-bold">MANAGE USERS</p>
      </div>
      <form className="border-gray-500 border-[1px] mt-[20px] w-[700px] flex flex-col items-center rounded-[20px] h-[230px] mb-[50px] p-0">
        <div className="h-[3px] w-[200px]  bg-white rounded-br-[5px] rounded-bl-[5px]"></div>
        <div className="mt-[10px] grid grid-cols-2 gap-[10px]">
          <div className="flex flex-col space-y-[7px] items-start">
            <label
              for="firstName"
              className="text-[15px] font-bold text-gray-400"
            >
              First name :
            </label>
            <input
              type="text"
              placeholder="first name"
              className="p-[4px] w-[300px] bg-[#242424] border-[1px] border-gray-500 placeholder:font-thin placeholder:text-[14px] px-[4px] rounded-[7px] focus:outline-none text-[15px]"
            />
          </div>
          <div className="flex flex-col space-y-[7px] items-start">
            <label
              for="firstName"
              className="text-[15px] font-bold text-gray-400"
            >
              Second name :
            </label>
            <input
              type="text"
              placeholder="first name"
              className="p-[4px] w-[300px] bg-[#242424] border-[1px] border-gray-500 placeholder:font-thin placeholder:text-[14px] px-[4px] rounded-[7px] focus:outline-none text-[15px]"
            />
          </div>
          <div className="flex flex-col space-y-[7px] items-start">
            <label
              for="firstName"
              className="text-[15px] font-bold text-gray-400"
            >
              Phone :
            </label>
            <input
              type="number"
              placeholder="+ phone"
              className="p-[4px] w-[300px] bg-[#242424] border-[1px] border-gray-500 placeholder:font-thin placeholder:text-[14px] px-[4px] rounded-[7px] focus:outline-none text-[15px]"
            />
          </div>
          <div className="flex flex-col space-y-[7px] items-start">
            <label for="Email" className="text-[15px] font-bold text-gray-400">
              Email :
            </label>
            <input
              type="email"
              placeholder="email"
              className="p-[4px] w-[300px] bg-[#242424] border-[1px] border-gray-500 placeholder:font-thin placeholder:text-[14px] px-[4px] rounded-[7px] focus:outline-none text-[15px]"
            />
          </div>
        </div>
        <button className="text-[#242424] bg-white mt-[20px] text-[15px] font-bold p-[5px] hover:bg-gray-300 rounded-[30px] w-[100px]">
          Add user
        </button>
      </form>
    </div>
  );
};

export default ManageUser;
