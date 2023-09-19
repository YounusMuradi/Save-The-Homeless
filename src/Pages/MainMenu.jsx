import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Doantate from "../components/Doantate";
function MainMenu() {
  const [readMore, setreadMore] = useState();
  return (
    <div className="relative bg-backgorund ">
      <Header />

      <div className="border  border-b-black">
        <section className=" mb-36 flex relative  ">
          <div className=" flex   flex-col mr-32    ">
            <img
              className="  ml-72 mt-20 w-80 "
              src="Telegram/Hand-with-coin.svg"
              alt=""
            />
            r
            <img className=" w-80 mt-32" src="Telegram/Hand.svg" alt="" />
          </div>
          <div className="">
            <img
              src="Telegram/Can.svg"
              className="w-80 ml-80 mb- mt-20 absolute top-24 right-10 "
              alt=""
            />
          </div>
          <div className="absolute w-full flex pt-40 font-semibold   flex-col text-center justify-center ">
            <br />
            <h1 className=" text-8xl  font-bold pl-10  mr-20">
              Fundraising For The <br /> People <br />
            </h1>
            <h1 className="text-8xl pl- mt-8 text-secondary outline-offset-1 font-semibold">
              You care <br />
            </h1>
            <div className="mt-8 text-1xl ">
              we are here to serve to childern <br /> that they need for help ,
              and we need for your help also <br />
              <button className=" mt-4   h-10 text-white hover:bg-sky-700  bg-teal-950">
                Donate Now
              </button>
            </div>
          </div>
        </section>
      </div>
      <h1 className="flex justify-center text-2xl mt-6 font-bold">
        Trust Get Noticed
      </h1>
      <div className=" flex flex-row mx-16 gap-16 overflow-hidden  ">
        <img className="h-52 w-48" src="Telegram/tolo.png" alt="" />
        <img className="h-52 w-48" src=" Telegram/pazhwa.png" alt="" />
        <img className="h-52 w-48" src="Telegram/ToloNew.png" alt="" />
        <img className="h-52 w-48" src="Telegram/ToloNew.png" alt="" />
        <img className="h-52 w-48" src="Telegram/voice.png" alt="" />
      </div>
      <div className="flex w-full h-[450px] relative bg-accent-1 mb-12">
        <div>
          <h1 className=" text-3xl font-semibold text-white mt-8 ml-12">
            The Mission And <br />
            Goals Of Our <br />
            Organization.
          </h1>
          <p className="text-white font-semibold opacity-95 w-[700px] my-4 pl-12">
            our goal is to help for children who are in nedd and without help of{" "}
            you we dont think that we reach to this target our goal is to help
            for children who are in nedd and without help of you we dont think
            that we reach to this target our goal is to help for children who
            are in nedd and without help of you we dont think that we reach to
            this target{" "}
          </p>
          <Link to="/bank">
            <button className=" mt-2    h-8 text-black hover:bg-sky-700  ml-12 bg-accent-2">
              Donate Now
            </button>
          </Link>
        </div>
        <div className=" absolute right-10  top-2">
          <div className="w-72 mb-4  h-48 bg-backgorund ">
            {" "}
            <img
              src="Telegram/coin-heart.svg"
              className=" ml-16 pt-4 "
              alt=""
            />
            <h1 className="text-center text-3xl font-bold">Donation</h1>
          </div>
          <div className="w-72 mb-4  h-48 bg-backgorund">
            {" "}
            <img
              src="Telegram/6305ba88a364e26cae98f432_Organization_Details_Image3_Traced.svg"
              className=" ml-10 pt-4"
              alt=""
            />
            <h1 className="text-center text-3xl font-bold">Eduacation</h1>
          </div>
          <img src="" alt="" />
        </div>
      </div>
      <div>
        {" "}
        <h1 className=" justify-center flex text-3xl font-semibold">
          The Area of our work
        </h1>
        <p className="flex justify-center mb-12">
          we are together to serve for people that they need for help in every
          thait is possible
        </p>
      </div>
      <div
        className=" flex space-x-6 justify-center ml-0 mr-16 relative  first-letter: mb-2 "
        id="here"
      >
        <Doantate
          buttonText="Donate Now"
          img="Telegram/orphan.jpeg"
          title="Orphan Releif"
          ptext="our work is to Help for chidren that they are deprived from having of family and love of thier father and mother and couse of economic problem can not continue thier lesson and a good life "
        />
        <Doantate
          buttonText="Donate Now"
          img="Telegram/orphan.jpeg"
          title="Orphan Relief"
          ptext="our work is to Help for chidren that they are deprived from having of family and love of thier father and mother and couse of economic problem can not continue thier lesson and a good life "
        />
        <Doantate
          buttonText="Donate Now"
          img="Telegram/indiapoor.webp "
          title="Orphange"
          ptext="our work is to Help for chidren that they are deprived from having of family and love of thier father and mother and couse of economic problem can not continue thier lesson and a good life "
        />
      </div>
      <div className="w-6/7  mx-16 bg-accent-1 h-60 relative mb-16 mt-60 ">
        <h1 className="text-2xl font-semibold absolute text-white left-96   top-24">
          Donate For People Who are In Need{" "}
        </h1>
        <Link
          to="/signup?donate=true"
          className="absolute left-96 ml-28 pt-1  top-12 mt-24 w-28 rounded-sm bg-accent-2 h-8 border border-collapse pl-3 hover:bg-white"
        >
          Donate Now
        </Link>

        <img src="Telegram/Group.svg" className="pb-0" alt="" />
        <img
          src="Telegram/Hand-with-coin.svg"
          className="pb-0 absolute top-0 right-0 w-80"
          alt=""
        />
      </div>
      <div className="flex relative  mb-14">
        <h1 className="absolute left-40 font-bold text-2xl  ml-96 justify-center">
          News & Article
        </h1>
      </div>
      <div className="flex flex-row px-16">
        <div className=" w-1/2   border  border-l-slate-500    flex h-80 mb-">
          <img
            src="Telegram/image.jpg"
            className="w-76 ml-8 mt-6 h-60"
            alt=""
          />
          <div className="flex flex-row relative ">
            {" "}
            <p className="absolute left-9 top-5 w-32">Ahmad Rashid</p>
            <br />
            <p className="text-1x2 w-80 left-8 top-14 absolute flex flex-row font-bold ">
              10 Ways to Give To Charity Without Your Budget
            </p>
          </div>
        </div>{" "}
        <div className=" w-1/2 flex-row space-x-10 border  border-r-slate-500   flex h-80 mb-2 ml-2">
          <img
            src="Telegram/image.jpg"
            className="w-76 ml-8 mt-6 h-60"
            alt=""
          />
          <div className="flex flex-row relative  ">
            {" "}
            <p className="absolute left-2 top-5 w-32">Ahmad Rashid</p>
            <br />
            <p className="text-1x2 w-80 top-14 absolute flex flex-row font-bold ">
              10 Ways to Give To Charity Without Your Budget
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row px-16">
        <div className=" w-1/2  space-x-10 border  border-l-slate-500    flex h-80 mb-">
          <img
            src="Telegram/image.jpg"
            className="w-76 ml-8 mt-6 h-60"
            alt=""
          />
          <div className="flex flex-row relative ">
            {" "}
            <p className="absolute left-2 top-5 w-32">Ahmad Rashid</p>
            <br />
            <p className="text-1x2 w-80 top-14 absolute flex flex-row font-bold ">
              10 Ways to Give To Charity Without Your Budget
            </p>
          </div>
        </div>{" "}
        <div className=" w-1/2 flex-row space-x-10 border  border-r-slate-500  ml-2 flex h-80 mb-10">
          <img
            src="Telegram/image.jpg"
            className="w-76 ml-8 mt-6 h-60"
            alt=""
          />
          <div className="flex flex-row relative ">
            {" "}
            <p className="absolute left-2 top-5 w-32">Ahmad Rashid</p>
            <br />
            <p className="text-1x2 w-80 top-14 absolute flex flex-row font-bold ">
              10 Ways to Give To Charity Without Your Budget
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row  px-[60px] w-full space-x-2 mb-10 ">
        <div className="flex-1  ">
          <Accordion className="space-y-2">
            <AccordionItem
              style={{
                backgroundColor: "#e3f7f7",
                border: "1px solid black",
              }}
            >
              <AccordionItemHeading>
                <AccordionItemButton style={{ backgroundColor: "#e3f7f7" }}>
                  What harsh truths do you prefer to ignore?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem
              style={{
                backgroundColor: "#e3f7f7",
                border: "1px solid black",
              }}
            >
              <AccordionItemHeading>
                <AccordionItemButton style={{ backgroundColor: "#e3f7f7" }}>
                  Is free will real or just an illusion?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in
                  ut nostrud velit in irure cillum tempor laboris sed
                  adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem
              style={{
                backgroundColor: "#e3f7f7",
                border: "1px solid black",
              }}
            >
              <AccordionItemHeading>
                <AccordionItemButton style={{ backgroundColor: "#e3f7f7" }}>
                  Is free will real or just an illusion?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in
                  ut nostrud velit in irure cillum tempor laboris sed
                  adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem
              style={{
                backgroundColor: "#e3f7f7",
                border: "1px solid black",
              }}
            >
              <AccordionItemHeading>
                <AccordionItemButton style={{ backgroundColor: "#e3f7f7" }}>
                  Is free will real or just an illusion?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in
                  ut nostrud velit in irure cillum tempor laboris sed
                  adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="flex-1">
          <Accordion className="space-y-2">
            <AccordionItem
              style={{
                backgroundColor: "#e3f7f7",
                border: "1px solid black",
              }}
            >
              <AccordionItemHeading>
                <AccordionItemButton style={{ backgroundColor: "#e3f7f7" }}>
                  What harsh truths do you prefer to ignore?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem
              style={{
                backgroundColor: "#e3f7f7",
                border: "1px solid black",
              }}
            >
              <AccordionItemHeading>
                <AccordionItemButton style={{ backgroundColor: "#e3f7f7" }}>
                  What harsh truths do you prefer to ignore?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem
              style={{
                backgroundColor: "#e3f7f7",
                border: "1px solid black",
              }}
            >
              <AccordionItemHeading>
                <AccordionItemButton style={{ backgroundColor: "#e3f7f7" }}>
                  What harsh truths do you prefer to ignore?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem
              style={{
                backgroundColor: "#e3f7f7",
                border: "1px solid black",
              }}
            >
              <AccordionItemHeading>
                <AccordionItemButton style={{ backgroundColor: "#e3f7f7" }}>
                  Is free will real or just an illusion?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in
                  ut nostrud velit in irure cillum tempor laboris sed
                  adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className="w-full h-44 relative bg-accent-2">
        <h1 className="text-2xl absolute top-10 left-8  font-bold">
          Get Every Week Update
        </h1>

        <p className="w-72 absolute top-20 left-8 font-semibold ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
        </p>
        <div className="absolute ml-60 top-16  left-96">
          <input
            placeholder="Email"
            type="email"
            className="h-12 pl-4 border border-black w-80 bg-white"
          />
          <button className="bg-accent-3 w-36 h-12 ml-2 text-white">
            Subscribe Me
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainMenu;
