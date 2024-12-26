import React, { useState } from "react";
import ReviewCard from './ReviewCard';
const UnderlineTabs = () => {
  const [activeTab, setActiveTab] = useState("details");

  const tab = [
    {
      label: "Product Details",
      value: "details",
      content: (
        <div>
          <h1 className="text-2xl font-bold">One Life Graphic Tshirt</h1>
          <p className="leading-relaxed"> Step into effortless style with our Classic Green T-Shirt. Crafted from 100% premium cotton, this t-shirt offers unmatched comfort and breathability, making it perfect for daily wear. The rich green hue adds a fresh pop of color to your wardrobe, easily pairing with jeans, shorts, or joggers for a versatile look. Whether you're heading out for a casual day or just relaxing at home, this tee provides the perfect blend of style and comfort.</p>
        </div>
      ),

    },
    {
      label: "Rating & Reviews",
      value: "reviews",
      content: (
        <div>
          <div className="flex flex-row justify-between pb-5">
            <div className="flex flex-row items-center">
              <h2 className="font-bold text-lg">All Reviews</h2>
              <p className="text-xs text-gray-500 ml-2">{"(451)"}</p>
            </div>

            <div className="items-end">
              <button className="w-full py-2 px-4 bg-black text-white rounded-full md:text-md hover:bg-gray-800">Write a Review</button>
            </div>

          </div>
          <ReviewCard
            name="John Doe"
            rating={4}
            review="Because it's about motivating the doers. Because I'm here to follow my dreams and inspire other people to follow their dreams, too."
            date="August 29, 2024"
          />
        </div>
      ),
    },
    {
      label: "FAQs",
      value: "faqs",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-around border-b border-gray-200">
        {tab.map((tab, index) => (
          <button
            key={index}
            className={`w-full rounded-none border-b bg-transparent py-2 ${activeTab === tab.value
              ? "text-black border-b-2 border-black"
              : "text-gray-500 hover:text-black"
              }`}
            onClick={() => setActiveTab(tab.value)}
          >
            {tab.label}
            {activeTab === tab.value && (
              <span className="absolute bottom-0 left-0 w-full h-1 rounded-t-md"></span>
            )}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {tab.map((tab, index) => (
          activeTab === tab.value && (
            <div key={index}>
              {tab.content}
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default UnderlineTabs;
