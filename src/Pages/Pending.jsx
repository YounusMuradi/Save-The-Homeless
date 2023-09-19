import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Pending() {
  const [donar, donarLog] = useState(false);
  const [page, setPage] = useState(1);

  return (
    <div className="relative bg-backgorund">
      <Header />
      <section className=" mb-10 flex relative">
        <div className=" flex  py-14 flex-row mr-32 mt-12  px-36  justify-between w-full">
          <img className=" ml- w-80" src="Telegram/Frame 2.svg" alt="" />

          <img className=" w-80" src="Telegram/Angel1.svg" alt="" />
        </div>

        <div className="absolute w-full flex pt-8  flex-col text-center justify-center ">
          <h1 className=" text-8xl  tex font-semibold  mr-20">
            Your request is
          </h1>
          <h1 className=" text-8xl text-indigo-500 mr-24 mt-6">Pending</h1>
          <span className=" px-96  mt-24  mr-24">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            deserunt eveniet, dignissimos perspiciatis culpa veritatis harum,
          </span>
          <br />

          <button>contact us</button>
        </div>
      </section>

      <div className=" relative">
        <Footer />
      </div>
      <script src="https://unpkg.com/flowbite@1.4.7/dist/flowbite.js"></script>
    </div>
  );
}

export default Pending;
