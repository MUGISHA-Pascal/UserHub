import React, { useEffect, useState } from "react";
import { MdDashboard } from "react-icons/md";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import UpdateModal from "./UpdateModal";
const Dashboard = ({ setNavExist }: { setNavExist: any }) => {
  interface user {
    _id: string;
    FirstName: string;
    SecondName: string;
    Phone: number;
    Email: string;
  }
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [choice, setChoice] = useState("");
  const [CurrentPage, setCurrent] = useState(1);
  const [ShowUpdate, setShowModal] = useState<string | null>(null);
  const GetAllUsers = async () => {
    await fetch("https://userhub-xmb9.onrender.com/app/All-users")
      .then((response) => response.json())
      .then((usersdata) => {
        setUsers(usersdata.users);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    GetAllUsers();
  }, []);
  let filteredusers;
  switch (choice) {
    case "FirstName":
      filteredusers =
        search === ""
          ? users
          : users.filter((items: user) =>
              items.FirstName.toLowerCase().includes(search.toLowerCase())
            );
      break;
    case "SecondName":
      filteredusers =
        search === ""
          ? users
          : users.filter((items: user) =>
              items.SecondName.toLowerCase().includes(search.toLowerCase())
            );
      break;
    case "Phone":
      filteredusers =
        search === ""
          ? users
          : users.filter((items: user) =>
              items.Phone.toString().includes(search)
            );
      break;
    case "Email":
      filteredusers =
        search === ""
          ? users
          : users.filter((items: user) =>
              items.Email.toLowerCase().includes(search.toLowerCase())
            );
      break;
    default:
      filteredusers =
        search === ""
          ? users
          : users.filter((items: user) =>
              items.FirstName.toLowerCase().includes(search.toLowerCase())
            );
      break;
  }
  const totalNumberElements = 5;
  const lastIndex = CurrentPage * totalNumberElements;
  const firstIndex = lastIndex - totalNumberElements;
  let paginatedfilteredusers = filteredusers.slice(firstIndex, lastIndex);
  const totalNumberPages = Math.ceil(
    filteredusers.length / totalNumberElements
  );

  const handleNext = () => {
    if (CurrentPage < totalNumberPages) {
      setCurrent(CurrentPage + 1);
    }
  };
  const handleNumberClick = (pageNumber: number) => {
    setCurrent(pageNumber);
  };
  const handlePrevious = () => {
    if (CurrentPage > 1) {
      setCurrent(CurrentPage - 1);
    }
  };

  const handleDelete = async (id: string) => {
    await fetch(
      `https://userhub-xmb9.onrender.com/app/Delete-user`,

      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      }
    );
  };
  GetAllUsers();

  return (
    <div
      className="flex flex-col items-start ml-[100px] max-sm:ml-[12px] space-y-[20px] pb-[30px]"
      onClick={() => {
        setNavExist(false);
      }}
    >
      {ShowUpdate && (
        <UpdateModal
          setShowModal={setShowModal}
          ShowUpdate={ShowUpdate}
          setUsers={setUsers}
        />
      )}
      <div className="flex flex-row space-x-[10px] items-center justify-center max-sm:text-[12px] mt-[20px]">
        <MdDashboard /> <p className="font-bold ">DASHBOARD</p>
      </div>
      <div className="mt-[20px] flex flex-row space-x-[10px] ">
        <label htmlFor="search" className="font-bold max-sm:text-[10px]">
          Filter :
        </label>
        <select
          value={choice}
          title="name"
          className="text-white max-sm:text-[10px] bg-[#242424] border-[1px] focus:outline-none border-gray-500 text-[12px] rounded-[5px]"
          onChange={(e) => {
            setChoice(e.target.value);
          }}
        >
          <option value="FirstName">FirstName</option>
          <option value="SecondName">SecondName</option>
          <option value="Phone">Phone</option>
          <option value="Email">Email</option>
        </select>
        <input
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
          id="search"
          className="bg-[#242424] border-[1px] max-sm:text-[10px] rounded-[5px] border-gray-500 focus:outline-none"
        />
      </div>
      <table className="w-[800px] max-sm:w-[280px] rounded-[10px] ">
        <thead className="text-[13px]">
          <tr className="bg-black max-sm:text-[7px]">
            <th className="border-[1px] p-2 max-sm:p-1 border-gray-500">
              First-name
            </th>
            <th className="border-[1px]  p-2 border-gray-500">Second-name</th>
            <th className="border-[1px]  p-2 border-gray-500">Phone</th>
            <th className="border-[1px]  p-2 border-gray-500">Email</th>
            <th className="border-[1px]  p-2 border-gray-500">Manage</th>
          </tr>
        </thead>
        <tbody className="border-[1px] text-[13px]">
          {paginatedfilteredusers.map((user: user) => (
            <tr key={user._id} className="text-white">
              <td className="border-[1px] max-sm:text-[7px] border-gray-500 p-2">
                {user.FirstName}
              </td>
              <td className="border-[1px] max-sm:text-[7px] border-gray-500 p-2">
                {user.SecondName}
              </td>
              <td className="border-[1px] max-sm:text-[7px] border-gray-500 p-2">
                {user.Phone}
              </td>
              <td className="border-[1px] max-sm:text-[7px] border-gray-500 p-2">
                {user.Email}
              </td>
              <td className="flex flex-row space-x-[10px] px-[10px] items-center justify-center border-[1px] border-gray-500 p-2">
                <button
                  className="text-white bg-black text-[12px] font-bold  max-sm:text-[7px] max-sm:p-[3px]  p-[5px] hover:bg-opacity-50 hover:border-[1px] hover:border-gray-400 rounded-[30px] max-sm:w-[40px] w-[80px]"
                  onClick={() => {
                    handleDelete(user._id);
                  }}
                >
                  delete
                </button>
                <button
                  onClick={() => {
                    setShowModal(user._id);
                  }}
                  className="text-white bg-black text-[12px] max-sm:text-[7px] max-sm:p-[3px] font-bold p-[5px] hover:bg-opacity-50 hover:border-[1px] hover:border-gray-400 rounded-[30px] w-[80px] max-sm:w-[40px]"
                >
                  update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex flex-row space-x-[10px] max-sm:ml-[130px] items-center ml-[380px] text-[10px]">
        <GrFormPrevious
          onClick={handlePrevious}
          className="font-bold text-lg"
        />
        {Array.from({ length: totalNumberPages }, (_, index) => index + 1).map(
          (PageNumber) => (
            <button
              key={PageNumber}
              onClick={() => {
                handleNumberClick(PageNumber);
              }}
              className={`p-[4px] rounded-full max-sm:text-[7px] ${
                CurrentPage === PageNumber ? "bg-gray-700" : "bg-black"
              }`}
            >
              {PageNumber}
            </button>
          )
        )}
        <MdOutlineNavigateNext
          className="font-bold text-[20px]"
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default Dashboard;
