import React from "react";
import PageLink from "./Link";
import stories from "../utilis/stories";
import { useLocation } from "react-router-dom";
const Grid = ({ column=stories.length }) => {
  const {pathname} = useLocation()
  console.log(pathname)
  return (
    <section className="flex flex-wrap">
      {stories.slice(0,column).map((story) => (
        <article key={story.title} className="sm:w-[100%] md:w-[50%] lg:w-[25%] relative h-[450px]">
          <a href="/stories" className="story">
            <picture>
              <source
                media="(min-width:800px)"
                srcSet={story.imageSource.desktop}
              />
              <img
                src={story.imageSource.mobile}
                className="w-full h-full object-cover object-center"
                alt={story.title}
              />
            </picture>
            <div className="absolute top-0 bottom-0 w-full h-full bg-[rgba(0,0,0,0.39)]"></div>
            <div className="absolute bottom-0 w-full text-white p-4 px-8">
              {pathname == '/stories' && <span className="pb-3 text-sm block ">{story.date}</span>}
              <h2 className="font-bold text-xl">{story.name}</h2>
              <span className="pb-4 text-sm block border-b-[0.5px] border-b-gray-400">
                by {story.captured_by}
              </span>

              <PageLink
                headingColor="text-white"
                space_between="justify-between"
                href="/stories"
                imageFilterClass={"light"}
                linkText={"Read story"}
              />
            </div>
          </a>
        </article>
      ))}
    </section>
  );
};

export default Grid;
