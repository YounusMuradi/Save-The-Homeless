import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Doantate from "./Doantate";

function Header() {
  const navigate = useNavigate();
  const [Here, there] = useState(0);

  return (
    <header>
      <nav className=" border-black border-b px-4 lg:px-6 py-2.5 ">
        <div className="flex flex-wrap justify-between items-center font-semibold mx-auto max-w-screen-xl">
          <a href="#" className="flex items-center ">
            <a
              href="#"
              className="text-black  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-semibold  rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              SAVE THE <br /> HOMELESS
            </a>
          </a>
          <div className="flex items-center lg:order-2">
            <a
              href="#"
              className="text-gray-800 dark:text-block  hover:bg-backgorund font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
            >
              <select name="long" className=" bg-backgorund" id="long">
                English
                <option value="English">English</option>
                <option value="Dari">Pashto</option>
                <option value="Pashto">Pashto</option>
              </select>
            </a>

            <Link
              to="/signup"
              className="text-black hover:bg-slate-400  font-medium rounded-lg text-sm px-4 lg:px-5 py-2  mr-2 "
            >
              Sign up
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link to="/">
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-black font-semibold rounded hover:text-orange-300  lg:bg-transparent  lg:p-0 "
                    aria-current="page"
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-black font-semibold rounded hover:text-orange-300  lg:bg-transparent  lg:p-0"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#here"
                  className="block py-2 pr-4 pl-3 text-black font-semibold rounded hover:text-orange-300  lg:bg-transparent  lg:p-0"
                >
                  Our Work
                </a>
              </li>{" "}
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-black font-semibold rounded hover:text-orange-300  lg:bg-transparent  lg:p-0"
                >
                  Bolog
                </a>
              </li>
              <li>
                <Link to="/signup">
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-black font-semibold rounded hover:text-orange-300  lg:bg-transparent  lg:p-0"
                  >
                    Be A Volenteer
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
