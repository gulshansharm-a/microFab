import logo from "./appli.png";
import pharma from "./pill.svg"
import logos from "./logos.svg";
import drop from "./xca.png";
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
import testimonials from "./Testappli2.json";
import { useState } from "react";
import Footer from "./components/Common/Footer/Footer";
import im1 from "./Frame 21441 (1).svg";
import rt from "./image 8.svg"
export default function Appli1() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [displayText, setDisplayText] = useState("");
  const showImage = (imageId) => {
   
        setDisplayText("Our Blow-Fill-Seal technology enables you to shape ampoules as per your preferences. While the technology fills the products aseptically, the sealing phase forms a twist-off cap at the end.");
     
    setSelectedImage(imageId);
  };
  return (
    <>
      {/* <div> */}
      <div>
        <span className="qaz">
        <div className="qa">
          <h3 className="mb-6 w-full pb-8 lg:text-7xl md: text-5xl sm:text-3xl leading-tight text-[#8AA6AA]  df"><strong>
          Packaging Solutions for Cosmetics</strong>
          </h3>
          <span>
            <h6
              className="lg:text-3xl md:text-2xl sm:text-xl leading-tight text-[#8AA6AA]  sd"
              color="blue"
            >
           Our BFS technology can be considered for a user-friendly packaging solution for serums, tonics or gels. The cosmetics will stay fresh and a need to add preservatives will not arise.
            </h6>{" "}
            {/* <br></br> */}
          </span>
          </div>
         
          <button class="bg-[#8AA6AA] hover:bg-blue-700 text-white font-bold py-3 px-20 rounded m-2">
  Explore
</button>

<div>
            <img
              className="h-106 w-full object-cover object-center poi"
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
     <h3 className="mb-2 pb-2 text-5xl ml-8 leading-tight text-black"><strong>
            Types of Packaging</strong>
          </h3>
      <div className="navbar1">
        <spacer></spacer><spacer></spacer>{ }
        <button
          onClick={() => showImage("image1")}
          style={{ marginRight: "4%" }}
        >
          Creams
        </button>
        <button
          onClick={() => showImage("image2")}
          
          style={{ marginRight: "4%" }}
        >
          Serums
        </button>
        <button
          onClick={() => showImage("image3")}
          style={{ marginRight: "4%" }}
        >
          Gels
        </button>
        <button
          onClick={() => showImage("image3")}
          style={{ marginRight: "4%" }}
        >
          Tonics
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
        <img src={drop} alt="Image 1" />
      </div>
      <div
        className="image-container ml-10 mb-3"
        id="image2"
        style={{ display: selectedImage === "image2" ? "block" : "none" }}
      >
        {displayText && <p>{displayText}</p>}
        <br></br><img src={drop} alt="Image 2" />
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
        <br></br><img src={drop} alt="Image 4" />
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

<p className="mb-6 w-full pb-8 text-5xl leading-tight text-[#8AA6AA] kkk">
                
<strong>Use of our packaging machines for different Applications</strong></p>
<div className="flex flex-col rounded-lg bg-white md:max-w-10xl md:flex-row mm">

              <div className="flex flex-col p-6 vbnn">
               <br></br>
                          <li className=" w-full text-2xl leading-tight text-[#8AA6AA]">Lotions </li>     
                          <li className=" w-full text-2xl leading-tight text-[#8AA6AA]">Creams </li> 
                          <li className=" w-full text-2xl leading-tight text-[#8AA6AA]">Serums </li> 
                          <li className=" w-full text-2xl leading-tight text-[#8AA6AA]">Gels for vaginal or rectal use</li>
                          <li className=" w-full text-2xl leading-tight text-[#8AA6AA]">Shampoos </li>
                          <li className=" w-full text-2xl leading-tight text-[#8AA6AA]">Hair Serums </li>
                          <li className=" w-full text-2xl leading-tight text-[#8AA6AA]">Conditioners</li>
                          {/* <li className=" w-full text-2xl leading-tight text-[#8AA6AA]">diagnostics</li>
                          <li className=" w-full text-2xl leading-tight text-[#8AA6AA]">biotechnological products</li> 
                          <li className=" w-full text-2xl leading-tight text-[#8AA6AA]">vaccines</li> 
                          <li className=" w-full text-2xl leading-tight text-[#8AA6AA]">Stability Test Kits</li> 
                          <li className=" w-full text-2xl leading-tight text-[#8AA6AA]">biotechnological products</li>  */}
                          </div> <br></br><br></br><br></br>
              {/* <br></br><br></br><br></br><br></br><br></br> */}
              <img className="h-80 w-48 rounded-lg rounded-md uuu" src={im1} alt="NO image">
                
               
              </img>
            </div> 
<br></br>
      <div><center>
        <h3 className="mb-4 pb-4 text-4xl ml-8 leading-tight text-[#8AA6AA]">
        Advantages of Microfab machines in the Pharmaceutical Industry
        </h3>
        <h6 className="mb-4 pb-4 text-2xl ml-8 leading-tight text-[#8AA6AA]" color="blue">
        The BFS technology offers many benefits for pharmaceutical companies.
        </h6>
        <br></br></center>
        {/* <Card3Presentation/> */}
      </div>
      {/* className={`flex min-h-screen flex-col items-center justify-between py-24`} */}

      {/* 2. make sure our carousel container takes up the full screen width using w-screen */}
      <div className="w-screen">
        <Slider options={{ align: "center" }}>
          {testimonials.map((testimonial, i) => (
            // 3. flex-[0_0_50%] set the width of each card to 50% of the viewport
            // for mobile devices we use 90% width
            <div key={i} className="flex-[0_0_90%] md:flex-[0_0_23%]">
              <div className="py-4 px-4 bg-white shadow-lg rounded-lg my-20">
      <div className="flex justify-center md:justify-end -mt-16">
        {/* <Image> */}
          
         {/* <img className="w-150 h-30 object-cover  border-2 border-indigo-500" src={{...testimonial}.imgSrc} alt={{...testimonial}.imgSrc}></img>  */}
           {/* height={80}
           width={80}
           src={props.imgSrc} 
           </Image> */}
      </div>
      
        {/* <h2 className="text-[#8AA6AA] text-3xl font-semibold">{props.title}</h2> */}
        <div>
     
        
        
        <h5 className="mt-2 text-gray-600 kkk" ><strong>{{...testimonial}.author}</strong></h5>
      </div>
      {/* <div className ="mt-2 text-gray-600flex justify-end mt-4 pyu text-[#8AA6AA]">Blow-Fill-Seal, Technology </div>
      <div className="flex justify-end mt-4 mt-2">
      <div className="flex flex-row place-items-center gap-3">
                    <a className="text-[#8AA6AA] font-extrabold">Read more</a>
                    <img
                      src={arrow_right}
                      className="bg-[#8AA6AA] h-6 p-0.5 rounded-full"
                      alt="Read more"
                    />
        
        </div>
        
      </div> */}
    </div>
            </div>
          ))}
        </Slider>
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
          <a class="text-xs  leading-tight mb-4   text-white  tt" href="https://google.com">CONTRACT FILLING -></a><br></br>
          <a class="text-xs  leading-tight mb-4 text-white  tt" href="https://google.com">PHARMA-SUITE-SERVICE -></a><br></br>
          <a class="text-xs  leading-tight mb-4  text-white  tt" href="https://google.com">FACTORY PLANNING -></a><br></br>
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


