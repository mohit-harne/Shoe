import React from "react";
import { useState } from "react";
import shoe1 from "../images/shoe1.png";
import shoe2 from "../images/shoe2.png";
import shoe3 from "../images/shoe3.png";
import shoe4 from "../images/shoe4.png";
import shoe1big from "../images/shoe1big.png";
import shoe2big from "../images/shoe2big.png";
import shoe3big from "../images/shoe3big.png";
import shoe4big from "../images/shoe4big.png";
import shoe4redcolor from "../images/shoe4redcolor.png";
import shoe4yellowcolor from "../images/shoe4yellowcolor.png";
import shoe4purplecolor from "../images/shoe4purplecolor.png";
import shoe3redcolor from "../images/shoe3redcolor.png";
import shoe3bluecolor from "../images/shoe3bluecolor.png";
import shoe3purplecolor from "../images/shoe3purplecolor.png";
import shoe2redcolor from "../images/shoe2redcolor.png";
import shoe2yellowcolor from "../images/shoe2yellowcolor.png";
import shoe2purplecolor from "../images/shoe2purplecolor.png";
import shoe1bluecolor from "../images/shoe1bluecolor.png";
import shoe1yellowcolor from "../images/shoe1yellowcolor.png";
import shoe1purplecolor from "../images/shoe1purplecolor.png";
import shoes5big from "../images/shoe5big.png";
import shoe6big from "../images/shoe6big.png";
import shoe7 from "../images/shoe7.png";
import shoe8 from "../images/shoe8.png";
import Home2 from "./Home2";
import "../App.css";
const Home = () => {
  const [activeTab, setActiveTab] = useState("img1");
  const handleClick = (tab) => {
    setActiveTab(tab);
  };
  const renderContent = () => {
    switch (activeTab) {
      case "img1":
        return (
          <div className=" w-[450px] h-auto flex items-center justify-center">
            <img
              className="shoeone h-[130px] w-[260px] -rotate-0 ml-[-40px] mt-[-80px] opacity-80 hover:scale-110 transition-all duration-400 cursor-pointer overflow-hidden
             md:h-[130px]  md:w-[350px] md:ml-[300px] md:-rotate-12 md:mt-[-600px] md:mr-[-80px]
             lg:h-[230px]  lg:w-[480px] lg:ml-[-80px] lg:mt-[10px] lg:-rotate-45 "
              src={shoe1big}
              alt="M"
            />
            <div className="child h-[50px] w-[100px] absolute flex items-center justify-center gap-2 mt-[-270px] ml-[40px] lg:justify-start lg:ml-[-1163px] lg:mt-[350px] md:ml-[-340px] md:mt-[-200px]">
              <div
                onClick={() => handleClick("img1")}
                className={`child bg-red-700 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img1" ? "border-4 p-2 border-white " : ""
                }`}
              >
                {" "}
              </div>
              <div
                onClick={() => handleClick("img1yellowcolor")}
                className={`child bg-yellow-400 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img1yellowcolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
              <div
                onClick={() => handleClick("img1bluecolor")}
                className={`child bg-blue-400 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img1bluecolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
              <div
                onClick={() => handleClick("img1purplecolor")}
                className={`child bg-purple-500 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img1purplecolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
            </div>
          </div>
        );
      case "img2":
        return (
          <div className="w-[450px] h-auto flex items-center justify-center">
            <img
              className="shoeone h-[130px] w-[260px] -rotate-0 ml-[-40px] mt-[-80px] opacity-80 hover:scale-110 transition-all duration-400 cursor-pointer overflow-hidden
            md:h-[130px]  md:w-[350px] md:ml-[300px] md:-rotate-12 md:mt-[-600px] md:mr-[-80px]
            lg:h-[230px]  lg:w-[480px] lg:ml-[-80px] lg:mt-[10px] lg:-rotate-45 "
              src={shoe2big}
              alt="M"
            />
            <div className="child h-[50px] w-[100px] absolute flex items-center justify-center gap-2 mt-[-270px] ml-[40px] lg:justify-start lg:ml-[-1163px] lg:mt-[350px] md:ml-[-340px] md:mt-[-200px]">
              <div
                onClick={() => handleClick("img2redcolor")}
                className={`child bg-red-700 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img2redcolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
              <div
                onClick={() => handleClick("img2yellowcolor")}
                className={`child bg-yellow-400 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img2yellowcolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
              <div
                onClick={() => handleClick("img2")}
                className={`child bg-green-600 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img2" ? "border-4 p-2 border-white " : ""
                }`}
              ></div>
              <div
                onClick={() => handleClick("img2purplecolor")}
                className={`child bg-purple-500 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img2purplecolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
            </div>
          </div>
        );
      case "img3":
        return (
          <div className="w-[450px] h-auto flex items-center justify-center">
            <img
              className="shoeone h-[130px] w-[260px] -rotate-0 ml-[-40px] mt-[-80px] opacity-80 hover:scale-110 transition-all duration-400 cursor-pointer overflow-hidden
            md:h-[130px]  md:w-[350px] md:ml-[300px] md:-rotate-12 md:mt-[-600px] md:mr-[-80px]
            lg:h-[230px]  lg:w-[480px] lg:ml-[-80px] lg:mt-[10px] lg:-rotate-45 "
              src={shoe3big}
              alt="M"
            />
            <div className="child h-[50px] w-[100px] absolute flex items-center justify-center gap-2 mt-[-270px] ml-[40px] lg:justify-start lg:ml-[-1163px] lg:mt-[350px] md:ml-[-340px] md:mt-[-200px]">
              <div
                onClick={() => handleClick("img3redcolor")}
                className={`child bg-red-700 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img3redcolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
              <div
                onClick={() => handleClick("img3")}
                className={`child bg-green-600 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img3" ? "border-4 p-2 border-white " : ""
                }`}
              ></div>
              <div
                onClick={() => handleClick("img3bluecolor")}
                className={`child bg-blue-400 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img3bluecolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
              <div
                onClick={() => handleClick("img3purplecolor")}
                className={`child bg-purple-500 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img3purplecolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
            </div>
          </div>
        );
      case "img4":
        return (
          <div className="w-[450px] h-auto flex items-center justify-center">
            <img
              className="shoeone h-[130px] w-[260px] -rotate-0 ml-[-40px] mt-[-80px] opacity-80 hover:scale-110 transition-all duration-400 cursor-pointer overflow-hidden
              md:h-[130px]  md:w-[350px] md:ml-[300px] md:-rotate-12 md:mt-[-600px] md:mr-[-80px]
              lg:h-[230px]  lg:w-[480px] lg:ml-[-80px] lg:mt-[10px] lg:-rotate-45 "
              src={shoe4big}
              alt="M"
            />
            <div className="child h-[50px] w-[100px] absolute flex items-center justify-center gap-2 mt-[-270px] ml-[40px] lg:justify-start lg:ml-[-1163px] lg:mt-[350px] md:ml-[-340px] md:mt-[-200px]">
              <div
                onClick={() => handleClick("img4redcolor")}
                className={`child bg-red-700 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img4redcolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
              <div
                onClick={() => handleClick("img4yellowcolor")}
                className={`child bg-yellow-400 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img4yellowcolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
              <div
                onClick={() => handleClick("img4")}
                className={`child bg-blue-400 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img4" ? "border-4 p-2 border-white " : ""
                }`}
              ></div>
              <div
                onClick={() => handleClick("img4purplecolor")}
                className={`child bg-purple-500 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img4purplecolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
            </div>
          </div>
        );
      case "img4redcolor":
        return (
          <div className="w-[450px] h-auto flex items-center justify-center">
            <img
              className="shoeone h-[130px] w-[260px] -rotate-0 ml-[-40px] mt-[-80px] opacity-80 hover:scale-110 transition-all duration-400 cursor-pointer overflow-hidden
            md:h-[130px]  md:w-[350px] md:ml-[300px] md:-rotate-12 md:mt-[-600px] md:mr-[-80px]
            lg:h-[230px]  lg:w-[480px] lg:ml-[-80px] lg:mt-[10px] lg:-rotate-45 "
              src={shoe4redcolor}
              alt="M"
            />
            <div className="child h-[50px] w-[100px] absolute flex items-center justify-center gap-2 mt-[-270px] ml-[40px] lg:justify-start lg:ml-[-1163px] lg:mt-[350px] md:ml-[-340px] md:mt-[-200px]">
              <div
                onClick={() => handleClick("img4redcolor")}
                className={`child bg-red-700 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img4redcolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
              <div
                onClick={() => handleClick("img4yellowcolor")}
                className={`child bg-yellow-400 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img4yellowcolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
              <div
                onClick={() => handleClick("img4")}
                className={`child bg-blue-400 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img4" ? "border-4 p-2 border-white " : ""
                }`}
              ></div>
              <div
                onClick={() => handleClick("img4purplecolor")}
                className={`child bg-purple-500 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img4purplecolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
            </div>
          </div>
        );
      case "img4yellowcolor":
        return (
          <div className="w-[450px] h-auto flex items-center justify-center">
            <img
              className="shoeone h-[130px] w-[260px] -rotate-0 ml-[-40px] mt-[-80px] opacity-80 hover:scale-110 transition-all duration-400 cursor-pointer overflow-hidden
            md:h-[130px]  md:w-[350px] md:ml-[300px] md:-rotate-12 md:mt-[-600px] md:mr-[-80px]
            lg:h-[230px]  lg:w-[480px] lg:ml-[-80px] lg:mt-[10px] lg:-rotate-45 "
              src={shoe4yellowcolor}
              alt="M"
            />
            <div className="child h-[50px] w-[100px] absolute flex items-center justify-center gap-2 mt-[-270px] ml-[40px] lg:justify-start lg:ml-[-1163px] lg:mt-[350px] md:ml-[-340px] md:mt-[-200px]">
              <div
                onClick={() => handleClick("img4redcolor")}
                className={`child bg-red-700 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img4redcolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
              <div
                onClick={() => handleClick("img4yellowcolor")}
                className={`child bg-yellow-400 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img4yellowcolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
              <div
                onClick={() => handleClick("img4")}
                className={`child bg-blue-400 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img4" ? "border-4 p-2 border-white " : ""
                }`}
              ></div>
              <div
                onClick={() => handleClick("img4purplecolor")}
                className={`child bg-purple-500 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img4purplecolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
            </div>
          </div>
        );
      case "img4purplecolor":
        return (
          <div className="w-[450px] h-auto flex items-center justify-center">
            <img
              className="shoeone h-[130px] w-[260px] -rotate-0 ml-[-40px] mt-[-80px] opacity-80 hover:scale-110 transition-all duration-400 cursor-pointer overflow-hidden
              md:h-[130px]  md:w-[350px] md:ml-[300px] md:-rotate-12 md:mt-[-600px] md:mr-[-80px]
              lg:h-[230px]  lg:w-[480px] lg:ml-[-80px] lg:mt-[10px] lg:-rotate-45 "
              src={shoe4purplecolor}
              alt="M"
            />
            <div className="child h-[50px] w-[100px] absolute flex items-center justify-center gap-2 mt-[-270px] ml-[40px] lg:justify-start lg:ml-[-1163px] lg:mt-[350px] md:ml-[-340px] md:mt-[-200px]">
              <div
                onClick={() => handleClick("img4redcolor")}
                className={`child bg-red-700 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img4redcolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
              <div
                onClick={() => handleClick("img4yellowcolor")}
                className={`child bg-yellow-400 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img4yellowcolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
              <div
                onClick={() => handleClick("img4")}
                className={`child bg-blue-400 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img4" ? "border-4 p-2 border-white " : ""
                }`}
              ></div>
              <div
                onClick={() => handleClick("img4purplecolor")}
                className={`child bg-purple-500 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img4purplecolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
            </div>
          </div>
        );
      case "img3redcolor":
        return (
          <div className="w-[450px] h-auto flex items-center justify-center">
            <img
              className="shoeone h-[130px] w-[260px] -rotate-0 ml-[-40px] mt-[-80px] opacity-80 hover:scale-110 transition-all duration-400 cursor-pointer overflow-hidden
              md:h-[130px]  md:w-[350px] md:ml-[300px] md:-rotate-12 md:mt-[-600px] md:mr-[-80px]
              lg:h-[230px]  lg:w-[480px] lg:ml-[-80px] lg:mt-[10px] lg:-rotate-45 "
              src={shoe3redcolor}
              alt="M"
            />
            <div className="child h-[50px] w-[100px] absolute flex items-center justify-center gap-2 mt-[-270px] ml-[40px] lg:justify-start lg:ml-[-1163px] lg:mt-[350px] md:ml-[-340px] md:mt-[-200px]">
              <div
                onClick={() => handleClick("img3redcolor")}
                className={`child bg-red-700 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img3redcolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
              <div
                onClick={() => handleClick("img3")}
                className={`child bg-green-600 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img3" ? "border-4 p-2 border-white " : ""
                }`}
              ></div>
              <div
                onClick={() => handleClick("img3bluecolor")}
                className={`child bg-blue-400 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img3bluecolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
              <div
                onClick={() => handleClick("img3purplecolor")}
                className={`child bg-purple-500 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img3purplecolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
            </div>
          </div>
        );

      case "img3bluecolor":
        return (
          <div className="w-[450px] h-auto flex items-center justify-center">
            <img
              className="shoeone h-[130px] w-[260px] -rotate-0 ml-[-40px] mt-[-80px] opacity-80 hover:scale-110 transition-all duration-400 cursor-pointer overflow-hidden
                md:h-[130px]  md:w-[350px] md:ml-[300px] md:-rotate-12 md:mt-[-600px] md:mr-[-80px]
                lg:h-[230px]  lg:w-[480px] lg:ml-[-80px] lg:mt-[10px] lg:-rotate-45 "
              src={shoe3bluecolor}
              alt="M"
            />
            <div className="child h-[50px] w-[100px] absolute flex items-center justify-center gap-2 mt-[-270px] ml-[40px] lg:justify-start lg:ml-[-1163px] lg:mt-[350px] md:ml-[-340px] md:mt-[-200px]">
              <div
                onClick={() => handleClick("img3redcolor")}
                className={`child bg-red-700 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img3redcolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
              <div
                onClick={() => handleClick("img3")}
                className={`child bg-green-600 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img3" ? "border-4 p-2 border-white " : ""
                }`}
              ></div>
              <div
                onClick={() => handleClick("img3bluecolor")}
                className={`child bg-blue-400 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img3bluecolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
              <div
                onClick={() => handleClick("img3purplecolor")}
                className={`child bg-purple-500 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img3purplecolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
            </div>
          </div>
        );
      case "img3purplecolor":
        return (
          <div className="w-[450px] h-auto flex items-center justify-center">
            <img
              className="shoeone h-[130px] w-[260px] -rotate-0 ml-[-40px] mt-[-80px] opacity-80 hover:scale-110 transition-all duration-400 cursor-pointer overflow-hidden
                md:h-[130px]  md:w-[350px] md:ml-[300px] md:-rotate-12 md:mt-[-600px] md:mr-[-80px]
                lg:h-[230px]  lg:w-[480px] lg:ml-[-80px] lg:mt-[10px] lg:-rotate-45 "
              src={shoe3purplecolor}
              alt="M"
            />
            <div className="child h-[50px] w-[100px] absolute flex items-center justify-center gap-2 mt-[-270px] ml-[40px] lg:justify-start lg:ml-[-1163px] lg:mt-[350px] md:ml-[-340px] md:mt-[-200px]">
              <div
                onClick={() => handleClick("img3redcolor")}
                className={`child bg-red-700 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img3redcolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
              <div
                onClick={() => handleClick("img3")}
                className={`child bg-green-600 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img3" ? "border-4 p-2 border-white " : ""
                }`}
              ></div>
              <div
                onClick={() => handleClick("img3bluecolor")}
                className={`child bg-blue-400 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img3bluecolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
              <div
                onClick={() => handleClick("img3purplecolor")}
                className={`child bg-purple-500 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img3purplecolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
            </div>
          </div>
        );
      case "img2redcolor":
        return (
          <div className="w-[450px] h-auto flex items-center justify-center">
            <img
              className="shoeone h-[130px] w-[260px] -rotate-0 ml-[-40px] mt-[-80px] opacity-80 hover:scale-110 transition-all duration-400 cursor-pointer overflow-hidden
                md:h-[130px]  md:w-[350px] md:ml-[300px] md:-rotate-12 md:mt-[-600px] md:mr-[-80px]
                lg:h-[230px]  lg:w-[480px] lg:ml-[-80px] lg:mt-[10px] lg:-rotate-45 "
              src={shoe2redcolor}
              alt="M"
            />
            <div className="child h-[50px] w-[100px] absolute flex items-center justify-center gap-2 mt-[-270px] ml-[40px] lg:justify-start lg:ml-[-1163px] lg:mt-[350px] md:ml-[-340px] md:mt-[-200px]">
              <div
                onClick={() => handleClick("img2redcolor")}
                className={`child bg-red-700 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img2redcolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
              <div
                onClick={() => handleClick("img2yellowcolor")}
                className={`child bg-yellow-400 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img2yellowcolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
              <div
                onClick={() => handleClick("img2")}
                className={`child bg-green-600 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img2" ? "border-4 p-2 border-white " : ""
                }`}
              ></div>
              <div
                onClick={() => handleClick("img2purplecolor")}
                className={`child bg-purple-500 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img2purplecolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
            </div>
          </div>
        );
      case "img2yellowcolor":
        return (
          <div className="w-[450px] h-auto flex items-center justify-center">
            <img
              className="shoeone h-[130px] w-[260px] -rotate-0 ml-[-40px] mt-[-80px] opacity-80 hover:scale-110 transition-all duration-400 cursor-pointer overflow-hidden
                md:h-[130px]  md:w-[350px] md:ml-[300px] md:-rotate-12 md:mt-[-600px] md:mr-[-80px]
                lg:h-[230px]  lg:w-[480px] lg:ml-[-80px] lg:mt-[10px] lg:-rotate-45 "
              src={shoe2yellowcolor}
              alt="M"
            />
            <div className="child h-[50px] w-[100px] absolute flex items-center justify-center gap-2 mt-[-270px] ml-[40px] lg:justify-start lg:ml-[-1163px] lg:mt-[350px] md:ml-[-340px] md:mt-[-200px]">
              <div
                onClick={() => handleClick("img2redcolor")}
                className={`child bg-red-700 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img2redcolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
              <div
                onClick={() => handleClick("img2yellowcolor")}
                className={`child bg-yellow-400 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img2yellowcolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
              <div
                onClick={() => handleClick("img2")}
                className={`child bg-green-600 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img2" ? "border-4 p-2 border-white " : ""
                }`}
              ></div>
              <div
                onClick={() => handleClick("img2purplecolor")}
                className={`child bg-purple-500 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img2purplecolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
            </div>
          </div>
        );

      case "img2purplecolor":
        return (
          <div className="w-[450px] h-auto flex items-center justify-center">
            <img
              className="shoeone h-[130px] w-[260px] -rotate-0 ml-[-40px] mt-[-80px] opacity-80 hover:scale-110 transition-all duration-400 cursor-pointer overflow-hidden
                md:h-[130px]  md:w-[350px] md:ml-[300px] md:-rotate-12 md:mt-[-600px] md:mr-[-80px]
                lg:h-[230px]  lg:w-[480px] lg:ml-[-80px] lg:mt-[10px] lg:-rotate-45 "
              src={shoe2purplecolor}
              alt="M"
            />
            <div className="child h-[50px] w-[100px] absolute flex items-center justify-center gap-2 mt-[-270px] ml-[40px] lg:justify-start lg:ml-[-1163px] lg:mt-[350px] md:ml-[-340px] md:mt-[-200px]">
              <div
                onClick={() => handleClick("img2redcolor")}
                className={`child bg-red-700 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img2redcolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
              <div
                onClick={() => handleClick("img2yellowcolor")}
                className={`child bg-yellow-400 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img2yellowcolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
              <div
                onClick={() => handleClick("img2")}
                className={`child bg-green-600 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img2" ? "border-4 p-2 border-white " : ""
                }`}
              ></div>
              <div
                onClick={() => handleClick("img2purplecolor")}
                className={`child bg-purple-500 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img2purplecolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
            </div>
          </div>
        );
      case "img1bluecolor":
        return (
          <div className="w-[450px] h-auto flex items-center justify-center">
            <img
              className="shoeone h-[130px] w-[260px] -rotate-0 ml-[-40px] mt-[-80px] opacity-80 hover:scale-110 transition-all duration-400 cursor-pointer overflow-hidden
                md:h-[130px]  md:w-[350px] md:ml-[300px] md:-rotate-12 md:mt-[-600px] md:mr-[-80px]
                lg:h-[230px]  lg:w-[480px] lg:ml-[-80px] lg:mt-[10px] lg:-rotate-45 "
              src={shoe1bluecolor}
              alt="M"
            />
            <div className="child h-[50px] w-[100px] absolute flex items-center justify-center gap-2 mt-[-270px] ml-[40px] lg:justify-start lg:ml-[-1163px] lg:mt-[350px] md:ml-[-340px] md:mt-[-200px]">
              <div
                onClick={() => handleClick("img1")}
                className={`child bg-red-700 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img1" ? "border-4 p-2 border-white " : ""
                }`}
              >
                {" "}
              </div>
              <div
                onClick={() => handleClick("img1yellowcolor")}
                className={`child bg-yellow-400 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img1yellowcolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
              <div
                onClick={() => handleClick("img1bluecolor")}
                className={`child bg-blue-400 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img1bluecolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
              <div
                onClick={() => handleClick("img1purplecolor")}
                className={`child bg-purple-500 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img1purplecolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
            </div>
          </div>
        );
      case "img1yellowcolor":
        return (
          <div className="w-[450px] h-auto flex items-center justify-center">
            <img
              className="shoeone h-[130px] w-[260px] -rotate-0 ml-[-40px] mt-[-80px] opacity-80 hover:scale-110 transition-all duration-400 cursor-pointer overflow-hidden
                  md:h-[130px]  md:w-[350px] md:ml-[300px] md:-rotate-12 md:mt-[-600px] md:mr-[-80px]
                  lg:h-[230px]  lg:w-[480px] lg:ml-[-80px] lg:mt-[10px] lg:-rotate-45 "
              src={shoe1yellowcolor}
              alt="M"
            />
            <div className="child h-[50px] w-[100px] absolute flex items-center justify-center gap-2 mt-[-270px] ml-[40px] lg:justify-start lg:ml-[-1163px] lg:mt-[350px] md:ml-[-340px] md:mt-[-200px]">
              <div
                onClick={() => handleClick("img1")}
                className={`child bg-red-700 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img1" ? "border-4 p-2 border-white " : ""
                }`}
              >
                {" "}
              </div>
              <div
                onClick={() => handleClick("img1yellowcolor")}
                className={`child bg-yellow-400 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img1yellowcolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
              <div
                onClick={() => handleClick("img1bluecolor")}
                className={`child bg-blue-400 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img1bluecolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
              <div
                onClick={() => handleClick("img1purplecolor")}
                className={`child bg-purple-500 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img1purplecolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
            </div>
          </div>
        );
      case "img1purplecolor":
        return (
          <div className="w-[450px] h-auto flex items-center justify-center">
            <img
              className="shoeone h-[130px] w-[260px] -rotate-0 ml-[-40px] mt-[-80px] opacity-80 hover:scale-110 transition-all duration-400 cursor-pointer overflow-hidden
                    md:h-[130px]  md:w-[350px] md:ml-[300px] md:-rotate-12 md:mt-[-600px] md:mr-[-80px]
                    lg:h-[230px]  lg:w-[480px] lg:ml-[-80px] lg:mt-[10px] lg:-rotate-45 "
              src={shoe1purplecolor}
              alt="M"
            />
            <div className="child h-[50px] w-[100px] absolute flex items-center justify-center gap-2 mt-[-270px] ml-[40px] lg:justify-start lg:ml-[-1163px] lg:mt-[350px] md:ml-[-340px] md:mt-[-200px]">
              <div
                onClick={() => handleClick("img1")}
                className={`child bg-red-700 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img1" ? "border-4 p-2 border-white " : ""
                }`}
              >
                {" "}
              </div>
              <div
                onClick={() => handleClick("img1yellowcolor")}
                className={`child bg-yellow-400 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img1yellowcolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
              <div
                onClick={() => handleClick("img1bluecolor")}
                className={`child bg-blue-400 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img1bluecolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
              <div
                onClick={() => handleClick("img1purplecolor")}
                className={`child bg-purple-500 h-[15px] w-[15px] rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer ${
                  activeTab === "img1purplecolor"
                    ? "border-4 p-2 border-white "
                    : ""
                }`}
              ></div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };
  return (
    <div className="bg-black ">
      <div className="parent bg-black  flex items-center justify-center h-[2400px] mb-[-1600px] lg:mb-[-1900px] md:mb-[-1750px] w-[100%]">
        <div className="COM1 h-[1120px] w-screen mt-[-1700px] flex-col flex items-center justify-center gap-2 text-white lg:mt-[-1600px] lg:flex-row lg:gap-28  lg:h-[550px] lg:ml-[50px] md:mt-[-1600px] md:h-[1200px] ">
          <div className="SNEAK ml-[-10px] h-[550px] w-[350px]  flex flex-col items-center text-center pl-14 mt-[160px] lg:text-left lg:items-start lg:mt-[0px] lg:ml-[00px] md:ml-[-400px] md:mt-[170px]">
            <h1 className="text-3xl font-semibold italic  leading-[50px] mt-24 ">
              THE ULTIMATE <br />
              <span className="font-extrabold text-red-700 text-4xl">
                SNEAK
              </span>{" "}
              SHOE
              <br /> PARADISE
            </h1>
            <p>
              Nike markets its products under <br /> brand, as well as Nike
              Golf,
              <br /> as well as Nike Golf,
            </p>
            <br />
            <button className="pt-2 pr-6 pl-6 pb-2 rounded-lg bg-red-700 hover:bg-red-950 text-[14px] ">
              BUY NOW
            </button>
            <br />
            <h3>COLORS</h3>
          </div>

          {renderContent()}
          <div className="SMALL  h-[150px] w-[380px] flex flex-row items-center  gap-4 ml-2 md:w-[500px] md:h-[550px] md:gap-6 md:mt-[-300px] lg:flex-col lg:mt-[150px] lg:w-[380px] lg:h-[550px]">
            <div
              className={`child bg-gradient-to-r from-gray-800 h-[80px] w-[180px] rounded-xl overflow-hidden ${
                activeTab === "img1" ? "shadow-md shadow-red-700 border border-red-700 scale-[120%] transition-all duration-200 cursor-pointer" : ""
              } ${
                activeTab === "img1yellowcolor"
                  ? "shadow-md shadow-red-700 border border-red-700 scale-[120%]"
                  : ""
              } ${
                activeTab === "img1bluecolor" ? "shadow-md shadow-red-700 border border-red-700 scale-[120%] transition-all duration-200 cursor-pointer" : ""
              } ${
                activeTab === "img1purplecolor"
                  ? "shadow-md shadow-red-700 border border-red-700 scale-[120%] transition-all duration-200 cursor-pointer"
                  : ""
              }`}
            >
              <img
                onClick={() => handleClick("img1")}
                className=" h-[180px] w-[150px] mt-[-40px] ml-[20px] hover:scale-125 transition-all duration-200 cursor-pointer "
                src={shoe1}
                alt="M"
              />
            </div>
            <div
              className={`child bg-gradient-to-r from-gray-800 h-[80px] w-[180px] rounded-xl overflow-hidden ${
                activeTab === "img2" ?  "shadow-md shadow-red-700 border border-red-700 scale-[120%] transition-all duration-200 cursor-pointer" : ""
              } ${
                activeTab === "img2yellowcolor"
                  ?  "shadow-md shadow-red-700 border border-red-700 scale-[120%] transition-all duration-200 cursor-pointer"
                  : ""
              } ${
                activeTab === "img2bluecolor" ?  "shadow-md shadow-red-700 border border-red-700 scale-[120%] transition-all duration-200 cursor-pointer" : ""
              } ${
                activeTab === "img2purplecolor"
                  ?  "shadow-md shadow-red-700 border border-red-700 scale-[120%] transition-all duration-200 cursor-pointer"
                  : ""
              } ${
                activeTab === "img2redcolor" ?  "shadow-md shadow-red-700 border border-red-700 scale-[120%] transition-all duration-200 cursor-pointer" : ""
              }`}
            >
              <img
                onClick={() => handleClick("img2")}
                className="h-[180px] w-[150px] mt-[-40px] ml-[20px] hover:scale-125 transition-all duration-200 cursor-pointer"
                src={shoe2}
                alt="M"
              />
            </div>
            <div
              className={`child bg-gradient-to-r from-gray-800 h-[80px] w-[180px] rounded-xl overflow-hidden ${
                activeTab === "img3" ?  "shadow-md shadow-red-700 border border-red-700 scale-[120%] transition-all duration-200 cursor-pointer" : ""
              } ${
                activeTab === "img3yellowcolor"
                  ?  "shadow-md shadow-red-700 border border-red-700 scale-[120%] transition-all duration-200 cursor-pointer"
                  : ""
              } ${
                activeTab === "img3bluecolor" ?  "shadow-md shadow-red-700 border border-red-700 scale-[120%] transition-all duration-200 cursor-pointer" : ""
              } ${
                activeTab === "img3purplecolor"
                  ?  "shadow-md shadow-red-700 border border-red-700 scale-[120%] transition-all duration-200 cursor-pointer"
                  : ""
              } ${
                activeTab === "img3redcolor" ?  "shadow-md shadow-red-700 border border-red-700 scale-[120%] transition-all duration-200 cursor-pointer" : ""
              }`}
            >
              <img
                onClick={() => handleClick("img3")}
                className="h-[180px] w-[150px] mt-[-40px] ml-[20px] hover:scale-125 transition-all duration-200 cursor-pointer"
                src={shoe3}
                alt="M"
              />
            </div>
            <div
              className={`child bg-gradient-to-r from-gray-800 h-[80px] w-[180px] rounded-xl overflow-hidden ${
                activeTab === "img4" ?  "shadow-md shadow-red-700 border border-red-700 scale-[120%] transition-all duration-200 cursor-pointer" : ""
              } ${
                activeTab === "img4yellowcolor"
                  ?  "shadow-md shadow-red-700 border border-red-700 scale-[120%] transition-all duration-200 cursor-pointer"
                  : ""
              } ${
                activeTab === "img4bluecolor" ?  "shadow-md shadow-red-700 border border-red-700 scale-[120%] transition-all duration-200 cursor-pointer" : ""
              } ${
                activeTab === "img4purplecolor"
                  ?  "shadow-md shadow-red-700 border border-red-700 scale-[120%] transition-all duration-200 cursor-pointer"
                  : ""
              } ${
                activeTab === "img4redcolor" ?  "shadow-md shadow-red-700 border border-red-700 scale-[120%] transition-all duration-200 cursor-pointer" : ""
              }`}
            >
              <img
                onClick={() => handleClick("img4")}
                className="h-[180px] w-[150px] mt-[-40px] ml-[20px] hover:scale-125 transition-all duration-200 cursor-pointer"
                src={shoe4}
                alt="M"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="COM2  h-[780px] lg:h[780px] md:h-[900px] w-[100%] indent-14 mt-12 flex flex-col items-center justify-center gap-4  overflow-y-hidden">
        {" "}
        {/* Our Collection Section*/}
        <h1 className="text-3xl lg:text-5xl font-sans tracking-wide text-white font-bold text-center  ml-[-60px] md:ml-[-80px] lg:ml-[-0px] ">
          OUR COLLECTION
        </h1>
        <div className=" h-[800px] w-[80%] lg:h-[500px] md:h-[800px]  lg:grid grid-cols-2  gap-6 items-center grid grid-col-1 justify-center pl-[50px] md:grid-col-1  ">
          <div className="UPTO ml-[-70px] lg:ml-[40px] md:ml-[40px]  col-span-1 bg-[#272731] rounded-xl lg:h-[400px] lg:w-[550px] h-[260px] w-[360px] grid grid-flow-col md:h-[350px] md:w-[500px] ">
            <div className="lg:pt-[60px] pt-[30px] md:pt-[55px]  ">
              <p className="lg:text-2xl text-white font-semibold text-[18px] md:text-2xl ml-[30px]">
                <br />
                BLACK FRIDAY<span className="text-red-700"> SALES</span>
              </p>
              <h1 className=" lg:text-6xl text-white italic font-medium ml-[20px] text-3xl ">
                <span className="UPTO1 lg:text-[80px] font-extrabold text-[40px] text-transparent italic ml-[-50px]">
                  UPTO{" "}
                </span>
                <br />
                55% OFF
              </h1>
              <button className="pt-2 pr-6 pl-6 pb-2 rounded-lg bg-red-700 hover:bg-red-950 text-[14px] ml-[20px] mt-[20px] text-white ">
                SHOP NOW
              </button>
            </div>
            <img
              className=" lg:h-[170px] lg:w-[320px] md:h-[170px] md:w-[320px] lg:mt-[100px] lg:ml-[160px] md:mt-[70px] md:ml-[160px] h-[120px] w-[220px] ml-[130px] mt-[60px] -rotate-45 absolute "
              src={shoes5big}
              alt="M"
            />
          </div>
          <div className="lg:col-span-1 md:col-span-2 col-span-2 grid gap-6 lg:ml-[10px] ">
            <div className="DUNK  bg-[#272731] rounded-xl h-[180px] w-[360px] md:ml-[40px] md:w-[500px] ml-[-70px] lg:ml-[1px] lg:h-[200px] lg:w-[450px] text-white  pt-[30px] ">
              <h1 className="ml-[-30px] lg:text-2xl md:text-2xl text-1xl font-semibold">
                NIKE DUNK HIGH
              </h1>
              <p className="ml-[-30px] text-[14px] lg:text-[18px]">
                Iconic Silhouette, Timeless
                <br /> <span className="ml-[55px]">Style, Nike Dunk High.</span>
              </p>
              <button className="pt-2 pr-4 pl-4 pb-2 rounded-lg bg-red-700 hover:bg-red-950 text-[10px] ml-[20px] mt-[20px] text-white ">
                SHOP NOW
              </button>
              <img
                className="h-[200px] w-[200px] mt-[-180px] md:ml-[200px] lg:h-[300px] lg:w-[300px] lg:mt-[-230px] md:h-[300px] md:w-[300px] md:mt-[-230px] ml-[150px] lg:ml-[160px] opacity-[90%]"
                src={shoe6big}
                alt="M"
              />
            </div>
            <div className="grid grid-cols-2 ">
              <div className="DUNK overflow-hidden col-span-1 bg-[#272731] rounded-xl ml-[-70px] md:ml-[40px] lg:ml-[1px] h-[180px] w-[170px] lg:h-[180px] lg:w-[220px] md:h-[190px] md:w-[240px] text-white grid items-center justify-center ">
                <h1 className="ml-[-32px] text-2xl font-semibold mt-[10px]">
                  VAN SHOES
                </h1>
                <img
                  className="h-[70px] w-[170px] mt-[15px] "
                  src={shoe7}
                  alt="M"
                />
                <button className="pt-2 pr-4 pl-4 pb-2 w-[135%]  rounded-lg bg-red-700 hover:bg-red-950 text-[10px] ml-[-28px] mt-[20px] text-white ">
                  SHOP NOW
                </button>
              </div>
              <div className="DUNK col-span-1 bg-[#272731] lg:ml-[-45px] ml-[-34px] rounded-xl h-[180px] w-[180px]  lg:h-[180px] lg:w-[210px] md:h-[190px] md:w-[230px] md:ml-[-3px] overflow-hidden text-white grid items-center justify-center">
                <h1 className="ml-[-32px] text-2xl font-semibold mt-[10px]">
                  VAN SHOES
                </h1>
                <img
                  className="h-[70px] w-[170px] mt-[15px] "
                  src={shoe8}
                  alt="M"
                />
                <button className="pt-2 pr-4 pl-4 pb-2 w-[130%]  rounded-lg bg-red-700 hover:bg-red-950 text-[10px] ml-[-25px] mt-[20px] text-white ">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Home2 />
    </div>
  );
};

export default Home;
