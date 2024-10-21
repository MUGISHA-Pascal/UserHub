import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState(null);
  const [choice, setChoice] = useState("");
  useEffect(() => {
    fetch("https://userhub-xmb9.onrender.com/app/All-users")
      .then((response) => response.json())
      .then((usersdata) => {
        setUsers(usersdata.users);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  let filteredusers;
  switch (choice) {
    case "FirstName":
      filteredusers =
        search === ""
          ? users
          : users.filter((items) =>
              items.FirstName.toLowerCase().includes(search.toLowerCase())
            );
      break;
    case "SecondName":
      filteredusers =
        search === ""
          ? users
          : users.filter((items) =>
              items.SecondName.toLowerCase().includes(search.toLowerCase())
            );
      break;
    case "Phone":
      filteredusers =
        search === ""
          ? users
          : users.filter((items) => items.Phone.toString().includes(search));
      break;
    case "Email":
      filteredusers =
        search === ""
          ? users
          : users.filter((items) =>
              items.Email.toLowerCase().includes(search.toLowerCase())
            );
      break;
    default:
      filteredusers =
        search === ""
          ? users
          : users.filter((items) =>
              items.FirstName.toLowerCase().includes(search.toLowerCase())
            );
      break;
  }
  console.log(filteredusers);

  return (
    <div className="flex flex-col items-start ml-[100px] space-y-[20px]">
      <div className="mt-[20px] flex flex-row space-x-[10px] ">
        <label htmlFor="search" className="font-bold">
          Filter :
        </label>
        <select
          value={choice}
          className="text-white bg-[#242424] border-[1px] focus:outline-none rounded-[5px]"
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
          className="bg-[#242424] border-[1px] rounded-[5px] focus:outline-none"
        />
      </div>
      <table className="w-[800px] border-[1px] rounded-[10px]">
        <thead className="border-[1px] rounded-[10px]">
          <tr className="border-[1px] rounded-[10px]">
            <th className="border-[1px] rounded-[10px]">First-name</th>
            <th className="border-[1px] rounded-[10px]">Second-name</th>
            <th className="border-[1px] rounded-[10px]">Phone</th>
            <th className="border-[1px] rounded-[10px]">Email</th>
          </tr>
        </thead>
        <tbody className="border-[1px]">
          {filteredusers.map((user) => (
            <tr key={user._id} className="text-white border-[1px]">
              <td className="border-[1px]">{user.FirstName}</td>
              <td className="border-[1px]">{user.SecondName}</td>
              <td className="border-[1px]">{user.Phone}</td>
              <td className="border-[1px]">{user.Email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
