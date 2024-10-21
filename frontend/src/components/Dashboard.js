import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
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
  const filteredusers =
    search === ""
      ? users
      : users.filter((items) =>
          items.FirstName.toLowerCase().includes(search.toLowerCase())
        );
  console.log(filteredusers);

  return (
    <div className="flex flex-col items-center space-y-[20px]">
      <div className="mt-[20px] flex flex-col items-start">
        <label htmlFor="search" className="font-bold">
          Filter by First name :
        </label>
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
          <tr className="border-[1px]">
            <th className="border-[1px]">First-name</th>
            <th className="border-[1px]">Second-name</th>
            <th className="border-[1px]">Phone</th>
            <th className="border-[1px]">Email</th>
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
