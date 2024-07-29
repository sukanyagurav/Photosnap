import React from "react";
import PageLink from "../components/Link";
import Grid from "../components/Grid";

const StoriesPage = () => {
  return (
    <>
      <div className=" flex flex-col md:flex-row items-center w-full  relative md:h-[85vh]">
        <div className=" md:absolute md:top-0 bg-cover bg-center w-full md:left-0 md:bottom-0 md:right-0 bg-smStories md:bg-mdStories lg:bg-lgStories  bg-no-repeat sm:h-[500px] md:h-auto  "></div>
        <div className=" w-full p-10 px-5 bg-black flex md:max-w-[430px] md:bg-transparent flex-col  md:left-20 md:top-20 md:absolute z-3">
          <h6 className="text-gray-300 font-bold uppercase text-sm tracking-[.1em] my-2 ">Last month's featured story</h6>
          <h2 className="text-4xl font-bold uppercase text-white tracking-[.1em]  leading-[1.3em]">Hazy full moon of Appalachia</h2>
          <span className="text-gray-300 block mt-2 text-sm">March 2nd 2020 by <span className="text-white">John Appleseed</span></span>
          <p className="text-gray-400 mt-6 leading-[1.7em]">
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called "mountains," especially in eastern
            Kentucky and West Virginia, and while the ridges are not high, the
            terrain is extremely rugged.
          </p>
          <PageLink
            headingColor="text-white"
            href="/stories"
            imageFilterClass={"light"}
            linkText={"Read the story"}
            type="dark"
          />
        </div>
      </div>
      <Grid columns={16}/>
    </>
  );
};

export default StoriesPage;
