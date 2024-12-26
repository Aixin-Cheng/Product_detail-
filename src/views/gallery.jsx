import React from "react";

import casual from '../assets/Casual.png';
import formal from '../assets/Formal.png';
import party from '../assets/Party.png';
import gym from '../assets/Gym.png';

const Gallary = () => {
  return (
    <div className="bg-gray-200 p-6 rounded-3xl">
      <h1 className="text-center font-bold text-2xl md:text-4xl py-5">BROWSE BY DRESS STYLE</h1>

      <div className="grid h-auto p-0 md:p-10 rounded-lg gap-3 grid-cols-1 grid-rows-2 md:grid-cols-5 md:grid-rows-2">

        <div className="rounded-3xl px-0 md:px-6 row-span-1 md:col-span-2 md:row-span-1 bg-cover bg-center h-[150px] md:h-[200px] lg:h-[250px] 
             " style={{ backgroundImage: `url(${casual})` }}>
          <div className="text-xl md:text-3xl font-bold p-4">
            <h1>Casual</h1>
          </div>
        </div>

        <div className="rounded-3xl px-0 md:px-6 row-span-1 md:col-span-3 md:row-span-1 bg-cover bg-center h-[150px] md:h-[200px] lg:h-[250px] 
" style={{ backgroundImage: `url(${formal})` }}>
          <div className="text-xl md:text-3xl font-bold p-4">
            <h1>Formal</h1>
          </div>
        </div>

        <div className="rounded-3xl px-0 md:px-6 row-span-1 md:col-span-3 md:row-span-1 bg-cover bg-center h-[150px] md:h-[200px] lg:h-[250px] 
" style={{ backgroundImage: `url(${party})` }}>
          <div className="text-xl md:text-3xl font-bold p-4">
            <h1>Party</h1>
          </div>
        </div>

        <div className="rounded-3xl px-0 md:px-6 row-span-1 md:col-span-2 md:row-span-1 bg-cover bg-center h-[150px] md:h-[200px] lg:h-[250px] " style={{ backgroundImage: `url(${gym})` }}>
          <div className="text-xl md:text-3xl font-bold p-4">
            <h1>Gym</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallary;
