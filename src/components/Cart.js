import React from "react";
import VerticalTabs2 from "./VerticalTabs2";
import Slider from "./Slider";
import "../App.css";
import heart from "../images/heart.png";
import bin from "../images/bin.png";
import menshoe1a from "../images/menshoe1a.png";

const Cart = () => {
  return (
    <div className="bg-black lg:h-[1380px] md:h-[3245px] h-[3320px]  items-center justify-center pt-[200px]">
      <div className="grid lg:grid-cols-2  m-[200px]  h-[700px]  mt-[-100px] ">
        <div className="text-white  w-[700px]">
          <div className="border-2 border-gray-600 p-4">
            <h1 className="text-[20px] text-red-700 font-bold">
              Members get free shipping on orders $50+
            </h1>
            <h1 className="text-[18px] text-gray-400">
              Become a Nike Member for fast free shipping on orders $50+{" "}
              <span className="font-semibold underline hover:cursor-pointer">
                Join us
              </span>{" "}
              or{" "}
              <span className="font-semibold underline hover:cursor-pointer">
                Sign-in
              </span>
            </h1>
          </div>{" "}
          <br />
          <div className="bg-gray-500 p-4">
            <h1 className="text-[14px] font-semibold ">
              Spring Sale: Up to 50% Off{" "}
              <span className="ml-[480px] mt-2 absolute text-[18px] font-bold ">
                X
              </span>
            </h1>
            <h1 className="text-[13px] ">Use code SPRING. Select Styles.</h1>
          </div>{" "}
          <br />
          <h1 className="text-3xl">Bag</h1> <br />
          <div className="flex  gap-4">
            {" "}
            {/*img & h1 div*/}
            <img className="h-[164px] w-[164px]" src={menshoe1a} alt="M" />
            <div>
              {" "}
              {/*h1 div*/}
              <h1 className="font-semibold text-[18px]">
                Nike Air Max Dn <span className="ml-[300px]">$160.00</span>
              </h1>
              <h1 className="text-gray-400 text-[18px] font-semibold">
                Men's Shoes
              </h1>
              <h1 className="text-gray-400 text-[18px] font-semibold">
                Black/Cool Grey/Pure Platinum/White
              </h1>
              <h1 className="text-gray-400 text-[18px] font-semibold">
                Size 11 &nbsp; ▼ &nbsp; &nbsp; Quantity 1 &nbsp; ▼
              </h1>{" "}
              <br />
              <div className="flex gap-6">
                <img className="h-6 w-6 invert" src={heart} alt="M" />
                <img className="h-6 w-6 invert" src={bin} alt="M" />
              </div>
            </div>
          </div>{" "}
          <br />
          <h1 className="font-semibold text-[18px]">Shipping</h1>
          <h1 className=" text-[17px]">
            Arrives by Thu, Apr 11{" "}
            <span className="underline font-medium">Edit Location</span>
          </h1>{" "}
          <br />
          <h1 className="font-semibold text-[18px]">Free Pickup</h1>
          <h1 className=" text-[17px] underline font-medium">Find a Store</h1>
          <div className="border-t border-gray-300 my-6 "></div>
          <h1 className="text-2xl font-medium">Favorites</h1>
          <h1 className="text-[18px]">
            Want to view your favorites?{" "}
            <span className="text-gray-400 underline">Join us</span> or{" "}
            <span className="text-gray-400 underline">Sign-in</span>
          </h1>
        </div>

        <div className="  ml-[200px] w-[410px] h-[670px] pt-4 pl-2 pr-2 ">
          <h1 className="text-white text-3xl">Summary</h1>

          <VerticalTabs2 />
          <button className="text-white  font-semibold pt-5 pr-2 pl-2 pb-5 w-[395px] border-2 border-gray-600 rounded-full  hover:border-red-700 text-[16px] ">
            Checkout
          </button>
          <br />
          <br />
          <button className="text-black italic  font-extrabold  pt-5 pr-2 pl-2 pb-5 w-[395px] bg-white rounded-full  hover:bg-transparent hover:border-red-700 border-2 text-[16px] ">
            <span className="text-blue-800">Pay</span>
            <span className="text-blue-500">Pal</span>
          </button>
        </div>
      </div>
      <h1 className="text-white text-3xl font-serif p-6 pl-20 lg:mt-[-80px] mt-[600px]">
        You Might Also Like
      </h1>

      <Slider />
      <br />
      <br />
    </div>
  );
};

export default Cart;
