import React, { useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Common/Header/Header";
import Technology from "./Technology";
import Footer from "./components/Common/Footer/Footer";
import GetinTouchWithUs from "./components/contact/GetinTouchWithUs/GetinTouchWithUs";
import ContactForm from "./components/contact/Contact";
import Contact from './components/contact/Contact'
import AboutUs from "./about";
import Applications from './Application'
import TP from './components/TP/TP'
import Home from "./components/Home/Home";
import "./Style.css";
import "./Style_tech.css"
import "./Styles12.css";
import Articles from "./components/Articles/Articles";
import Blogs from "./components/Blogs/Blogs";
import SingleBlogPage from "./components/Blogs/SingleBlogPage/SingleBlogPage";
import TurnKeySolutions from "./components/TurnKeySolutions/TurnKeySolutions";

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="w-screen border-2 overflow-x-hidden font-['ClashDisplay']">
      <Header />

      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/tp" element={<TP />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Blogs/Blog1" element={<SingleBlogPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/turnKeySolutions" element={<TurnKeySolutions />} />
      </Routes>

    </div>
  );
}
