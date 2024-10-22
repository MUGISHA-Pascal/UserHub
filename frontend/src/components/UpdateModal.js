import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const UpdateModal = ({ setShowModal, ShowUpdate, setUsers }) => {
  const [FirstName, setFirst] = useState("");
  const [SecondName, setSecond] = useState("");
  const [Phone, setPhone] = useState(null);
  const [Email, setEmail] = useState("");
  const handlesubmit = async (e) => {
    e.preventDefault();
    await fetch(
      `https://userhub-xmb9.onrender.com/app/Update-user?id=${ShowUpdate}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ FirstName, SecondName, Phone, Email }),
      }
    )
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
    fetch("https://userhub-xmb9.onrender.com/app/All-users")
      .then((response) => response.json())
      .then((usersdata) => {
        setUsers(usersdata.users);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="absolute">
      <div className="bg-black bg-opacity-30 h-[400px] w-[1100px] absolute z-10"></div>
      <form
        onSubmit={handlesubmit}
        className="border-gray-300 ml-[190px] absolute z-20 bg-gray-700 border-[1px] mt-[70px] w-[700px] mb-[100px] flex flex-col items-center rounded-[20px] h-[230px] p-0"
      >
        <div className="h-[3px] w-[200px]  bg-white rounded-br-[5px] mb-[10px] rounded-bl-[5px]"></div>
        <div className="relative">
          <IoClose
            className="absolute left-[300px] font-bold text-lg hover:opacity-60"
            onClick={() => {
              setShowModal(false);
            }}
          />
        </div>
        <div className="mt-[10px] grid grid-cols-2 gap-[10px]">
          <div className="flex flex-col space-y-[7px] items-start">
            <label
              for="firstName"
              className="text-[15px] font-bold text-gray-100"
            >
              First name :
            </label>
            <input
              type="text"
              onChange={(e) => {
                setFirst(e.target.value);
              }}
              value={FirstName}
              placeholder="new first name"
              required
              className="p-[4px] w-[300px] bg-[#242424] border-[1px] border-gray-500 placeholder:font-thin placeholder:text-[14px] px-[4px] rounded-[7px] focus:outline-none text-[15px]"
            />
          </div>
          <div className="flex flex-col space-y-[7px] items-start">
            <label
              for="firstName"
              className="text-[15px] font-bold text-gray-100"
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
              placeholder=" new second name"
              className="p-[4px] w-[300px] bg-[#242424] border-[1px] border-gray-500 placeholder:font-thin placeholder:text-[14px] px-[4px] rounded-[7px] focus:outline-none text-[15px]"
            />
          </div>
          <div className="flex flex-col space-y-[7px] items-start">
            <label
              for="firstName"
              className="text-[15px] font-bold text-gray-100"
            >
              Phone :
            </label>
            <input
              type="number"
              placeholder="new  + phone"
              required
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              value={Phone}
              className="p-[4px] w-[300px] bg-[#242424] border-[1px] border-gray-500 placeholder:font-thin placeholder:text-[14px] px-[4px] rounded-[7px] focus:outline-none text-[15px]"
            />
          </div>
          <div className="flex flex-col space-y-[7px] items-start">
            <label for="Email" className="text-[15px] font-bold text-gray-100">
              Email :
            </label>
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={Email}
              placeholder="new email"
              required
              className="p-[4px] w-[300px] bg-[#242424] border-[1px] border-gray-500 placeholder:font-thin placeholder:text-[14px] px-[4px] rounded-[7px] focus:outline-none text-[15px]"
            />
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-black mt-[20px] text-[12px] font-bold p-[5px] hover:bg-opacity-50 hover:border-[1px] border-gray-400 rounded-[30px] w-[100px]"
        >
          Update user
        </button>
      </form>
    </div>
  );
};

export default UpdateModal;
