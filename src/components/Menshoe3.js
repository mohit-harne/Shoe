import React from "react";
import { useState } from "react";
import menshoe3a from "../images/menshoe3a.png";
import menshoe3b from "../images/menshoe3b.png";
import menshoe3c from "../images/menshoe3c.png";
import menshoe3d from "../images/menshoe3d.jpeg";
import menshoe3e from "../images/menshoe3e.png";
import menshoe3f from "../images/menshoe3f.png";
import menshoe3g from "../images/menshoe3g.png";
import menshoe3h from "../images/menshoe3h.png";
import customer from "../images/customer.png";
import star from "../images/star.png";
import star_blank from "../images/star_blank.png";
import VerticalTabs from "./VerticalTabs";
import Slider from "./Slider";
import FeedbackForm from "./FeedbackForm";
import "../App.css";
import ProgressBar from "./ProgressBar";
const Menshoe3 = () => {
  const [activeTab, setActiveTab] = useState("img1");
  const handleClick = (tab) => {
    setActiveTab(tab);
  };
  const renderContent = () => {
    switch (activeTab) {
      case "img1":
        return (
          <div className=" h-[580px] w-[280px] mt-[-500px]  md:h-[569px] md:w-[435px] md:mt-[-500px] md:ml-[100px]   lg:mt-0 lg:w-[535px] lg:h-[669px] lg:ml-[-250px]  ">
            <img className="rounded-md" src={menshoe3a} alt="M" />
          </div>
        );

      case "img2":
        return (
          <div className=" h-[580px] w-[280px] mt-[-500px]  md:h-[569px] md:w-[435px] md:mt-[-500px] md:ml-[100px]   lg:mt-0 lg:w-[535px] lg:h-[669px] lg:ml-[-250px]  ">
            <img className="rounded-md" src={menshoe3b} alt="M" />
          </div>
        );

      case "img3":
        return (
          <div className=" h-[580px] w-[280px] mt-[-500px]  md:h-[569px] md:w-[435px] md:mt-[-500px] md:ml-[100px]   lg:mt-0 lg:w-[535px] lg:h-[669px] lg:ml-[-250px]  ">
            <img className="rounded-md" src={menshoe3c} alt="M" />
          </div>
        );

      case "img4":
        return (
          <div className=" h-[580px] w-[280px] mt-[-500px]  md:h-[569px] md:w-[435px] md:mt-[-500px] md:ml-[100px]   lg:mt-0 lg:w-[535px] lg:h-[669px] lg:ml-[-250px]  ">
            <img className="rounded-md" src={menshoe3d} alt="M" />
          </div>
        );

      case "img5":
        return (
          <div className=" h-[580px] w-[280px] mt-[-500px]  md:h-[569px] md:w-[435px] md:mt-[-500px] md:ml-[100px]   lg:mt-0 lg:w-[535px] lg:h-[669px] lg:ml-[-250px]  ">
            <img className="rounded-md" src={menshoe3e} alt="M" />
          </div>
        );

      case "img6":
        return (
          <div className=" h-[580px] w-[280px] mt-[-500px]  md:h-[569px] md:w-[435px] md:mt-[-500px] md:ml-[100px]   lg:mt-0 lg:w-[535px] lg:h-[669px] lg:ml-[-250px]  ">
            <img className="rounded-md" src={menshoe3f} alt="M" />
          </div>
        );

      case "img7":
        return (
          <div className=" h-[580px] w-[280px] mt-[-500px]  md:h-[569px] md:w-[435px] md:mt-[-500px] md:ml-[100px]   lg:mt-0 lg:w-[535px] lg:h-[669px] lg:ml-[-250px]  ">
            <img className="rounded-md" src={menshoe3g} alt="M" />
          </div>
        );

      case "img8":
        return (
          <div className=" h-[580px] w-[280px] mt-[-500px]  md:h-[569px] md:w-[435px] md:mt-[-500px] md:ml-[100px]   lg:mt-0 lg:w-[535px] lg:h-[669px] lg:ml-[-250px]  ">
            <img className="rounded-md" src={menshoe3h} alt="M" />
          </div>
        );

      default:
        return null;
    }
  };
  return (
    <div className="bg-black lg:h-[2080px] md:h-[3245px] h-[3320px]  items-center justify-center pt-[200px]">
      <div className="grid lg:grid-cols-3  m-[100px]  h-[700px]  mt-[-100px] ">
        <div className="SMALL  grid  lg:grid-flow-row  w-[100px] ml-[-100px] lg:ml-[100px] p-4 h-[570px] mt-[-15px]">
          <div className="child bg-white h-[60px] w-[60px]  rounded-md overflow-hidden ">
            <img
              onMouseEnter={() => handleClick("img1")}
              className="mt-[-10px] hover:cursor-pointer"
              src={menshoe3a}
              alt="M"
            />
          </div>

          <div className="child bg-white h-[60px] w-[60px]  rounded-md overflow-hidden ">
            <img
              onMouseEnter={() => handleClick("img2")}
              className="mt-[-10px] hover:cursor-pointer"
              src={menshoe3b}
              alt="M"
            />
          </div>

          <div className="child bg-white h-[60px] w-[60px]  rounded-md overflow-hidden ">
            <img
              onMouseEnter={() => handleClick("img3")}
              className="mt-[-10px] hover:cursor-pointer"
              src={menshoe3c}
              alt="M"
            />
          </div>

          <div className="child bg-white h-[60px] w-[60px]  rounded-md overflow-hidden ">
            <img
              onMouseEnter={() => handleClick("img4")}
              className="mt-[-10px] hover:cursor-pointer"
              src={menshoe3d}
              alt="M"
            />
          </div>

          <div className="child bg-white h-[60px] w-[60px]  rounded-md overflow-hidden ">
            <img
              onMouseEnter={() => handleClick("img5")}
              className="mt-[-10px] hover:cursor-pointer"
              src={menshoe3e}
              alt="M"
            />
          </div>

          <div className="child bg-white h-[60px] w-[60px]  rounded-md overflow-hidden ">
            <img
              onMouseEnter={() => handleClick("img6")}
              className="mt-[-10px] hover:cursor-pointer"
              src={menshoe3f}
              alt="M"
            />
          </div>

          <div className="child bg-white h-[60px] w-[60px]  rounded-md overflow-hidden ">
            <img
              onMouseEnter={() => handleClick("img7")}
              className="mt-[-10px] hover:cursor-pointer"
              src={menshoe3g}
              alt="M"
            />
          </div>

          <div className="child bg-white h-[60px] w-[60px]  rounded-md overflow-hidden ">
            <img
              onMouseEnter={() => handleClick("img8")}
              className="mt-[-10px] hover:cursor-pointer"
              src={menshoe3h}
              alt="M"
            />
          </div>
        </div>
        {renderContent()}
        <div className="  ml-[-80px] w-[410px] h-[670px] pt-4 pl-2 pr-2 overflow-y-scroll hide-scrollbar scroll-smooth ">
          <h1 className="text-white text-3xl">Air Jordan XXXVIII Low PF</h1>
          <p className="text-[21px] text-white">Basketball Shoes</p>
          <br />
          <p className="text-[21px] text-white">MRP : ₹ 17 295.00</p>
          <p className="whitespace-pre-line text-gray-600">
            incl. of taxes <br />
            (Also includes all applicable duties)
          </p>
          <br />
          <div className=" h-[100px] grid grid-cols-3 w-[210px] pt-[15px] pl-2 ">
            <div className="child bg-white h-[60px] w-[60px]  rounded-md overflow-hidden hover:border-red-700 hover:border-2">
              <img
                className="mt-[-10px] hover:cursor-pointer "
                src={menshoe3a}
                alt="M"
              />
            </div>

            <div className="child bg-white h-[60px] w-[60px]  rounded-md overflow-hidden hover:border-red-700 hover:border-2 ">
              <img
                className="mt-[-10px] hover:cursor-pointer"
                src={menshoe3a}
                alt="M"
              />
            </div>

            <div className="child bg-white h-[60px] w-[60px]  rounded-md overflow-hidden hover:border-red-700 hover:border-2">
              <img
                className="mt-[-10px] hover:cursor-pointer"
                src={menshoe3a}
                alt="M"
              />
            </div>
          </div>
          <br />
          <div className=" h-[480px] p-1">
            <h1 className="text-white">
              Select Size{" "}
              <span className="ml-[220px] text-gray-500 font-bold hover:cursor-pointer">
                Size Guide
              </span>
            </h1>
            <br />

            <div className="grid gap-y-4 grid-cols-3">
              <button className="text-white pt-4 pr-2 pl-2 pb-4 w-[120px]  rounded-md border-gray-500 border-2  hover:border-red-700 text-[14px] ">
                UK 4
              </button>

              <button className="text-white pt-4 pr-2 pl-2 pb-4 w-[120px]  rounded-md border-gray-500 border-2  hover:border-red-700 text-[14px] ">
                UK 4.5
              </button>

              <button className="text-white pt-4 pr-2 pl-2 pb-4 w-[120px]  rounded-md border-gray-500 border-2  hover:border-red-700 text-[14px] ">
                UK 5
              </button>

              <button className="text-white pt-4 pr-2 pl-2 pb-4 w-[120px]  rounded-md border-gray-500 border-2  hover:border-red-700 text-[14px] ">
                UK 5.5
              </button>

              <button className="text-white pt-4 pr-2 pl-2 pb-4 w-[120px]  rounded-md border-gray-500 border-2  hover:border-red-700 text-[14px] ">
                UK 6 (EU 39)
              </button>

              <button className="text-white pt-4 pr-2 pl-2 pb-4 w-[120px]  rounded-md border-gray-500 border-2  hover:border-red-700 text-[14px] ">
                UK 6 (EU 40)
              </button>

              <button className="text-white pt-4 pr-2 pl-2 pb-4 w-[120px]  rounded-md border-gray-500 border-2  hover:border-red-700 text-[14px] ">
                UK 6.5
              </button>

              <button className="text-white pt-4 pr-2 pl-2 pb-4 w-[120px]  rounded-md border-gray-500 border-2  hover:border-red-700 text-[14px] ">
                UK 7
              </button>

              <button className="text-white pt-4 pr-2 pl-2 pb-4 w-[120px]  rounded-md border-gray-500 border-2  hover:border-red-700 text-[14px] ">
                UK 7.5
              </button>

              <button className="text-white pt-4 pr-2 pl-2 pb-4 w-[120px]  rounded-md border-gray-500 border-2  hover:border-red-700 text-[14px] ">
                UK 8
              </button>

              <button className="text-white pt-4 pr-2 pl-2 pb-4 w-[120px]  rounded-md border-gray-500 border-2  hover:border-red-700 text-[14px] ">
                UK 8.5
              </button>

              <button className="text-white pt-4 pr-2 pl-2 pb-4 w-[120px]  rounded-md border-gray-500 border-2  hover:border-red-700 text-[14px] ">
                UK 9
              </button>

              <button className="text-white pt-4 pr-2 pl-2 pb-4 w-[120px]  rounded-md border-gray-500 border-2  hover:border-red-700 text-[14px] ">
                UK 9.5
              </button>

              <button className="text-white pt-4 pr-2 pl-2 pb-4 w-[120px]  rounded-md border-gray-500 border-2  hover:border-red-700 text-[14px] ">
                UK 10
              </button>

              <button className="text-white pt-4 pr-2 pl-2 pb-4 w-[120px]  rounded-md border-gray-500 border-2  hover:border-red-700 text-[14px] ">
                UK 10.5
              </button>

              <button className="text-white pt-4 pr-2 pl-2 pb-4 w-[120px]  rounded-md border-gray-500 border-2  hover:border-red-700 text-[14px] ">
                UK 11
              </button>

              <button className="text-white pt-4 pr-2 pl-2 pb-4 w-[120px]  rounded-md border-gray-500 border-2  hover:border-red-700 text-[14px] ">
                UK 12
              </button>
            </div>
          </div>
          <br />
          <button className="text-black font-semibold pt-5 pr-2 pl-2 pb-5 w-[395px] bg-white rounded-full  hover:bg-gray-600 text-[14px] ">
            Add to Bag
          </button>
          <br />
          <br />
          <button className="text-white font-semibold pt-5 pr-2 pl-2 pb-5 w-[395px] border-2 border-gray-600 rounded-full  hover:border-red-700 text-[14px] ">
            Favorate ♡
          </button>
          <br />
          <br />
          <h1 className="text-gray-500 pl-10 pr-10 text-justify ">
            This product is excluded from site promotions and discounts.
          </h1>
          <br />
          <br />
          <p className="text-white">
            Get grounded, stay grounded. The AJ XXXVIII is all about
            groundwork—we're talking about your running, your cutting, your
            turn-around jumpers—with low-to-the-court cushioning and a secure
            upper that helps support every move. It's also designed with
            sustainability in mind, with at least 20% recycled content by
            weight. So you can hit 'em with that windscreen-wiper fake and feel
            good about more than just sinking a bucket for your team.
          </p>
          <br />
          <br />
          <h1 className="text-white">
            • Colour Shown: Black/Anthracite/Gamma Blue/Particle &nbsp; Grey
          </h1>
          <br />
          <h1 className="text-white">• Style: FD2325-004</h1>
          <br />
          <button className="pt-2 pr-6 pl-2 pb-2 font-semibold text-white underline hover:text-gray-600 text-[14px] ">
            View Product Details
          </button>
          <br /> <br /> <VerticalTabs />
        </div>
      </div>
      <h1 className="text-white text-3xl font-serif p-6 pl-20 lg:mt-[-80px] mt-[600px]">
        You Might Also Like
      </h1>
      <Slider />
      <br />
      <br /> <div class="border-t-2 border-gray-400 w-[95%] ml-8"></div>
      <br />
      <br />
      <div className="flex flex-col lg:flex-row gap-4 ">
        <div className="text-white p-4 pl-10  lg:w-[30%] ">
          <h1 className="text-2xl font-bold">Customer reviews</h1>
          <div className="star flex gap-2 items-center">
            <img className="h-6 w-6" src={star} alt="M" />
            <img className="h-6 w-6" src={star} alt="M" />
            <img className="h-6 w-6" src={star} alt="M" />
            <img className="h-6 w-6" src={star} alt="M" />
            <img className="h-6 w-6 invert " src={star_blank} alt="M" />
            <h1 className="text-[18px]">4.1 out of 5</h1>
          </div>
          <h1 className="text-gray-400">143 global ratings</h1>
          <br />
          <div className="flex flex-col gap-4">
            <div className="flex  gap-2 items-center hover:cursor-pointer ">
              5 Star <ProgressBar completion={50} /> 50%
            </div>
            <div className="flex  gap-2 items-center hover:cursor-pointer">
              4 Star <ProgressBar completion={30} /> 30%
            </div>
            <div className="flex  gap-2 items-center hover:cursor-pointer">
              3 Star <ProgressBar completion={9} /> 9%
            </div>
            <div className="flex  gap-2 items-center hover:cursor-pointer">
              2 Star <ProgressBar completion={2} /> 2%
            </div>
            <div className="flex  gap-2 items-center hover:cursor-pointer">
              1 Star <ProgressBar completion={10} /> 10%
            </div>
          </div>
          <br />
          <button className="pt-2 pr-6  pb-2 hover:underline text-white ">
            ▼ How are ratings calculated?
          </button>
          <br />
          <br /> <div class="border-t-2 border-gray-400 w-[80%] "></div>
          <br />
          <h1 className="text-2xl font-bold">Review this product</h1>
          <h1 className="text-[16px]">
            Share your thoughts with other customers
          </h1>{" "}
          <br />
          <button className="pt-2 pr-20 pl-20 pb-2 border-2  border-white rounded-xl hover:border-red-700 text-white ">
            Write a product review
          </button>
          <br />
          <br /> <div class="border-t-2 border-gray-400 w-[80%] "></div>
          <br />
          <br />
        </div>
        {/* right side content */}
        <div className="text-white w-[95%] lg:w-[50%] h-[750px] leading-8  overflow-y-scroll hide-scrollbar scroll-smooth ">
          {/* customerssaydiv   */}
          <div className=" p-4 ">
            <h1 className="text-[18px] font-semibold">Customers say</h1>
            <br />
            <h1>
              Customers like the comfort, appearance, quality and weight of the
              shoes. For example, they mention it's very comfortable, good
              looking, serves its purpose well and is good value for money. That
              said, some appreciate the light weight.
            </h1>
            <h1 className="text-gray-500 text-[14px]">
              AI-generated from the text of customer reviews
            </h1>
            <br />
            <div className="flex gap-4 ml-[-40px] scale-90">
              <button className="p-2 pl-4 pr-4 bg-green-500  rounded-lg shadow-md shadow-gray-400 font-semibold">
                <span className="bg-green-700 rounded-[50%] pt-[1px] pb-[1px] pl-1 pr-1 text-white  ">
                  &#x2713;
                </span>
                &nbsp;Comfort
              </button>
              <button className="p-2 pl-4 pr-4 bg-green-500 rounded-lg shadow-md shadow-gray-400 font-semibold">
                <span className="bg-green-700 rounded-[50%] pt-[1px] pb-[1px] pl-1 pr-1 text-white  ">
                  &#x2713;
                </span>
                &nbsp;Appearance
              </button>
              <button className="p-2 pl-4 pr-4 bg-green-500 rounded-lg shadow-md shadow-gray-400 font-semibold">
                <span className="bg-green-700 rounded-[50%] pt-[1px] pb-[1px] pl-1 pr-1 text-white  ">
                  &#x2713;
                </span>
                &nbsp;Quality
              </button>
              <button className="p-2 pl-4 pr-4 bg-green-500 rounded-lg shadow-md shadow-gray-400 font-semibold">
                <span className="bg-green-700 rounded-[50%] pt-[1px] pb-[1px] pl-1 pr-1 text-white  ">
                  &#x2713;
                </span>
                &nbsp;Value
              </button>
              <button className="p-2 pl-4 pr-4 bg-green-500 rounded-lg shadow-md shadow-gray-400 font-semibold">
                <span className="bg-green-700 rounded-[50%] pt-[1px] pb-[1px] pl-1 pr-1 text-white  ">
                  &#x2713;
                </span>
                &nbsp;Weight
              </button>
            </div>
            <br />
            {/* reviewimgdiv */}
            <div className="flex gap-80 items-center ">
              <h1 className="text-2xl font-bold">Reviews with images</h1>
              <button className="pt-2 hover:underline">
                See all photos &rarr;
              </button>
            </div>
            <br />
            {/* photos */}
            <div className=" flex gap-2">
              <img className="h-40 w-40 rounded-md" src={menshoe3b} alt="M" />
              <img className="h-40 w-40 rounded-md" src={menshoe3c} alt="M" />
              <img className="h-40 w-40 rounded-md" src={menshoe3d} alt="M" />
              <img className="h-40 w-40 rounded-md" src={menshoe3e} alt="M" />
            </div>
            <br />
            <br /> <div class="border-t-2 border-gray-400 w-[95%] "></div>
            <br />
          </div>
          <h1 className="text-2xl font-bold text-white ml-4">
            Top reviews from India
          </h1>
          <br />
          <div className="pl-4">
            <div className="p-2 flex items-center gap-2 ">
              {" "}
              {/*user div*/}
              <img
                className="h-10 w-10 bg-gray-500 rounded-full p-1"
                src={customer}
                alt="M"
              />
              <h1>sreevidya</h1>
            </div>
            <div className="star  flex gap-2 items-center">
              <img className="h-4 w-4" src={star} alt="M" />
              <img className="h-4 w-4" src={star} alt="M" />
              <img className="h-4 w-4" src={star} alt="M" />
              <img className="h-4 w-4" src={star} alt="M" />
              <img className="h-4 w-4" src={star} alt="M" />
              <h1 className="font-semibold">
                {" "}
                Very much comfortable and bouncy
              </h1>
            </div>
            <h1 className="text-gray-500 text-[15px]">
              Reviewed in India on 28 February 2024
            </h1>
            <h1>
              <span className="text-gray-500">
                Size: 7 UKColour: BLACK/BRIGHT CRIMSON-OBSIDIAN-{" "}
              </span>
              <span className="text-gray-700">|</span>{" "}
              <span className="text-[15px] font-semibold text-red-700">
                Verified Purchase
              </span>
              <br />
              Bouncy... beautiful. But slightly less grip
            </h1>
            <br />
            <div>
              <button className="p-1 pl-6 pr-6 border-2 border-gray-400 rounded-lg hover:border-red-700 shadow-md shadow-gray-600">
                Helpful
              </button>
              <span className="text-gray-500"> &nbsp;&nbsp;|</span>
              <button className="p-1 pl-6 pr-6 ">Report</button>
            </div>
            <br />
            <div>
              <div className="p-2 flex items-center gap-2 ">
                {" "}
                {/*user div*/}
                <img
                  className="h-10 w-10 bg-gray-500 rounded-full p-1"
                  src={customer}
                  alt="M"
                />
                <h1>Kushang Desai</h1>
              </div>
              <div className="star  flex gap-2 items-center">
                <img className="h-4 w-4" src={star} alt="M" />
                <img className="h-4 w-4" src={star} alt="M" />
                <img className="h-4 w-4" src={star} alt="M" />
                <img className="h-4 w-4" src={star} alt="M" />
                <img className="h-4 w-4 invert" src={star_blank} alt="M" />
                <h1 className="font-semibold">
                  {" "}
                  Expected Quality and Condition
                </h1>
              </div>
              <h1 className="text-gray-500 text-[15px]">
                Reviewed in India on 7 September 2023
              </h1>
              <h1>
                <span className="text-gray-500">
                  Size: 9 UKColour: BLACK/BLACK-BLACK-ANTHRACITE{" "}
                </span>
                <span className="text-gray-700">|</span>{" "}
                <span className="text-[15px] font-semibold text-red-700">
                  Verified Purchase
                </span>
                <br />I like the product overall, however only time will tell if
                it as durable as the older versions of this shoe which I have
                used extensively and found to be good value for money. Possibly
                the best shoe for average runners for the best price.
              </h1>
              <br />
              <div>
                <button className="p-1 pl-6 pr-6 border-2 border-gray-400 rounded-lg hover:border-red-700 shadow-md shadow-gray-600">
                  Helpful
                </button>
                <span className="text-gray-500"> &nbsp;&nbsp;|</span>
                <button className="p-1 pl-6 pr-6 ">Report</button>
              </div>
            </div>
            <br />
            <div>
              <div className="p-2 flex items-center gap-2 ">
                {" "}
                {/*user div*/}
                <img
                  className="h-10 w-10 bg-gray-500 rounded-full p-1"
                  src={customer}
                  alt="M"
                />
                <h1>shaurav singh</h1>
              </div>
              <div className="star  flex gap-2 items-center">
                <img className="h-4 w-4" src={star} alt="M" />
                <img className="h-4 w-4" src={star} alt="M" />
                <img className="h-4 w-4 invert" src={star_blank} alt="M" />
                <img className="h-4 w-4 invert" src={star_blank} alt="M" />
                <img className="h-4 w-4 invert" src={star_blank} alt="M" />
                <h1 className="font-semibold"> Nike Winflow</h1>
              </div>
              <h1 className="text-gray-500 text-[15px]">
                Reviewed in India on 23 January 2024
              </h1>
              <h1>
                <span className="text-gray-500">
                  Size: 9 UKColour: WHITE/BLACK-VOLT-LASER ORANGE{" "}
                </span>
                <span className="text-gray-700">|</span>{" "}
                <span className="text-[15px] font-semibold text-red-700">
                  Verified Purchase
                </span>
                <br />
                Awesome colour and Pattern. Very comfortable to boot too. Using
                it for daily running
              </h1>
              <br />
              <div>
                <button className="p-1 pl-6 pr-6 border-2 border-gray-400 rounded-lg hover:border-red-700 shadow-md shadow-gray-600">
                  Helpful
                </button>
                <span className="text-gray-500"> &nbsp;&nbsp;|</span>
                <button className="p-1 pl-6 pr-6 ">Report</button>
              </div>
            </div>
          </div>
          <div>
            <FeedbackForm />
            <br />
            <br />
          </div>
          {/* End of right side content */}
        </div>
      </div>
    </div>
  );
};

export default Menshoe3;
