import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import GetinTouchWithUs from "./components/GetinTouchWithUs/GetinTouchWithUs";
import ContactForm from "./components/Contact_form/Contact_form";
import Contact from "./components/contact/Contact";
// import About from "./components/About"; // Import other components as needed
// import Blogs from "./components/Blogs";
// import Technology from "./components/Technology";
// import Applications from "./components/Applications";
// import Articles from "./components/Articles";
import Home from "./Home";

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
      {/* {page === "/about" && <About />} */}
      {/* {page === "/blogs" && <Blogs />} */}
      {/* {page === "/Technology" && <Technology />} */}
      {/* {page === "/Applications" && <Applications />} */}
      {/* {page === "/Applications" && <Applications />} */}
      {/* {page === "/Articles" && <Articles />} */}
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
