import React, { useState } from "react";

const VerticalTabs2 = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (index) => {
    setActiveTab(activeTab === index ? null : index);
  };

  return (
    <div className="vertical-tabs   text-white">
      <div className="tabs ">
        <div
          className={`tab ${
            activeTab === 0 ? "active" : ""
          } hover:cursor-pointer font-bold  pt-6 pb-6  `}
          onClick={() => handleTabClick(0)}
        >
          Do you have a Promo Code?
          <span className="arrow ml-[155px]">
            {activeTab === 0 ? "▲" : "▼"}
          </span>
        </div>
      </div>
      <div className="tab-content ">
        {activeTab === 0 && (
          <div className="flex gap-4 justify-center">
            <input
              className="h-10 w-60 mr-[0px] rounded-lg bg-transparent border-2"
              type="text"
              placeholder=""
            />
            <button className="border-2 p-1 pl-6 pr-6 rounded-full border-gray-500 bg-transparent text-white hover:border-red-700">
              Apply
            </button>
          </div>
        )}{" "}
        <br />
      </div>
      <h1 className="font-semibold">
        Subtotal <span className="ml-[256px]">$160.00</span>
      </h1>{" "}
      <br />
      <h1 className="font-semibold">
        Estimated Shipping & Handling <span className="ml-[106px]">$7.00</span>
      </h1>{" "}
      <br />
      <h1 className="font-semibold">
        Estimated Tax <span className="ml-[253px]">--</span>
      </h1>{" "}
      <br />
      <div className="border-t border-gray-300 my-6 "></div>
      <h1 className="font-semibold">
        Total <span className="ml-[283px]">$167.00</span>
      </h1>
      <div className="border-t border-gray-300 my-6 "></div>
    </div>
  );
};

export default VerticalTabs2;
