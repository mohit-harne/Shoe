import React, { useState } from 'react';

const VerticalTabs = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (index) => {
    setActiveTab(activeTab === index ? null : index);
  };

  return (
    <div className="vertical-tabs  text-white">
      <div className="tabs">
        <div
          className={`tab ${activeTab === 0 ? 'active' : ''} hover:cursor-pointer font-semibold border-t-2 pt-6 pb-6 border-gray-600`}
          onClick={() => handleTabClick(0)}
        >
          Delivery & Returns <span className="arrow ml-[225px]">{activeTab === 0 ? '▲' : '▼'}</span>
        </div>
      </div>
      <div className="tab-content ">
        {activeTab === 0 && <div>All purchases are subject to delivery fees. <br/>

            • Standard delivery 4–9 business days <br/>
Orders are processed and delivered Monday–Friday (excluding public holidays)


Nike Members enjoy free returns.</div>}
      </div>

      <div className="tabs">
        <div
          className={`tab ${activeTab === 1 ? 'active' : ''} hover:cursor-pointer font-semibold border-t-2 pt-6 pb-6 border-gray-600`}
          onClick={() => handleTabClick(1)}
        >
          Reviews (0)<span className='ml-[175px]'>✰ ✰ ✰ ✰ ✰</span> <span className="arrow ml-[20px]">{activeTab === 1 ? ' ▲' : '▼'}</span>
        </div>
      </div>
      <div className="tab-content">
        {activeTab === 1 && <div>✰ ✰ ✰ ✰ ✰ 0 Stars<br/> <br/>Have your say. Be the first to review the Air<br/> Jordan XXXVIII Low PF.
        <br/><br/>
        <button className="pt-2 pr-6  pb-2 font-semibold text-white underline hover:text-gray-600 text-[14px] ">
              Write a Review
            </button>
        </div>}
      </div>

      <div className="tabs">
        <div
          className={`tab ${activeTab === 2 ? 'active' : ''} hover:cursor-pointer font-semibold border-t-2 border-b-2 pt-6 pb-6 border-gray-600`}
          onClick={() => handleTabClick(2)}
        >
          Product Information <span className="arrow ml-[214px]">{activeTab === 2 ? '▲' : '▼'}</span>
        </div>
      </div>
      <div className="tab-content text-white">
        {activeTab === 2 && <div><br/>Declaration of Importer: Direct import by the <br/> individual customer <br/> <br/>

Marketed by: Nike Global Trading B.V. Singapore <br/> Branch, 30 Pasir Panjang Road, #10-31/32, <br/> Mapletree Business City, Singapore 117 440 <br/><br/>
    <span className='font-semibold'>Net Quantity: 1 Pair</span><br/><br/><br/></div>}
      </div><br/><br/><br/><br/>
    </div>
  );
};

export default VerticalTabs;
