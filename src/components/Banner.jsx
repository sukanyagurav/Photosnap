import React from "react";

import PageLink from "./Link";
const Banner = ({
  image,
  heading,
  description,
  bgColor,
  headingColor,
  descriptionColor,
  imageFilterClass,
  linkText,revereseRow,
 order2 ,type,linearGradient
}) => {

  return (
    <div className={`md:h-[80vh] ${revereseRow} relative`}>
      <picture className={`md:basis-[40%] lg:basis-[55%] md:${order2 == 2 && 'order-2' }`}>
        <source media="(min-width:900px)" srcSet={image.desktop} />
        <source media="(min-width:800px)" srcSet={image.tablet} />
        <img src={image.mobile} className="w-full h-full object-cover object-center" />
      </picture>
      <div
        className={`md:basis-[60%] lg:basis-[45%] ${bgColor}  p-[2rem] py-[2rem] flex flex-col justify-center  items-center relative  `}
      >
        <div className={`max-w-[400px] w-full ${linearGradient && 
        ' after:absolute after:h-[8px] after:bg-gradient-to-br from-[#4d67dc] to-[#983e6d] after:w-[200px]  after:top-0 md:after:top-[25%] md:after:left-0 md:after:w-[8px] md:after:h-[200px]'}`}>
          <h2
            className={`${headingColor} text-[1.6rem] md:text-4xl tracking-[.2em] font-bold uppercase md:leading-[1.5em]`}
          >
            {heading}
          </h2>
          <p className={`${descriptionColor} my-4 `}>{description}</p>
         { linkText && <PageLink headingColor={headingColor} type={type} imageFilterClass={imageFilterClass} linkText={linkText} href='#none'/>}
        </div>
      </div>
    </div>
  );
};

export default Banner;
