import React from "react";
import { Link } from "react-router-dom";
import PageLink from "./Link";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8 py-14  ">
      <div className="footerGrid" >
        <Link to='/' >
        <h2>Photosnap</h2>
        </Link>
          <ul className="social flex gap-4">
            <li>
              <Link to="#none">
                <img src="/images/shared/desktop/facebook.svg" alt="" />
              </Link>
            </li>
            <li>
              <Link to="#none">
                <img src="/images/shared/desktop/instagram.svg" alt="" />
              </Link>
            </li>
            <li>
              <Link to="#none">
                <img src="/images/shared/desktop/pinterest.svg" alt="" />
              </Link>
            </li>
            <li>
              <Link to="#none">
                <img src="/images/shared/desktop/twitter.svg" alt="" />
              </Link>
            </li>
            <li>
              <Link to="#none">
                <img src="/images/shared/desktop/youtube.svg" alt="" />
              </Link>
            </li>
          </ul>
   
        <nav className="navLinks ">
          <ul>
            <li >
              <Link to="/" className='border-2 border-transparent transition-all duration-300  hover:border-2 hover:border-b-white'> Home</Link>
            </li>
            <li className="mt-3">
              <Link to="/stories " className='border-2 border-transparent transition-all duration-300  hover:border-2 hover:border-b-white'>Stories</Link>
            </li>
            <li className="mt-3">
              <Link to="/features" className='border-2 border-transparent transition-all duration-300  hover:border-2 hover:border-b-white' >Features</Link>
            </li>
            <li className="mt-3">
              <Link to="/pricing" className='border-2 border-transparent transition-all duration-300  hover:border-2 hover:border-b-white'>Pricing</Link>
            </li>
          </ul>
        </nav>
        <div className="md:ml-auto pagelink">
            <PageLink
          headingColor="text-white"
          type="dark"
          imageFilterClass={"light"}
          linkText="get an invite"
          href="#none"
            />
        </div>
        

        <p className="col-start-3 md:ml-auto  text-gray-300">Copyright {new Date().getFullYear()}. All Rights Reserved</p>
      </div>
     
    </footer>
  );
};

export default Footer;
