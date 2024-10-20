import "./App.css";
import Navbar from "./components/NavBar.js";
import { CiMenuBurger } from "react-icons/ci";
import MiniLogo from "./assets/mini-logo2.png";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ManageUser from "./components/ManageUser.js";
import Dashboard from "./components/Dashboard.js";

function App() {
  const [navExist, setNavExist] = useState(false);
  return (
    <Router>
      <div className="App">
        <div className="bg-[rgb(36,36,36)] h-screen w-full text-white">
          {navExist && <Navbar setNavExist={setNavExist} />}
          <heading className="flex flex-row items-center pt-[150px] ml-[100px] border-b-[1px] w-[1100px] border-gray-500">
            <CiMenuBurger
              className="text-gray-300"
              onClick={() => {
                setNavExist(true);
              }}
            />
            <img src={MiniLogo} className="w-[100px] h-auto pt-[3px]" />
          </heading>
          <section>
            <Routes>
              <Route element={<ManageUser />} path="/manage-user" />
              <Route element={<Dashboard />} path="/" />
            </Routes>
          </section>
        </div>
      </div>
    </Router>
  );
}

export default App;
