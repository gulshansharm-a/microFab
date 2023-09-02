import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom"; // Import useLocation
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
import GetinTouchWithUs from "./components/contact/GetinTouchWithUs/GetinTouchWithUs";
import ContactForm from "./components/contact/Contact";
import Contact from './components/contact/Contact'
import AboutUs from "./about";
import Applications from './Application'
import Article from './components/Articles/Article'
import TP from './components/TP/TP'
import Home from "./components/Home/Home";
import "./Style.css";
import "./Styles12.css";

export default function App() {
  return (
    <Router>
      <AppContent /> {/* Wrap your content in a separate component */}
    </Router>
  );
}

function AppContent() {
  const location = useLocation(); // Now using useLocation within a Router context

  return (
    <div className="w-screen border-2 overflow-x-hidden">
      <Header />

      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/tp" element={<TP />} />
        <Route path="/articles" element={<Article />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
        <Route path="/technology" element={<Home />} />
      </Routes>
      
     
    </div>
  );
}
