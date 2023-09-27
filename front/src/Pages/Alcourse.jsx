import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Alcourse() {
  return (
    <div className="relative bg-backgorund ">
      <Header />
      <select
        name=""
        id=""
        className="absolute left-64 top-44 border border-black rounded-sm bg-backgorund "
      >
        <option value="">Sort By</option>
        <option value=""></option>
        <option value=""></option>
      </select>
      <section className="relative">
        <div className="flex ml-64 space-x-4 mb mt-32">
          {" "}
          <div className="w-64 border border-black h-96"></div>
          <div className="w-64 border border-black h-96"></div>
          <div className="w-64 border border-black h-96"></div>
        </div>
        <div className="flex ml-56 space-x-4 mt-6 mb-16">
          {" "}
          <div className="w-64 border border-black h-96"></div>
          <div className="w-64 border border-black h-96"></div>
          <div className="w-64 border border-black h-96"></div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Alcourse;
