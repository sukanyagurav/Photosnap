import React from "react";
import { features2 } from "../utilis/constants";

const Compare = () => {
  return (
    <section className="my-9 max-w-[800px] mx-auto">
      <h2 className="text-3xl mb-9 text-center font-bold tracking-[0.1em]">
        COMPARE
      </h2>
      <div className="hidden md:block mb-[9rem]">
        <div className="flex justify-between border-b-[0.5px] border-black px-8">
          <span className="block font-bold uppercase tracking-wider text-sm mb-4 w-[300px]">
            The Features
          </span>
          <span className="block font-bold uppercase tracking-wider text-sm mb-4 w-[100px] text-center">
            Basic
          </span>
          <span className="block font-bold uppercase tracking-wider text-sm mb-4 w-[100px] text-center">
            Pro
          </span>
          <span className="block font-bold uppercase tracking-wider text-sm mb-4 w-[100px] text-center">
            Business
          </span>
        </div>
        <ul>
          {features2.map((feature) => (
            <li
              key={feature.name}
              className="p-7 border-b-[0.5px] px-8 border-gray-300  flex text-sm justify-between items-center"
            >
              <span className="w-[300px] font-semibold uppercase ">
                {feature.name}
              </span>
              <span className="w-[100px]  text-center">
                {feature.basic && <span className="fa-solid text-xl fa-check"></span>}
              </span>
              <span className="w-[100px] text-center">
                {feature.pro && <span className="fa-solid text-xl  fa-check"></span>}
              </span>
              <span className="w-[100px] text-center">
                {feature.business && <span className="fa-solid text-xl  fa-check"></span>}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="block px-6 mb-[9rem] md:hidden max-w-[450px] mx-auto">
        <h4 className="border-b-[0.5px] font-bold text-md tracking-wider py-4 border-black uppercase px-2  ">
          The Features
        </h4>
        <ul>
          {features2.map((feature) => (
            <li key={feature.name} className="p-4 border-b-[0.5px] border-gray-300 px-2   ">
              <h6 className="font-bold uppercase tracking-[0.14em] text-[0.8rem] ">
                {feature.name}
              </h6>
              <div className="flex gap-8">
                <span className="uppercase text-[0.7rem] mt-3 flex flex-col gap-1  w-20  text-gray-400 tracking-wider font-semibold">
                  Basic
                  {feature.basic && <span className="fa-solid text-lg  text-black fa-check block"></span>}
                </span>
                <span className="uppercase text-[0.7rem] mt-3 flex flex-col gap-1  w-20 text-gray-400  tracking-wider font-semibold">
                  pro {feature.pro && <span className="fa-solid text-lg  text-black block fa-check"></span>}
                </span>
                <span className="uppercase w-20 text-gray-400 text-[0.7rem] mt-3 flex flex-col gap-1   tracking-wider  font-semibold">
                  Business{" "}
                  {feature.business && <span className="fa-solid text-black fa-check block text-lg "></span>}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Compare;
