import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"
import AboutChampion from "./Pages/Champion/AboutChampion";
import ContactUs from './Pages/Contacts/ContactUs'
import Certificates from'./Pages/certificates/Certificates'
import Demox from './Pages/Feedback/Demox'
import Home from './Pages/Homepage/Home'
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
