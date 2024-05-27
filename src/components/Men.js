import React from "react";
import shoe9 from "../images/shoe9.png";
import shoe10 from "../images/shoe10.png";
import shoe11 from "../images/shoe11.png";
import shoe12 from "../images/shoe12.png";
import shoe18 from "../images/shoe18.png";
import shoe19 from "../images/shoe19.png";
import shoe20 from "../images/shoe20.png";
import shoe21 from "../images/shoe21.png";
import shoe22 from "../images/shoe22.png";
import shoe23 from "../images/shoe23.png";
import shoe24 from "../images/shoe24.png";
import shoe25 from "../images/shoe25.png";
import cart_white from "../images/cart_white.png";
import { Link } from "react-router-dom";
const Men = () => {
  return (
    <div className="bg-black h-[3800px] md:h-[1500px] lg:h-[1150px] lg:pt-[170px] md:pt-[100px] pt-[60px]">
      {" "}
      <h1 className="text-3xl lg:text-5xl font-sans tracking-wide text-white font-bold text-center mt-[40px] md:mt-[40px] lg:mt-[-80px] ">
        FOR MENS
      </h1>
      <div className="text-white  grid grid-auto-fit gap-4 gap-y-6 p-5  lg:pl-[210px] lg:pr-[230px] h-[1200px] md:h-[650px] lg:h-[350px] mt-[50px] ">
        <Link to="/menshoe1">
          {" "}
          <div className="DUNK overflow-hidden bg-[#272731] rounded-xl p-4 h-[280px] lg:h-[310px] md:h-[310px]">
            <h3>NIKE AIR</h3>
            <h3 className="text-[22px] font-semibold italic">
              Air Jordan XXXVIII Low PF
            </h3>
            <h3> ₹ 17 295.00</h3>
            <img
              className="h-[110px] w-[190px] lg:mt-[15px] mt-[0] lg:ml-[0] md:ml-[0] ml-[50px] -rotate-[25deg]"
              src={shoe9}
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
              AIR FORCE 1 AIR HIGH 07
            </h3>
            <h3>$50.00</h3>
            <img
              className="h-[110px] w-[190px] lg:mt-[15px] mt-[0] lg:ml-[0] md:ml-[0] ml-[50px] -rotate-[25deg]"
              src={shoe10}
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
            SNEAKERS SF AIR MAX FORCE 1
          </h3>
          <h3>$100.00</h3>
          <img
            className="h-[110px] w-[190px] lg:mt-[15px] mt-[0] lg:ml-[0] md:ml-[0] ml-[50px] -rotate-[25deg]"
            src={shoe11}
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
            AIR FORCE AIR JORDAN NIKE
          </h3>
          <h3>$150.00</h3>
          <img
            className="h-[110px] w-[190px] lg:mt-[15px] mt-[0] lg:ml-[0] md:ml-[0] ml-[50px] -rotate-[25deg]"
            src={shoe12}
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
            AIR FORCE AIR JORDAN NIKE
          </h3>
          <h3>$150.00</h3>
          <img
            className="h-[110px] w-[190px] lg:mt-[15px] mt-[0] lg:ml-[0] md:ml-[0] ml-[50px] -rotate-[25deg]"
            src={shoe18}
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
            AIR FORCE AIR JORDAN NIKE
          </h3>
          <h3>$150.00</h3>
          <img
            className="h-[110px] w-[190px] lg:mt-[15px] mt-[0] lg:ml-[0] md:ml-[0] ml-[50px] -rotate-[25deg]"
            src={shoe19}
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
            AIR FORCE AIR JORDAN NIKE
          </h3>
          <h3>$150.00</h3>
          <img
            className="h-[110px] w-[190px] lg:mt-[15px] mt-[0] lg:ml-[0] md:ml-[0] ml-[50px] -rotate-[25deg]"
            src={shoe20}
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
            AIR FORCE AIR JORDAN NIKE
          </h3>
          <h3>$150.00</h3>
          <img
            className="h-[110px] w-[190px] lg:mt-[15px] mt-[0] lg:ml-[0] md:ml-[0] ml-[50px] -rotate-[25deg]"
            src={shoe21}
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
            AIR FORCE AIR JORDAN NIKE
          </h3>
          <h3>$150.00</h3>
          <img
            className="h-[110px] w-[190px] lg:mt-[15px] mt-[0] lg:ml-[0] md:ml-[0] ml-[50px] -rotate-[25deg]"
            src={shoe22}
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
            AIR FORCE AIR JORDAN NIKE
          </h3>
          <h3>$150.00</h3>
          <img
            className="h-[110px] w-[190px] lg:mt-[15px] mt-[0] lg:ml-[0] md:ml-[0] ml-[50px] -rotate-[25deg]"
            src={shoe23}
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
            AIR FORCE AIR JORDAN NIKE
          </h3>
          <h3>$150.00</h3>
          <img
            className="h-[110px] w-[190px] lg:mt-[15px] mt-[0] lg:ml-[0] md:ml-[0] ml-[50px] -rotate-[25deg]"
            src={shoe24}
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
            AIR FORCE AIR JORDAN NIKE
          </h3>
          <h3>$150.00</h3>
          <img
            className="h-[110px] w-[190px] lg:mt-[15px] mt-[0] lg:ml-[0] md:ml-[0] ml-[50px] -rotate-[25deg]"
            src={shoe25}
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

export default Men;
