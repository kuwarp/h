import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"
import AboutChampion from "./Pages/AboutChampion";
import ContactUs from './Pages/ContactUs'
import Certificates from'./Pages/Certificates'
import Demox from './Pages/Demox'
import Home from './Pages/Home'
import Sidebar from "./Components/Sidebar";
const App = () => {
  return (
  <>
    <Router>
      <Sidebar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/AboutChampion" element={<AboutChampion/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
        <Route path="/Certificates" element={<Certificates/>}/>

        <Route path="/Demox" element={<Demox/>}/>
        
        <Route path="*" element={<>Not Found</>}/>
        
      </Routes>
      </Sidebar>
    </Router>
    </>
  );
};

export default App;
