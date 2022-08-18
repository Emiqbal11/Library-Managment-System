import React from "react";
import './navbar.css';
import {RiLogoutBoxFill,RiAdminFill} from "react-icons/ri"
import { logOut } from "../../lib/services";
const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>L</span>ibrary
            <span>M</span>anagment
          </h2>
        </div>
{/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li><a href="/Login">
            < RiLogoutBoxFill className="logout" onClick={()=>logOut()} />  
            </a> 
            </li>
            <li> 
         <a href="/Admin"><RiAdminFill className="admin"/>
         </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;