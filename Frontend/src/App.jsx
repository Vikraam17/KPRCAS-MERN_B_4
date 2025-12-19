import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About";
import Contact from "./pages/Contact"
import Service from "./pages/Service";
const App = () => {
  return (
    <>
      {/* <Header/>
      <Footer /> */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/service" element={<Service/>}/>
      </Routes>
    </>
  );
};

export default App;
