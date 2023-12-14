import logo from "./appli.png";
import pharma from "./pill.svg"
import logos from "./logos.svg";
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
import hhh from "./Frame 21441 (4).svg"
import Slider from "./slider";
// import { AppliCard } from "./testicard"
import testimonials from "./testimonials.json";
import { useState } from "react";
import Footer from "./components/Common/Footer/Footer";

function Application() {
  const [selectedImage, setSelectedImage] = useState(null);
  const showImage = (imageId) => {
    setSelectedImage(imageId);
  };
  return (
    <>
      {/* <div> */}
      <div>
        <span className="qaz">
        <div className="qa">
          <h3 className="mb-6 font-['ClashDisplay'] w-full pb-8 lg:text-7xl md: text-5xl sm:text-3xl leading-tight text-[#8AA6AA]  df"><strong>
          Lorem ipsum dolor sit  consectetur adipiscing elit sed do eiusmod</strong>
          </h3>
          <span>
            <h6
              className="lg:text-3xl md:text-2xl sm:text-xl leading-tight text-[#8AA6AA]   font-['ClashDisplay']sd"
              color="blue"
            >
              "Unleashing the Power of BFS Technology: Aseptic Filling, Sterile
              Containers, and Unbreakable Packaging in a Single Step!"
            </h6>{" "}
            <br></br>
          </span>
          </div>
         
          <button class="bg-[#8AA6AA] hover:bg-blue-700 text-white font-bold py-2 px-20 rounded m-2 font-['ClashDisplay']">
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
     <h3 className="mb-4 pb-4 text-5xl ml-8 leading-tight text-black font-['ClashDisplay']"><strong>
            Types of Packaging</strong>
          </h3>
      <div className="navbar">
        <spacer></spacer><spacer></spacer>{ }
        <button
          onClick={() => showImage("image1")}
          style={{ marginRight: "4%" }}
        >
          Eye-Drops
        </button>
        <button
          onClick={() => showImage("image2")}
          style={{ marginRight: "4%" }}
        >
          Injection
        </button>
        <button
          onClick={() => showImage("image3")}
          style={{ marginRight: "4%" }}
        >
          Inhalents
        </button>
        <button
          onClick={() => showImage("image3")}
          style={{ marginRight: "4%" }}
        >
          Infusion
        </button>
      </div>
      <br></br>

      <div
        className="image-container"
        id="image1"
        style={{ display: selectedImage === "image1" ? "block" : "none" }}
      >
        <img src={drop} alt="Image 1" />
      </div>
      <div
        className="image-container"
        id="image2"
        style={{ display: selectedImage === "image2" ? "block" : "none" }}
      >
        <img src={drop} alt="Image 2" />
      </div>
      <div
        className="image-container"
        id="image3"
        style={{ display: selectedImage === "image3" ? "block" : "none" }}
      >
        {/* <img src={drop} alt="Image 3" /> */}
      </div>
      <div
        className="image-container"
        id="image3"
        style={{ display: selectedImage === "image3" ? "block" : "none" }}
      >
        <img src={drop} alt="Image 4" />
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

<p className="mb-6 w-full pb-8 text-5xl leading-tight text-[#8AA6AA] font-['ClashDisplay'] kkk">
                
<strong>Unlocking Optimal Results: Blow-Fill-Seal for Various Applications</strong></p>
<br></br><br></br>
<div className="flex flex-col rounded-lg bg-white md:max-w-10xl md:flex-row font-['ClashDisplay'] mm">

              <div className="flex flex-col p-6 vbn">
               
                          <li className=" w-full text-2xl leading-tight text-[#8AA6AA]">ear drops</li>     
                          <li className=" w-full text-2xl leading-tight text-[#8AA6AA]">nose drops</li> 
                          <li className=" w-full text-2xl leading-tight text-[#8AA6AA]">contact lens cleaners and rinses</li> 
                          <li className=" w-full text-2xl leading-tight text-[#8AA6AA]">Gels for vaginal or rectal use</li>
                          <li className=" w-full text-2xl leading-tight text-[#8AA6AA]">drinking solutions</li>
                          <li className=" w-full text-2xl leading-tight text-[#8AA6AA]">Wound care preparations, wound gels and rinses</li>
                          <li className=" w-full text-2xl leading-tight text-[#8AA6AA]">disinfectant</li>
                          <li className=" w-full text-2xl leading-tight text-[#8AA6AA]">diagnostics</li>
                          <li className=" w-full text-2xl leading-tight text-[#8AA6AA]">biotechnological products</li> 
                          <li className=" w-full text-2xl leading-tight text-[#8AA6AA]">vaccines</li> 
                          <li className=" w-full text-2xl leading-tight text-[#8AA6AA]">Stability Test Kits</li> 
                          <li className=" w-full text-2xl leading-tight text-[#8AA6AA]">biotechnological products</li> 
                          </div> <br></br><br></br><br></br>
              {/* <br></br><br></br><br></br><br></br><br></br> */}
              <img className="h-96 w-48 rounded-lg rounded-md uuu" src={hhh} alt="NO image">
                
               
              </img>
            </div> 
<br></br>
      <div><center>
        <h3 className="mb-4 pb-4 text-4xl ml-8 leading-tight text-[#8AA6AA] font-['ClashDisplay']">
          From the industry leader: Exemplary BFS solutions for the
          pharmaceutical industry
        </h3>
        <h6 className="mb-4 pb-4 text-2xl ml-8 leading-tight text-[#8AA6AA] font-['ClashDisplay']" color="blue">
          "Our concepts are as individual as your requirements. See for
          yourself!"
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
        <div className="h-96">
          <div  className="asdf h-64">
        <h3 className="mb-4 border-b pb-4 text-3xl leading-tight text-[#8AA6AA] df asdf"><img className="w-150 h-30 object-cover " src={pharma} alt={pharma}></img> &nbsp;Pharma</h3>
        {/* <spacer></spacer> */}
        
        </div>
        
        <h5 className="mt-2 text-gray-600 text-md kkk"><strong>{{...testimonial}.content}</strong></h5>
        <h5 className="mt-2 text-gray-600 kkk" >{{...testimonial}.author}</h5>
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

      <div class="h-150 bg-[url('https://s3-alpha-sig.figma.com/img/adef/1933/3c4aec3165561e0e66507d1a5f04c828?Expires=1694390400&Signature=kUA16-811h509lNqndeJGtd88RFyAdXz0N8v8D~vaQLsOn6-mCgp4wgOKRKiWQ2C3taSrmoJJqYhovyrQ-SihL9U3KeUiTaVEDh-VmPN5yCw3XmsHP-C8ohD85dUTVdQBtEj-rU4~IycgnN-W6W2a-wA8CVQd~NkzXp~HEzbhCXdzCP8zL2hAvDd7-x~DEM22czyTYjSb5ndeF-kxuoT7Uci~3NgRx1x4ty7IGj4jFhWTs-ifNhdUmhKwRVtqW9zwb5hu~N7vL8arx1syFJM9dRYF1-m22rr0rJ7u3DVc~pRCgJSV1t~k1DMk9AU80fcUthKdqtXZonVQT8HAMtCEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')]">
        <br></br>
        <br></br>
        <center>
        <div class=" leading-tight bg-[#8AA6AA] kll"><center>
          <h1 class="text-3xl leading-tight font-bold text-white kll font-['ClashDisplay']">
            One-stop partners have more to offer
          </h1>
          <br></br>
          <h5 class="text-xl  leading-tight mb-4 font-bold text-white kll font-['ClashDisplay']">
            No matter what point you are at: With our experience and range of
            services, we are sure to get you ahead. Maybe so with these offers:
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

export default Application;
