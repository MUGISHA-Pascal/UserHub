import "./App.css";
import { CiMenuBurger } from "react-icons/ci";
import MiniLogo from "./assets/mini-logo2.png";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import ManageUser from "./components/ManageUser";
function App() {
  const [navExist, setNavExist] = useState(false);
  return (
    <Router>
      <div className="App">
        <div className="bg-[rgb(36,36,36)] h-full w-full text-white">
          {navExist && <Navbar setNavExist={setNavExist} />}
          <header className="flex flex-row items-center pt-[150px] max-sm:pt-[75px] max-sm:p-[10px] ml-[100px] max-sm:ml-0 max-sm:w-full max-sm:mr-[10px] border-b-[1px] w-[1100px] border-gray-500">
            <CiMenuBurger
              className="text-gray-300"
              onClick={() => {
                setNavExist(true);
              }}
            />
            <img
              alt="logo"
              src={MiniLogo}
              className="w-[100px] h-auto pt-[3px]"
            />
          </header>
          <section>
            <Routes>
              <Route
                element={<ManageUser setNavExist={setNavExist} />}
                path="/manage-user"
              />
              <Route
                element={<Dashboard setNavExist={setNavExist} />}
                path="/"
              />
            </Routes>
          </section>
        </div>
      </div>
    </Router>
  );
}

export default App;
