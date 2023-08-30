import React, { useState, useEffect } from "react";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
import GetinTouchWithUs from "./components/Contact/GetinTouchWithUs/GetinTouchWithUs";
import ContactForm from "./components/Contact/Contact_form/Contact_form";
import Contact from './components/Contact/Contact'
import AboutUs from "./components/AboutUs/AboutUs";
import Applications from './components/Applications/Applications'
import Article from './components/Articles/Article'
import TP from './components/TP/TP'

// import Contact from "./components/Contact/Contact";
// import About from "./components/About"; // Import other components as needed
// import Blogs from "./components/Blogs";
// import Technology from "./components/Technology";
// import Applications from "./components/Applications";
// import Articles from "./components/Articles";


import Home from "./components/Home/Home";

export default function App() {
  const [page, setPage] = useState("/");

  useEffect(() => {
    const path = window.location.pathname;
    setPage(path);
  }, []);
  
  return (
    <div>
      <Header />

      {/* Render different components based on the URL path */}
      {page === "/about" && <AboutUs />}
      {page === "/Applications" && <Applications />}
      {page === "/TP" && <TP />}
      {page === "/articles" && <Article />}
      {page === "/" && <Home />}
      {page === "/contact" && <Contact/>}
      
      <div className="md:w-full md:flex md:justify-between md:flex-row w-full">
        <GetinTouchWithUs />
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
}
