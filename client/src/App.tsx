import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { logo } from "./assets";
import { Home, CreatePost } from "./pages";
import { useColorScheme, checkDarkmode } from "./utils";
import "./App.css";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    checkDarkmode();
  }, []);
  return (
    <BrowserRouter>
      <div className="">
        <header className="w-full flex justify-between items-center bg-white sm:px8 px-4 py-4 border-b border-b-[#e6ebf4] dark:bg-[#313131] dark:border-b-[#111826]">
          <Link to="/">
            <img src={logo} alt="logo" className="w-28 object-contain" />
          </Link>
          <div className="flex justify-between gap-7">
            <label
              htmlFor="toggle"
              className="inline-block cursor-pointer toggle-switch"
            >
              <input
                type="checkbox"
                name=""
                id="toggle"
                className="darkmode-input hidden"
                onChange={useColorScheme}
              />
              <div className="w-[90px] h-[40px] border border-[#878181] rounded-full p-[5px]">
                <div className="w-7 h-7 bg-gray-700 rounded-full dark:bg-slate-200 transition-all darkmode-spinner"></div>
              </div>
            </label>
            <Link
              to="/create-post"
              className="font-inter font-medium text-white bg-[#0A6C54] dark:bg-[#10A37F] px-6 py-2 rounded-md"
            >
              Create
            </Link>
          </div>
        </header>
        <main
          className="sm:p-8 px-4 py-8
      w-full bg-[#f9fafe] min-h-[calc(100vh-73px)] dark:bg-[#1E1F20]"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<CreatePost />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
