import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About";
import Contact from "./pages/Contact"
import Service from "./pages/Service";
import UseState from "./Hooks/UseState";
import UseEffect from "./Hooks/UseEffect";
const App = () => {
  return (
    <>
      {/* <Header/>
      <Footer /> */}
      {/* <Home Name="vikraam"/>
      <Home Name="Vino"/>
      <Home Name="Dharsh"/> */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home Name="vikraam"/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/useState" element={<UseState/>}/>
        <Route path="/useEffect" element={<UseEffect/>}/>
      </Routes>
    </>
  );
};

export default App;
