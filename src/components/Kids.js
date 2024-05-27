import React from "react";
import kidshoe1 from '../images/kidshoe1.png'
import kidshoe2 from '../images/kidshoe2.png'
import kidshoe3 from '../images/kidshoe3.png'
import kidshoe4 from '../images/kidshoe4.png'
import kidshoe5 from '../images/kidshoe5.png'
import kidshoe6 from '../images/kidshoe6.png'
import kidshoe7 from '../images/kidshoe7.png'
import kidshoe8 from '../images/kidshoe8.png'
import kidshoe9 from '../images/kidshoe9.png'
import kidshoe10 from '../images/kidshoe10.png'
import kidshoe11 from '../images/kidshoe11.png'
import kidshoe12 from '../images/kidshoe12.png'
import cart_white from "../images/cart_white.png";
import { Link } from "react-router-dom";
const Kids = () => {
  return (
    <div className="bg-black h-[3800px] md:h-[1500px] lg:h-[1150px] lg:pt-[170px] md:pt-[100px] pt-[60px]">
      {" "}
      <h1 className="text-3xl lg:text-5xl font-sans tracking-wide text-white font-bold text-center mt-[40px] md:mt-[40px] lg:mt-[-80px] ">
        FOR KIDS
      </h1>
      <div className="text-white  grid grid-auto-fit gap-4 gap-y-6 p-5  lg:pl-[210px] lg:pr-[230px] h-[1200px] md:h-[650px] lg:h-[350px] mt-[50px] ">
        <Link to="/kidshoe1">
          {" "}
          <div className="DUNK overflow-hidden bg-[#272731] rounded-xl p-4 h-[280px] lg:h-[310px] md:h-[310px]">
            <h3>NIKE AIR</h3>
            <h3 className="text-[22px] font-semibold italic">
              Nike Dynamo 2 EasyOn
            </h3>
            <h3> ₹ 17 295</h3>
            <img
              className="h-[110px] w-[190px] lg:mt-[15px] mt-[0] lg:ml-[0] md:ml-[0] ml-[50px] -rotate-[25deg]"
              src={kidshoe1}
              alt="M"
            />
            <button className="pt-2 pr-4 pl-4 pb-8 w-[40%] rounded-2xl bg-red-700 hover:bg-red-950 text-[10px] ml-[280px] mt-[-5px] lg:ml-[185px] lg:mt-[5px] md:ml-[185px] md:mt-[18px]">
              <img
                src={cart_white}
                className="h-[25px] w-[25px] mt-[3px] "
                alt="M"
              />
            </button>
          </div>
        </Link>

        <Link to="/menshoe2">
          <div className="DUNK overflow-hidden bg-[#272731] rounded-xl p-4 h-[280px] lg:h-[310px] md:h-[310px]">
            <h3>NIKE AIR</h3>
            <h3 className="text-[22px] font-semibold italic">
              Nike Blazer<br/> Low '77
            </h3>
            <h3>₹ 1200</h3>
            <img
              className="h-[110px] w-[190px] lg:mt-[15px] mt-[0] lg:ml-[0] md:ml-[0] ml-[50px] -rotate-[25deg]"
              src={kidshoe2}
              alt="M"
            />
            <button className="pt-2 pr-4 pl-4 pb-8 w-[40%] rounded-2xl bg-red-700 hover:bg-red-950 text-[10px] ml-[280px] mt-[-5px] lg:ml-[185px] lg:mt-[5px] md:ml-[185px] md:mt-[18px]">
              <img
                src={cart_white}
                className="h-[25px] w-[25px] mt-[3px] "
                alt="M"
              />
            </button>
          </div>
        </Link>
        <Link to="/menshoe3">
        <div className="DUNK overflow-hidden bg-[#272731] rounded-xl p-4 h-[280px] lg:h-[310px] md:h-[310px]">
          <h3>NIKE AIR</h3>
          <h3 className="text-[22px] font-semibold italic">
            Jordan Flare <br/> Air
          </h3>
          <h3>₹ 3200</h3>
          <img
            className="h-[110px] w-[190px] lg:mt-[15px] mt-[0] lg:ml-[0] md:ml-[0] ml-[50px] -rotate-[25deg]"
            src={kidshoe3}
            alt="M"
          />
          <button className="pt-2 pr-4 pl-4 pb-8 w-[40%] rounded-2xl bg-red-700 hover:bg-red-950 text-[10px] ml-[280px] mt-[-5px] lg:ml-[185px] lg:mt-[5px] md:ml-[185px] md:mt-[18px]">
            <img
              src={cart_white}
              className="h-[25px] w-[25px] mt-[3px] "
              alt="M"
            />
          </button>
        </div>
        </Link>
        <div className="DUNK overflow-hidden  bg-[#272731] rounded-xl p-4 h-[280px] lg:h-[310px] md:h-[310px]">
          <h3>NIKE AIR</h3>
          <h3 className="text-[22px] font-semibold italic">
            Nike Air<br/> Max 270
          </h3>
          <h3>₹ 2000</h3>
          <img
            className="h-[110px] w-[190px] lg:mt-[15px] mt-[0] lg:ml-[0] md:ml-[0] ml-[50px] -rotate-[25deg]"
            src={kidshoe4}
            alt="M"
          />
          <button className="pt-2 pr-4 pl-4 pb-8 w-[40%] rounded-2xl bg-red-700 hover:bg-red-950 text-[10px] ml-[280px] mt-[-5px] lg:ml-[185px] lg:mt-[5px] md:ml-[185px] md:mt-[18px]">
            <img
              src={cart_white}
              className="h-[25px] w-[25px] mt-[3px] "
              alt="M"
            />
          </button>
        </div>

        <div className="DUNK overflow-hidden  bg-[#272731] rounded-xl p-4 h-[280px] lg:h-[310px] md:h-[310px]">
          <h3>NIKE AIR</h3>
          <h3 className="text-[22px] font-semibold italic">
            Jordan 1<br/> Low Alt
          </h3>
          <h3>₹ 12 000</h3>
          <img
            className="h-[110px] w-[190px] lg:mt-[15px] mt-[0] lg:ml-[0] md:ml-[0] ml-[50px] -rotate-[25deg]"
            src={kidshoe5}
            alt="M"
          />
          <button className="pt-2 pr-4 pl-4 pb-8 w-[40%] rounded-2xl bg-red-700 hover:bg-red-950 text-[10px] ml-[280px] mt-[-5px] lg:ml-[185px] lg:mt-[5px] md:ml-[185px] md:mt-[18px]">
            <img
              src={cart_white}
              className="h-[25px] w-[25px] mt-[3px] "
              alt="M"
            />
          </button>
        </div>

        <div className="DUNK overflow-hidden  bg-[#272731] rounded-xl p-4 h-[280px] lg:h-[310px] md:h-[310px]">
          <h3>NIKE AIR</h3>
          <h3 className="text-[22px] font-semibold italic">
            Nike Force 1 Low EasyOn
          </h3>
          <h3>₹ 4800</h3>
          <img
            className="h-[110px] w-[190px] lg:mt-[15px] mt-[0] lg:ml-[0] md:ml-[0] ml-[50px] -rotate-[25deg]"
            src={kidshoe6}
            alt="M"
          />
          <button className="pt-2 pr-4 pl-4 pb-8 w-[40%] rounded-2xl bg-red-700 hover:bg-red-950 text-[10px] ml-[280px] mt-[-5px] lg:ml-[185px] lg:mt-[5px] md:ml-[185px] md:mt-[18px]">
            <img
              src={cart_white}
              className="h-[25px] w-[25px] mt-[3px] "
              alt="M"
            />
          </button>
        </div>

        <div className="DUNK overflow-hidden  bg-[#272731] rounded-xl p-4 h-[280px] lg:h-[310px] md:h-[310px]">
          <h3>NIKE AIR</h3>
          <h3 className="text-[22px] font-semibold italic">
            Jordan<br/> 23/7
          </h3>
          <h3>₹ 2200</h3>
          <img
            className="h-[110px] w-[190px] lg:mt-[15px] mt-[0] lg:ml-[0] md:ml-[0] ml-[50px] -rotate-[25deg]"
            src={kidshoe7}
            alt="M"
          />
          <button className="pt-2 pr-4 pl-4 pb-8 w-[40%] rounded-2xl bg-red-700 hover:bg-red-950 text-[10px] ml-[280px] mt-[-5px] lg:ml-[185px] lg:mt-[5px] md:ml-[185px] md:mt-[18px]">
            <img
              src={cart_white}
              className="h-[25px] w-[25px] mt-[3px] "
              alt="M"
            />
          </button>
        </div>

        <div className="DUNK overflow-hidden  bg-[#272731] rounded-xl p-4 h-[280px] lg:h-[310px] md:h-[310px]">
          <h3>NIKE AIR</h3>
          <h3 className="text-[22px] font-semibold italic">
            Nike SB Cheack Canvas
          </h3>
          <h3>₹ 5600</h3>
          <img
            className="h-[110px] w-[190px] lg:mt-[15px] mt-[0] lg:ml-[0] md:ml-[0] ml-[50px] -rotate-[25deg]"
            src={kidshoe8}
            alt="M"
          />
          <button className="pt-2 pr-4 pl-4 pb-8 w-[40%] rounded-2xl bg-red-700 hover:bg-red-950 text-[10px] ml-[280px] mt-[-5px] lg:ml-[185px] lg:mt-[5px] md:ml-[185px] md:mt-[18px]">
            <img
              src={cart_white}
              className="h-[25px] w-[25px] mt-[3px] "
              alt="M"
            />
          </button>
        </div>

        <div className="DUNK overflow-hidden  bg-[#272731] rounded-xl p-4 h-[280px] lg:h-[310px] md:h-[310px]">
          <h3>NIKE AIR</h3>
          <h3 className="text-[22px] font-semibold italic">
            Nike Flex <br/>Plus 2
          </h3>
          <h3>₹ 7400</h3>
          <img
            className="h-[110px] w-[190px] lg:mt-[15px] mt-[0] lg:ml-[0] md:ml-[0] ml-[50px] -rotate-[25deg]"
            src={kidshoe9}
            alt="M"
          />
          <button className="pt-2 pr-4 pl-4 pb-8 w-[40%] rounded-2xl bg-red-700 hover:bg-red-950 text-[10px] ml-[280px] mt-[-5px] lg:ml-[185px] lg:mt-[5px] md:ml-[185px] md:mt-[18px]">
            <img
              src={cart_white}
              className="h-[25px] w-[25px] mt-[3px] "
              alt="M"
            />
          </button>
        </div>

        <div className="DUNK overflow-hidden  bg-[#272731] rounded-xl p-4 h-[280px] lg:h-[310px] md:h-[310px]">
          <h3>NIKE AIR</h3>
          <h3 className="text-[22px] font-semibold italic">
            Nike Air<br/> Max Excee
          </h3>
          <h3>₹ 3300</h3>
          <img
            className="h-[110px] w-[190px] lg:mt-[15px] mt-[0] lg:ml-[0] md:ml-[0] ml-[50px] -rotate-[25deg]"
            src={kidshoe10}
            alt="M"
          />
          <button className="pt-2 pr-4 pl-4 pb-8 w-[40%] rounded-2xl bg-red-700 hover:bg-red-950 text-[10px] ml-[280px] mt-[-5px] lg:ml-[185px] lg:mt-[5px] md:ml-[185px] md:mt-[18px]">
            <img
              src={cart_white}
              className="h-[25px] w-[25px] mt-[3px] "
              alt="M"
            />
          </button>
        </div>

        <div className="DUNK overflow-hidden  bg-[#272731] rounded-xl p-4 h-[280px] lg:h-[310px] md:h-[310px]">
          <h3>NIKE AIR</h3>
          <h3 className="text-[22px] font-semibold italic">
            Nike Air<br/> Max SYSTM
          </h3>
          <h3>₹ 1800</h3>
          <img
            className="h-[110px] w-[190px] lg:mt-[15px] mt-[0] lg:ml-[0] md:ml-[0] ml-[50px] -rotate-[25deg]"
            src={kidshoe11}
            alt="M"
          />
          <button className="pt-2 pr-4 pl-4 pb-8 w-[40%] rounded-2xl bg-red-700 hover:bg-red-950 text-[10px] ml-[280px] mt-[-5px] lg:ml-[185px] lg:mt-[5px] md:ml-[185px] md:mt-[18px]">
            <img
              src={cart_white}
              className="h-[25px] w-[25px] mt-[3px] "
              alt="M"
            />
          </button>
        </div>

        <div className="DUNK overflow-hidden  bg-[#272731] rounded-xl p-4 h-[280px] lg:h-[310px] md:h-[310px]">
          <h3>NIKE AIR</h3>
          <h3 className="text-[22px] font-semibold italic">
            Nike Air <br/>Max 90 LTR
          </h3>
          <h3>₹ 900</h3>
          <img
            className="h-[110px] w-[190px] lg:mt-[15px] mt-[0] lg:ml-[0] md:ml-[0] ml-[50px] -rotate-[25deg]"
            src={kidshoe12}
            alt="M"
          />
          <button className="pt-2 pr-4 pl-4 pb-8 w-[40%] rounded-2xl bg-red-700 hover:bg-red-950 text-[10px] ml-[280px] mt-[-5px] lg:ml-[185px] lg:mt-[5px] md:ml-[185px] md:mt-[18px]">
            <img
              src={cart_white}
              className="h-[25px] w-[25px] mt-[3px] "
              alt="M"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Kids;
