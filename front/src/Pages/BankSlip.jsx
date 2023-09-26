import { Link } from "react-router-dom";
import Header from "../components/Header";
import React, { useState } from "react";
import Footer from "../components/Footer";

function BankSlip() {
  return (
    <div className="relative bg-backgorund">
      <Header />
      <section className="">
        <div className="flex relative flex-row items-stretch justify-center  pt-12 pb-2 ">
          <div className="  text-3xl font-bold text-true-gray-800">
            Add Your Bank Slip
          </div>
          <br />

          <br />
        </div>
        <div className="flex  justify-center mb-8">
          <p className=" ">
            IF YOU HAVE ANY PROBLEM IN SIGNNING PLEASE CONTACT TO OUR <br />
            COMUNITY TEAM THEY WILL SOLVE YOUR PROBLEM SOONLY
          </p>
        </div>
        <div className=" flex  justify-center">
          <form action="" className=" w-1/3 ">
            <div className="w-full outline-dashed outline-1 h-48 relative  mb-8 ">
              <input
                type="file"
                placeholder="abbb"
                className=" absolute right-10 top-16 flex justify-center"
              />
            </div>
            <button className="  w-full  h-10 text-white hover:bg-sky-700  bg-teal-950  ">
              {" "}
              Continue
            </button>

            <button
              type="submit"
              className=" w-full text-center py-3 rounded bg-green text-black hover:bg-green-dark focus:outline-none my-1"
            >
              Create Account
            </button>
          </form>
        </div>
      </section>

      <div className=" relative">
        <Footer />
      </div>
      <script src="https://unpkg.com/flowbite@1.4.7/dist/flowbite.js"></script>
    </div>
  );
}

export default BankSlip;
