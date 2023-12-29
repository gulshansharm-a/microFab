import logo from "./appli.png";
import pharma from "./pill.svg"
import logos from "./new1.svg";
import drop from "./drops.png";
import drop1 from "./drop1.svg";
import hand from "./hand.png";
import "./Styles12.css";
import arrow_right from "../src/assets/Home_article/ArrowRight.svg"
import React from "react";
import { firsto } from "./first";
import { NavbarDefault } from "./Navbar";
import { Button } from "@material-tailwind/react";
import { NavbarWithMegaMenu } from "./packnav";
import { Card3Presentation } from "./cards";
import { HorizontalCard } from "./one-stop";
import Slider from "./slider";
// import { AppliCard } from "./testicard"
import testimonials from "./Testappli1.json";
import { useState } from "react";
import Footer from "./components/Common/Footer/Footer";
import im1 from "./image 50 (4).svg";
import rt from "./image 8.svg";
import applicationContent from './components/Products/BFS/Application/applicationContent.json'
import ApplicationCard from "./components/Products/BFS/Application/ApplicationCard";

import aq from "./tyfg.png";
import dropu from"./vbnm.svg";
import pic11 from "./new2.svg";
import pic12 from "./new2.svg";
import pic13 from "./new2.svg";
import pic14 from "./new2.svg";

export default function Appli4() {
  const [selectedImage, setSelectedImage] = useState('image1');
  const [displayText, setDisplayText] = useState("");
  const showImage = (imageId) => {
   
        setDisplayText("Our concepts with regards to packaging are unique as per your requirements. While the technology lets you move ahead with ideal primary packaging, it is safe to use and the container is shaped in a unique way. With the technology, you can always expect maximum flexibility with the container design.");
     
    setSelectedImage(imageId);
  };
  return (
    <>
      {/* <div> */}
      <div>
        <span className="qaz">
        <div className="qa">
          <h3 className="mb-6 w-full pb-8 lg:text-6xl md: text-4xl sm:text-4xl leading-tight text-[#8AA6AA]  animate__animated animate__fadeInLeft animate__delay-0s df"><strong>
          Packaging Solutions for Dairy</strong>
          </h3>
          <span>
            <h6
              className="lg:text-3xl md:text-2xl sm:text-xl leading-tight text-[#8AA6AA]  animate__animated animate__fadeInRight animate__delay-0s sd"
              color="blue"
            >
         Our packaging solutions play a pivotal role in preserving the freshness and quality of dairy products. These also extend the shelf life of dairy goods, ensuring that the consumers can enjoy the product with its nutritional benefits. </h6>{" "}
            {/* <br></br> */}
          </span>
          </div>
         
          <button class="bg-[#8AA6AA] ee text-white font-bold py-3 px-20 rounded m-2 ">
  Explore
</button>

<div>
            <img
              className="h-106 w-full object-cover object-center poi  animate__animated animate__fadeIn animate__delay-1s"
              src={logos}
              
              alt="nature image"
            />
          </div>

          {/* <br></br>
          <br></br> */}
          
        </span>
      </div>
      <br></br>

      <br></br>
      {/* <br></br>
      <br></br>
      <br></br>
      <br></br> */}
      {/* </div> */}

      {/* <div> <img
      className="h-96 w-full object-cover object-center"
      src={logo}
      alt="nature image"
    />
    </div> */}
     <h3 className="mb-4 pb-4 text-5xl ml-8 leading-tight text-black  animate__animated animate__fadeInLeft animate__delay-1s"><strong>
            Types of Packaging</strong>
          </h3>
      <div className="navbar3">
        <spacer></spacer><spacer></spacer>{ }
        <button
          onClick={() => showImage("image1")}
          style={{ marginRight: "4%" }}
        >
         Milk
        </button>
        <button
          onClick={() => showImage("image2")}
          
          style={{ marginRight: "4%" }}
        >
         Liquid Cheese
        </button>
        <button
          onClick={() => showImage("image3")}
          style={{ marginRight: "4%" }}
        >
         Buttermilk
        </button>
        <button
          onClick={() => showImage("image4")}
          style={{ marginRight: "4%" }}
        >
         Yogurt
        </button>
        {/* {selectedImage && (
        <img src={`path/to/${selectedImage}.jpg`} alt={`Image ${selectedImage}`} />
      )}
      {/* Display the text */}
     
      </div>
      <br></br>

      <div
        className="image-container ml-10 mb-3"
        id="image1"
        style={{ display: selectedImage === "image1" ? "block" : "none" }}
      >
        {displayText && <p>{displayText}</p>}
        <br></br>
        <div className="relative flex klp">
  {/* Left Image */}
  <div className="qwea relative flex">
    <img
      src={aq}
      alt="Image 1"
      className="absolute top-0 left-0 h-37 w-40 z-0 fd"
    />
    <img src={pic11} alt="Image 2" className="relative" />
  </div>

  {/* Right Image */}
  <div className="qwea relative flex ml-6">
    <img
      src={aq}
      alt="Image 3"
      className="absolute top-0 h-37 w-40 z-0 fd"
    />
    <img src={dropu} alt="Image 4" className="relative fd" />

    {/* Text inside the dropu image */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fd">
      <h1 className="h"
        style={{
          color: 'var(--p-v20, #8AA6AA)',
          fontFamily: 'Clash Display',
          fontSize: '34px',
          fontWeight: 500,
          
        }}
      >
      Milk
      </h1>
      <hr></hr><br></br>
      <p className="j"
        style={{
          color: 'var(--p-v20, #8AA6AA)',
          fontFamily: 'Clash Display',
          fontSize: '22px',
          fontStyle: 'normal',
          fontWeight: 500,
         
        }}
      >The packaging solutions of MicroFab help to shield milk from external factors like bacteria, air and light. This aspect extends the shelf life of milk, and helps in the preservation of nutrients.</p>
    </div>
  </div>
</div>
      </div>
      <div
        className="image-container ml-10 mb-3"
        id="image2"
        style={{ display: selectedImage === "image2" ? "block" : "none" }}
      >
        {displayText && <p>{displayText}</p>}
        <br></br>        <div className="relative flex klp">
  {/* Left Image */}
  <div className="qwea relative flex">
    <img
      src={aq}
      alt="Image 1"
      className="absolute top-0 left-0 h-37 w-40 z-0 fd"
    />
    <img src={pic12} alt="Image 2" className="relative" />
  </div>

  {/* Right Image */}
  <div className="qwea relative flex ml-6">
    <img
      src={aq}
      alt="Image 3"
      className="absolute top-0 h-37 w-40 z-0 fd"
    />
    <img src={dropu} alt="Image 4" className="relative fd" />

    {/* Text inside the dropu image */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fd">
      <h1 className="h"
        style={{
          color: 'var(--p-v20, #8AA6AA)',
          fontFamily: 'Clash Display',
          fontSize: '34px',
          fontWeight: 500,
          
        }}
      >
      Milk
      </h1>
      <hr></hr><br></br>
      <p className="j"
        style={{
          color: 'var(--p-v20, #8AA6AA)',
          fontFamily: 'Clash Display',
          fontSize: '22px',
          fontStyle: 'normal',
          fontWeight: 500,
         
        }}
      >The packaging solutions of MicroFab help to shield milk from external factors like bacteria, air and light. This aspect extends the shelf life of milk, and helps in the preservation of nutrients.</p>
    </div>
  </div>
</div>
      </div>
      <div
        className="image-container ml-10 mb-3"
        id="image3"
        style={{ display: selectedImage === "image3" ? "block" : "none" }}
      >
        {/* {displayText && <p>{displayText}</p>}
        <img src={drop} alt="Image 3" /> */}
      </div>
      <div
        className="image-container ml-10 mb-3"
        id="image3"
        style={{ display: selectedImage === "image3" ? "block" : "none" }}
      >
        {displayText && <p>{displayText}</p>}
        <br></br>        <div className="relative flex klp">
  {/* Left Image */}
  <div className="qwea relative flex">
    <img
      src={aq}
      alt="Image 1"
      className="absolute top-0 left-0 h-37 w-40 z-0 fd"
    />
    <img src={pic13} alt="Image 2" className="relative" />
  </div>

  {/* Right Image */}
  <div className="qwea relative flex ml-6">
    <img
      src={aq}
      alt="Image 3"
      className="absolute top-0 h-37 w-40 z-0 fd"
    />
    <img src={dropu} alt="Image 4" className="relative fd" />

    {/* Text inside the dropu image */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fd">
      <h1 className="h"
        style={{
          color: 'var(--p-v20, #8AA6AA)',
          fontFamily: 'Clash Display',
          fontSize: '34px',
          fontWeight: 500,
          
        }}
      >
    Milk
      </h1>
      <hr></hr><br></br>
      <p className="j"
        style={{
          color: 'var(--p-v20, #8AA6AA)',
          fontFamily: 'Clash Display',
          fontSize: '22px',
          fontStyle: 'normal',
          fontWeight: 500,
         
        }}
      >The packaging solutions of MicroFab help to shield milk from external factors like bacteria, air and light. This aspect extends the shelf life of milk, and helps in the preservation of nutrients.</p>
    </div>
  </div>
</div>
      </div>
      <div
        className="image-container ml-10 mb-3"
        id="image4"
        style={{ display: selectedImage === "image4" ? "block" : "none" }}
      >
        {displayText && <p>{displayText}</p>}
        <br></br>       <div className="relative flex klp">
  {/* Left Image */}
  <div className="qwea relative flex">
    <img
      src={aq}
      alt="Image 1"
      className="absolute top-0 left-0 h-37 w-40 z-0 fd"
    />
    <img src={pic14} alt="Image 2" className="relative" />
  </div>

  {/* Right Image */}
  <div className="qwea relative flex ml-6">
    <img
      src={aq}
      alt="Image 3"
      className="absolute top-0 h-37 w-40 z-0 fd"
    />
    <img src={dropu} alt="Image 4" className="relative fd" />

    {/* Text inside the dropu image */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fd">
      <h1 className="h"
        style={{
          color: 'var(--p-v20, #8AA6AA)',
          fontFamily: 'Clash Display',
          fontSize: '34px',
          fontWeight: 500,
          
        }}
      >
      Milk
      </h1>
      <hr></hr><br></br>
      <p className="j"
        style={{
          color: 'var(--p-v20, #8AA6AA)',
          fontFamily: 'Clash Display',
          fontSize: '22px',
          fontStyle: 'normal',
          fontWeight: 500,
         
        }}
      >The packaging solutions of MicroFab help to shield milk from external factors like bacteria, air and light. This aspect extends the shelf life of milk, and helps in the preservation of nutrients.</p>
    </div>
  </div>
</div>
      </div>

      <br></br>
      {/* <div> <h6 className="text-1xl leading-tight text-black" color="blue">"Unleashing the Power of BFS Technology: Aseptic Filling, Sterile Containers, and Unbreakable Packaging in a Single Step!"</h6><br></br>
        </div> */}
      {/* <div> <img
      className="h-70 w-full object-cover object-center scale-[.87]"
      src={drop}
      alt="nature image"
    />
    </div> */}
      {/* <div>
        {" "}
        <img
          className="h-70 w-full object-cover object-center "
          src={hand}
          alt="nature image"
        />
      </div> */}
<br></br><br></br>

<p className="mb-6 w-full pb-8 text-5xl leading-tight text-[#8AA6AA] kkk  animate__animated animate__fadeInLeft animate__delay-2s">
                
<strong>Use of our packaging machines for different applications</strong></p>
<div className="flex flex-col rounded-lg bg-white md:max-w-10xl md:flex-row mm">

              <div className="flex flex-col p-6 vbn">
               <br></br>
                          <li className=" w-full lg:text-2xl sm:text-2xs leading-tight text-[#8AA6AA]">Flavoured Milk</li>     
                          <li className=" w-full lg:text-2xl sm:text-2xs leading-tight text-[#8AA6AA]">Laban</li> 
                        
                          <li className=" w-full lg:text-2xl sm:text-2xs leading-tight text-[#8AA6AA]">Cream</li>
                          <li className=" w-full lg:text-2xl sm:text-2xs leading-tight text-[#8AA6AA]">Almond Milk</li>
                          <li className=" w-full lg:text-2xl sm:text-2xs leading-tight text-[#8AA6AA]">Spreads</li>
                          
                          </div> <br></br><br></br><br></br>
              {/* <br></br><br></br><br></br><br></br><br></br> */}
              <img className="h-96 w-48 rounded-lg rounded-md uuu  animate__animated animate__fadeInRight animate__delay-2s" src={im1} alt="NO image">
                
               
              </img>
            </div> 
<br></br>
<div className="qwe">
        <h3 className="mb-4 pb-4 text-4xl ml-8 leading-tight text-[#8AA6AA]  animate__animated animate__fadeInLeft animate__delay-3s">
        Advantages of Microfab machines in the Pharmaceutical Industry
        </h3>
        <h6 className="mb-4 pb-4 text-2xl ml-8 leading-tight text-[#8AA6AA]  animate__animated animate__fadeInLeft animate__delay-3s" color="blue">
        The BFS technology offers many benefits for pharmaceutical companies.
        </h6>
        <br></br>
        {/* <Card3Presentation/> */}
      </div>
      {/* className={`flex min-h-screen flex-col items-center justify-between py-24`} */}

      {/* 2. make sure our carousel container takes up the full screen width using w-screen */}
      <div className="md:px-14 mt-[5%] px-4 gap-10 flex flex-col">
       
       <div className="w-full flex flex-row md:gap-10 gap-[200px] md:overflow-auto overflow-scroll pb-10  animate__animated animate__fadeInLeft animate__delay-4s">
         {applicationContent.map((item, index) => (
           <div
             key={index}
             className="md:w-[25%] w-[100%]"
           >
             <ApplicationCard heading={item.heading} content={item.content} img={item.img}/>
           </div>
         ))}
       </div>
     </div>

      {/* <HorizontalCard/> */}

      <div class="h-150 bvc">
        <br></br>
        <br></br>
        <center>
        <div class=" leading-tight bg-[#8AA6AA] kll"><center>
          <h1 class="text-3xl leading-tight font-bold text-white kll">
          As a one-stop partner, we offer more for your company
          </h1>
          <br></br>
          <h5 class="text-xs  leading-tight mb-4 text-white kll">
          Regardless of which instance you’re at; a wealth of experience and a plethora of services ensures you to move ahead. Maybe so what we offer:
          </h5>
          </center><br></br>
          <a class="text-xs  leading-tight mb-4   text-white  tt" href="https://google.com">Product solutions-></a><br></br>
          <a class="text-xs  leading-tight mb-4 text-white  tt" href="https://google.com">Turnkey solutions -></a><br></br>
          <a class="text-xs  leading-tight mb-4  text-white  tt" href="https://google.com">Service solutions -></a><br></br>
          <br></br>
          
          </div>
          </center>
          
         
      
        
        <br></br><br></br>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

