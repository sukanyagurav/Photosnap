import React from "react";
import { plansData } from "../utilis/constants";

const Plans = () => {
  return (
    <section className="my-20 max-w-[1200px] mx-auto p-4">
      <div></div>
      <div className="flex flex-col lg:flex-row justify-between gap-8 items-center  ">
        {plansData.map((plan) => (
          <div
            className={`relative shadow-2xl w-full lg:w-[400px] p-12  ${
              plan.title == "Pro" ? "!bg-black  !mt-0 lg:!h-[480px] after:w-full after:h-2 after:absolute  after:bg-borderImage after:top-0 md:after:w-2 md:after:h-full lg:after:w-full lg:after:h-2 " : ''
            } bg-[#F5F5F5] lg:h-[400px] text-center md:text-left lg:text-center mt-9 grid md:grid-cols-[repeat(2,300px)]  md:grid-rows-[repeat(3,75px)]  md:justify-between lg:grid-cols-[repeat(1,1fr)] lg:grid-rows-[40px_minmax(50px,_100px)_50px_50px_50px] lg:place-content-center	 lg:items-center  `}
            key={plan.title}
          >
            <h2
              className={`${
                plan.title == "Pro" ? "!text-white" : ''
              } text-black font-bold text-2xl  `}
            >
              {plan.title}
            </h2>
            <p
              className={`${
                plan.title == "Pro" ? "!text-gray-400" :''
              } text-gray-500  md:mb-4 md:col-start-1 md:col-end-2 lg:col-auto lg:row-auto   `}
            >
              {plan.description}
            </p>
            <p
              className={`${
                plan.title == "Pro" ? "!text-white" : ''
              } text-black my-8 md:my-0  lg:my-2 font-bold text-4xl tracking-[0.1em] md:ml-auto  md:col-start-2  md:row-start-1 md:row-end-2 lg:col-auto lg:row-auto  lg:ml-0 `}
            >
              ${plan.monthly.toFixed(2)}
            </p>
            <span
              className={`${
                plan.title == "Pro" && "!text-gray-400"
              }  text-gray-600 mb-2 block md:col-start-2 md:col-end-3  md:row-start-2 md:row-end-4 md:ml-auto lg:col-auto lg:row-auto lg:ml-0 `}
            >
              per {}
            </span>
            <button
              className={`border-2  transition-all duration-300  uppercase text-sm font-bold tracking-[0.1em]   mt-7 w-full p-4 py-2.5  md:col-start-1 md:col-end-2 md:row-start-3 md:row-end-4 lg:col-auto lg:row-auto  ${
                plan.title == "Pro" ? "bg-white text-black hover:border-white hover:bg-transparent hover:text-white" :"hover:border-black bg-black text-white hover:bg-white hover:text-black"
              } `}
            >
              Pick Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plans;
