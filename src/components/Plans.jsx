import React from "react";
import { plansData } from "../utilis/constants";
import ReactSwitch from "react-switch";

const Plans = () => {
  const [type, setType] = React.useState('monthly');
  const toggleMonth = ()=>{
    setType((curr)=>(curr === 'monthly' ? 'yearly' : 'monthly'))
  }
  return (
    <section className="my-20 max-w-[1200px] mx-auto p-4 flex flex-col items-center w-full">
      <div className="flex gap-2 items-center my-8">
        <span className={`${type === 'yearly' ? 'text-black' : 'text-[#949494]'} font-bold text-xl`}>Monthly</span>
        <ReactSwitch onChange={toggleMonth} width="60" className="bg-gray-100 w-[60px]" checked = {type ==='monthly'} checkedIcon={false} onColor="#000" offColor="#DFDFDF"  onHandleColor="#fff" offHandleColor="#000"   uncheckedIcon={false} height={30} handleDiameter={20} />
        <span  className={`${type === 'monthly' ? 'text-black' : 'text-[#949494]'} font-bold text-xl`}>Yearly</span>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-8 items-center  ">
        {plansData.map((plan) => (
          <div
            className={`relative shadow-2xl w-full lg:flex-[33.33%] p-12  ${
              plan.title == "Pro"
                ? "!bg-black  !mt-0 lg:!h-[480px] after:w-full after:h-2 after:absolute  after:bg-borderImage after:top-0 md:after:w-2 md:after:h-full lg:after:w-full lg:after:h-2 "
                : ""
            } bg-[#F5F5F5] lg:h-[400px] text-center md:text-left lg:text-center mt-9 grid md:grid-cols-[repeat(2,300px)]  md:grid-rows-[repeat(3,75px)]  md:justify-between lg:grid-cols-[repeat(1,1fr)] lg:grid-rows-[40px_minmax(50px,_100px)_50px_50px_50px] lg:place-content-center	 lg:items-center  `}
            key={plan.title}
          >
            <h2
              className={`${
                plan.title == "Pro" ? "!text-white" : ""
              } text-black font-bold text-2xl  `}
            >
              {plan.title}
            </h2>
            <p
              className={`${
                plan.title == "Pro" ? "!text-gray-400" : ""
              } text-gray-500  md:mb-4 md:col-start-1 md:col-end-2 lg:col-auto lg:row-auto   `}
            >
              {plan.description}
            </p>
            <p
              className={`${
                plan.title == "Pro" ? "!text-white" : ""
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
                plan.title == "Pro"
                  ? "bg-white text-black hover:border-white hover:bg-transparent hover:text-white"
                  : "hover:border-black bg-black text-white hover:bg-white hover:text-black"
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
