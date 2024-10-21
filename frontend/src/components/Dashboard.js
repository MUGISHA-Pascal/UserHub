import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredusers, setFiltered] = useState([]);
  let filteredUsers;
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
  useEffect(() => {
    if (search === "") {
      filteredUsers = users;
      setFiltered(filteredUsers);
    } else {
      filteredUsers = users.filter((items) => {
        return items.FirstName.toLowerCase().includes(search.toLowerCase());
      });
      setFiltered(filteredUsers);
    }
    console.log(filteredusers);
  }, [users, search]);
  return (
    <div>
      <div>
        <label htmlFor="search">filter by First name :</label>
        <input
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
          id="search"
          className="bg-[#242424] border-[1px] focus:outline-none"
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>First-name</th>
            <th>Second-name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredusers.map((user) => {
            <tr key={user._id}>
              <td>{user.FirstName}</td>
              <td>{user.SecondName}</td>
              <td>{user.Phone}</td>
              <td>{user.Email}</td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
