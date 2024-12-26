import React, { useState } from "react";
import tgreen1 from "../assets/tgreen1.png";
import tgreen2 from "../assets/tgreen2.png";
import tgreen3 from "../assets/tgreen3.png";
import UnderlineTabs from "./UnderlineTabs";
export default function ProductDetail() {
  const data = [
    { imgelink: tgreen1 },
    { imgelink: tgreen2 },
    { imgelink: tgreen3 },
  ];

  const [active, setActive] = useState(data[0].imgelink);
  const [selectedColor, setSelectedColor] = useState("green");
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (action) => {
    if (action === "increment") {
      setQuantity(quantity + 1);
    } else if (action === "decrement" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="px-10 lg:px-10 xl:px-20 mt-4">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        {/* left img section */}
        <div className="w-full md:w-1/2 md:px-3 pb-5">
          <div className="flex flex-wrap-reverse md:flex-row gap-4">

            <div className="flex flex-row xl:flex-col md:flex-row gap-4 items-start">
              {data.map(({ imgelink }, index) => (
                <img
                  key={index}
                  onClick={() => setActive(imgelink)}
                  src={imgelink}
                  alt="clothes images"
                  className={`object-cover rounded-3xl cursor-pointer border-2 ${active === imgelink ? "border-transparent" : "border-transparent"
                    } hover:border-gray-400 w-[110px] h-[100px] sm:w-[100px] sm:h-[100px] md:w-[150px] md:h-[120px] lg:w-[140px] lg:h-[140px]`}
                />
              ))}
            </div>
            {/* Main image */}
            <div>
              <img
                className="rounded-3xl mt-3 md:mt-0 w-screen max-h-[300px] md:max-w-[320px] md:max-h-[350px] lg:max-w-[420px] lg:max-h-[400px]
                 xl:max-w-[450px] xl:max-h-[480px]"
                src={active}
                alt="product"
              />

            </div>
          </div>
        </div>

        {/* Right detail Section rating stars */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold">ONE LIFE GRAPHIC T-SHIRT</h1>
          <div className="flex items-center space-x-2">
            <div className="flex flex-row">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-400">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-400">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-400">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-400">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-6 text-yellow-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>


            </div>
            <span className="text-gray-500">4.5/5</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold text-black">$260</span>
            <span className="text-lg line-through text-gray-500">$300</span>
            <span className="text-red-700 bg-red-200 rounded-full w-12 px-1 font-semibold">-40%</span>
          </div>
          <p className="text-gray-600">
            This graphic t-shirt is perfect for any occasion. Crafted from a soft
            and breathable fabric, it offers superior comfort and style.
          </p>
          <hr />

          {/* color buttons */}
          <div className="space-y-2">
            <h4 className="font-normal text-gray-500 md:text-xl">Select Color</h4>
            <div className="flex space-x-4 pt-1">
              <button
                className={`w-9 h-9 rounded-full border-2 flex items-center justify-center bg-gray-500`}
                onClick={() => setSelectedColor("gray")}
              >
                {selectedColor === "gray" && (
                  <span className="text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                  </svg>
                  </span>
                )}
              </button>

              <button
                className={`w-9 h-9 rounded-full border-2 flex items-center justify-center bg-blue-500`}
                onClick={() => setSelectedColor("blue")}
              >
                {selectedColor === "blue" && (
                  <span className="text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                  </svg></span>
                )}
              </button>

              <button
                className={`w-9 h-9 rounded-full border-2 flex items-center justify-center bg-green-900`}
                onClick={() => setSelectedColor("green")}
              >
                {selectedColor === "green" && (
                  <span className="text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                  </svg></span>
                )}
              </button>
            </div>

          </div>
          <hr />

          {/* size choice */}

          <div className="space-y-1">
            <h4 className="font-normal text-gray-500 pb-2 md:text-xl">Choose Size</h4>
            <div className="flex flex-row md:flex-row pb-3 gap-3">
              {["Small", "Medium", "Large", "X-Large"].map((size) => (
                <button
                  key={size}
                  className={`w-1/4 md:w-2/5 text-xs sm:text-sm md:text-lg font-normal py-2 md:py-1 px-5 rounded-full ${selectedSize === size
                    ? "bg-black text-white"
                    : "bg-gray-300 text-gray-600"
                    }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            <hr />
          </div>

          {/* increment decrement button */}

          <div className="flex flex-row w-full md:w-auto items-center space-x-4 pb-5">
            <div className="flex flex-row w-1/5  md:w-auto py-2 bg-gray-300 rounded-full">
              <button
                className="flex px-1 md:pl-5 md:pr-8 items-center justify-center "
                onClick={() => handleQuantityChange("decrement")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4 md:size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                </svg>

              </button>
              <span className="align-middle md:text-xl">{quantity}</span>
              <button
                className="flex px-1 md:px-2 md:pl-8 md:pr-5 items-center justify-center "
                onClick={() => handleQuantityChange("increment")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4 md:size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
            </div>

            {/* cart button */}

            <button className="w-full py-2 bg-black text-white rounded-full text-base  md:text-xl hover:bg-gray-800">
              Add to Cart
            </button>
          </div>

        </div>

      </div>
      <UnderlineTabs />

    </div>
  );
}
