import React from "react";
import arrow from "/images/shared/desktop/arrow.svg";
import { Link } from "react-router-dom";
const PageLink = ({headingColor,type,imageFilterClass,linkText,href,space_between='justify-start'}) => {
  return (
    <Link
      to={href}
      className={`${headingColor} cursor-pointer ${space_between}  uppercase tracking-[.2em] font-semibold getAnInvite  text-sm py-4 flex items-center gap-4 ${type}`}
    >
      <span
        className={` transition-all duration-300 block border-b-2 border-transparent  `}
      >
        {linkText}
      </span>
      <img
        src={arrow}
        className={`${imageFilterClass} transition-all duration-400  `}
      />
    </Link>
  );
};

export default PageLink;
