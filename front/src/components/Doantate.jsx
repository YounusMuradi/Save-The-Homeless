import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function Doantate({ buttonText, img, title, ptext }) {
  return (
    <div
      id="Come"
      className=" flex space-x- justify-center ml-24  relative  first-letter:  "
    >
      <div className="w-80 h-96 bg-accent-2  mr-20 ">
        <div className="w-96 h-80 bg-accent-2 relative  flex justify-center">
          <img
            className="absolute brightness-[0.3]  h-[511px] w-[425px]"
            src={img}
            alt=""
          />

          <h1 className="text-4xl  mt-24 text-white   absolute">{title}</h1>
          <p className=" absolute top-24 px-[50px] pt-16 items-center font-sans text-center text-white">
            {" "}
            {ptext}
          </p>
          <Link
            to="/bank"
            className="absolute top-72 mt-24 w-28 bg-accent-2 pt-0.5 rounded-sm h-8 border border-collapse pl-3 hover:bg-white"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Doantate;
