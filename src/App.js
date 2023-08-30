import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"; // Import BrowserRouter and Route
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
import GetinTouchWithUs from "./components/Contact/GetinTouchWithUs/GetinTouchWithUs";
import ContactForm from "./components/Contact/Contact_form/Contact_form";
import Contact from './components/Contact/Contact'
import AboutUs from "./components/AboutUs/AboutUs";
import Applications from './components/Applications/Applications'
import Article from './components/Articles/Article'
import TP from './components/TP/TP'
import Home from "./components/Home/Home";

export default function App() {
  const [page, setPage] = useState("/");

  useEffect(() => {
    const path = window.location.pathname;
    setPage(path);
  }, []);
  
  return (
    <BrowserRouter>
      <div>
        <Header />

        {/* Use Switch to match only one route */}
        <Switch>
          <Route path="/about" component={AboutUs} />
          <Route path="/applications" component={Applications} />
          <Route path="/tp" component={TP} />
          <Route path="/articles" component={Article} />
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
        </Switch>

        <div className="md:w-full md:flex md:justify-between md:flex-row w-full">
          <GetinTouchWithUs />
          <ContactForm />
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
