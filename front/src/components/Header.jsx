import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Doantate from "./Doantate";
import { useTranslation } from "react-i18next";

function Header() {
  const navigate = useNavigate();
  const [Here, there] = useState(0);

  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    console.log(lng);
    i18n.changeLanguage(lng);
  };
  const { t } = useTranslation();

  return (
    <header>
      <nav className=" border-black border-b px-4 lg:px-6 py-2.5 ">
        <div className="flex flex-wrap justify-between items-center font-semibold mx-auto max-w-screen-xl">
          <a href="#" className="flex items-center ">
            <a
              href="/"
              className="text-black ml-10  w-40  focus:ring-gray-300 font-semibold  rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              {t("Save_The_Hoemless")}
            </a>
          </a>
          <div className="flex items-center lg:order-2">
            <a
              href="#"
              className="text-gray-800 dark:text-block  hover:bg-backgorund font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
            >
              <select
                onChange={(e) => changeLanguage(e.target.value)}
                name="long"
                className="   bg-backgorund"
                id="long"
              >
                <option value="en">{t("English")}</option>
                <option value="fa">{t("Dari")}</option>
              </select>
            </a>
            <Link
              to="/signup"
              className="text-black hover:bg-accent-2  font-medium rounded-lg text-sm  lg:px-5 py-2  mr-2 "
            >
              {t("Sign_Up")}
            </Link>{" "}
            <Link
              to="/login"
              className="text-black hover:bg-accent-2  font-medium rounded-lg text-sm px-4 lg:px-5 py-2  mr-2 "
            >
              {t("Login")}
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
                    className="block py-2 pr-4 pl-3 text-black font-semibold hover:bg-accent-2  roundedhover:bg-accent-2   lg:bg-transparent  lg:p-0 "
                    aria-current="page"
                  >
                    {t("Home")}
                  </a>
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-black font-semibold rounded hover:bg-accent-2   lg:bg-transparent  lg:p-0"
                >
                  {t("About_Us")}
                </a>
              </li>
              <li>
                <a
                  href="#here"
                  className="block py-2 pr-4 pl-3 text-black font-semibold rounded hover:bg-accent-2   lg:bg-transparent  lg:p-0"
                >
                  {t("Our_Work")}
                </a>
              </li>{" "}
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-black font-semibold rounded hover:bg-accent-2  lg:bg-transparent  lg:p-0"
                >
                  {t("Bolog")}
                </a>
              </li>
              <li>
                <Link to="/signup">
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-black font-semibold rounded hover:bg-accent-2   lg:bg-transparent  lg:p-0"
                  >
                    {t("Be_A_Volunteer")}
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
