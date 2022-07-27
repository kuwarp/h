import React, { useState } from "react";
import { motion } from "framer-motion";
import "./sidebar.css";
import { HiHome, HiPhone } from "react-icons/hi";
import { MdFeedback } from "react-icons/md";
import{FaBars}from 'react-icons/fa'
import { GiPodiumWinner } from "react-icons/gi";
import { TbCertificate, TbBrandGithub ,TbBrandLinkedin,TbBrandInstagram } from "react-icons/tb";
import {  NavLink } from "react-router-dom";

const routes = [
  {
    path: "/",
    name: "Home",
    icon: <HiHome />,
  },
  {
    path: "/AboutChampion",
    name: "About-ChampionShip",
    icon: <GiPodiumWinner />,
  },
  {
    path: "/Certificates",
    name: "Certificates",
    icon: <TbCertificate />,
  },
  {
    path: "/ContactUs",
    name: "Contact-Us",
    icon: <HiPhone />,
  },
  {
    path: "/Demox",
    name: "Feedback",
    icon: <MdFeedback />,
  },
];

// const social=[
//   {
//     path:"www.github.com/kuwarp",
//     icon:<TbBrandGithub/>,
//   }
// ]

const Sidebar = ({ children }) => {
  const[isOn,setOn]=useState(false)
  const toggle=()=>setOn(!isOn)
  return (
    <div className="main-cont">
      <motion.div className="side"  animate={{ width: isOn?"215px":"35px" }} >
        <section className="brand">
          {isOn && <h1 className="brand-logo"> We Are Finding</h1>}
          <div className="bar">
            <FaBars  onClick={toggle}/>
          </div>
        </section>
        <section className="routes">
          {routes.map((route) => (
            <NavLink to={route.path} key={route.name} className='connect'>
              <div className="icon">{route.icon}</div>
              <div className="text-per">{route.name}</div>
            </NavLink>
          ))}
         
        </section>
        <section className="social-icons">
      {/* {social.map((route)=>(
        <Link to ={route.path} key={route.name}>
          <div>{route.icon}</div>
        </Link>
      ))} */}



       <a href="http://www.github.com/kuwarp">  <TbBrandGithub /></a>
         <TbBrandInstagram/>
         <TbBrandLinkedin/>
        
       </section>
      </motion.div>
      <main className="child">{children}</main>
    </div>
   
  );
};

export default Sidebar;
