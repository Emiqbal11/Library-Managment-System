import React from "react";
import { NavLink, useLocation } from "react-router-dom"
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import * as HiIcons from "react-icons/hi";
import * as ImIcons from "react-icons/im";
import "./tables/sidebar.css";
const SidebarData  = [

  {
    title: "Dashboard",
    path: "/",
    icon: <ImIcons.ImHome />,
    cName: "side-text ",
  },
  {
    title: "Add Book",
    path: "/AddBook",
    icon: <ImIcons.ImBook />,
    cName: "side-text",
  },
  {
    title: "View Books",
    path: "/ViewBook",
    icon: <ImIcons.ImBooks />,
    cName: "side-text",
  },
  {
    title: " Add Student",
    path: "/AddNewStudent",
    icon: <BsIcons.BsFillPersonPlusFill/>,
    cName: "side-text",
  },
  {
    title: "View Students",
    path: "/ViewStudents",
    icon: <HiIcons.HiUserGroup/>,
    cName: "side-text",
  },
  {
    title: "Issue Book",
    path: "/IssueBook",
    icon: <IoIcons.IoIosShare/>,
    cName: "side-text",
  },
  {
    title: "View Issued",
    path: "/ViewIssued",
    icon:<IoIcons.IoMdArchive/>,
    cName: "side-text",
  },
 
];
const Sidebar = () =>{
  const location=useLocation();
  return(
    <>
    {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <NavLink  to={item.path}
                
                style={({ isActive }) => ({
                  background: isActive ? '#173757' : null,
                })}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </NavLink>
              </li>
            );
          })}
        </>
      );
}



 




export default Sidebar