import React, { useState } from "react";
import { motion } from "framer-motion";
import "../App.css";
import { HiHome, HiPhone } from "react-icons/hi";
import { MdFeedback } from "react-icons/md";
import{FaBars}from 'react-icons/fa'
import { GiPodiumWinner } from "react-icons/gi";
import { TbCertificate, TbBrandGithub ,TbBrandLinkedin,TbBrandInstagram } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const routes = [
  {
    path: "/",
    name: "Home",
    icon: <HiHome />,
  },
  {
    path: "/",
    name: "About-ChampionShip",
    icon: <GiPodiumWinner />,
  },
  {
    path: "/",
    name: "Certificates",
    icon: <TbCertificate />,
  },
  {
    path: "/",
    name: "Contact-Us",
    icon: <HiPhone />,
  },
  {
    path: "/",
    name: "Feedback",
    icon: <MdFeedback />,
  },
];

const Sidebar = ({ children }) => {
  const[isOn,setOn]=useState(false)
  const toggle=()=>setOn(!isOn)
  return (
    <>
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
         
         <TbBrandGithub/>
         <TbBrandInstagram/>
         <TbBrandLinkedin/>
        
       </section>
      </motion.div>
      
    </>
  );
};

export default Sidebar;
