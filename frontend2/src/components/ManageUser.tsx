import React, { useState } from "react";
import { FaUsers } from "react-icons/fa";
const ManageUser = ({ setNavExist }: { setNavExist: any }) => {
  const [FirstName, setFirst] = useState("");
  const [SecondName, setSecond] = useState("");
  const [Phone, setPhone] = useState<any>(null);
  const [Email, setEmail] = useState("");
  const handlesubmit = async (e: any) => {
    e.preventDefault();
    await fetch("https://userhub-xmb9.onrender.com/app/Add-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ FirstName, SecondName, Phone, Email }),
    })
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        console.log(responseData);
      })
      .catch((error) => {
        console.log(error);
      });
    setFirst("");
    setSecond("");
    setPhone("");
    setEmail("");
  };
  return (
    <div
      className="flex flex-col items-center max-sm:p-[10px]"
      onClick={() => {
        setNavExist(false);
      }}
    >
      <div className="flex flex-row space-x-[10px] items-center mt-[20px] max-sm:mt-[10px]">
        <FaUsers /> <p className="font-bold max-sm:text-[12px]">MANAGE USERS</p>
      </div>
      <form
        onSubmit={handlesubmit}
        className="border-gray-500 border-[1px] mt-[50px] max-sm:mt-[25px] max-sm:w-full w-[700px] mb-[100px] flex flex-col items-center rounded-[20px] max-sm:h-[300px] h-[230px] p-0"
      >
        <div className="h-[3px] w-[200px]  bg-white rounded-br-[5px]  max-sm:w-[100px] rounded-bl-[5px]"></div>
        <div className="mt-[10px] grid grid-cols-2 max-sm:grid-cols-1 gap-[10px]">
          <div className="flex flex-col space-y-[7px] items-start">
            <label
              htmlFor="firstName"
              className="text-[15px] max-sm:text-[10px] font-bold text-gray-400"
            >
              First name :
            </label>
            <input
              type="text"
              onChange={(e) => {
                setFirst(e.target.value);
              }}
              value={FirstName}
              placeholder="first name"
              required
              className="p-[4px] w-[300px] max-sm:placeholder:text-[10px] max-sm:text-[10px] bg-[#242424] border-[1px] border-gray-500 placeholder:font-thin placeholder:text-[14px] px-[4px] rounded-[7px] focus:outline-none text-[15px]"
            />
          </div>
          <div className="flex flex-col space-y-[7px] items-start">
            <label
              htmlFor="firstName"
              className="text-[15px] max-sm:text-[10px] font-bold text-gray-400"
            >
              Second name :
            </label>
            <input
              onChange={(e) => {
                setSecond(e.target.value);
              }}
              value={SecondName}
              type="text"
              required
              placeholder="first name"
              className="p-[4px] w-[300px] max-sm:placeholder:text-[10px] max-sm:text-[10px] bg-[#242424] border-[1px] border-gray-500 placeholder:font-thin placeholder:text-[14px] px-[4px] rounded-[7px] focus:outline-none text-[15px]"
            />
          </div>
          <div className="flex flex-col space-y-[7px] items-start">
            <label
              htmlFor="firstName"
              className="text-[15px] max-sm:text-[10px] font-bold text-gray-400"
            >
              Phone :
            </label>
            <input
              type="number"
              placeholder="+ phone"
              required
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              value={Phone}
              className="p-[4px] w-[300px] max-sm:placeholder:text-[10px] max-sm:text-[10px] bg-[#242424] border-[1px] border-gray-500 placeholder:font-thin placeholder:text-[14px] px-[4px] rounded-[7px] focus:outline-none text-[15px]"
            />
          </div>
          <div className="flex flex-col space-y-[7px] items-start">
            <label
              htmlFor="Email"
              className="text-[15px] font-bold max-sm:text-[10px] text-gray-400"
            >
              Email :
            </label>
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={Email}
              placeholder="email"
              required
              className="p-[4px] w-[300px] max-sm:placeholder:text-[10px] max-sm:text-[10px] bg-[#242424] border-[1px] border-gray-500 placeholder:font-thin placeholder:text-[14px] px-[4px] rounded-[7px] focus:outline-none text-[15px]"
            />
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-black mt-[20px] text-[15px] max-sm:text-[10px] font-bold p-[5px] hover:bg-opacity-50 hover:border-[1px] border-gray-400 rounded-[30px] w-[100px]"
        >
          Add user
        </button>
      </form>
    </div>
  );
};

export default ManageUser;
