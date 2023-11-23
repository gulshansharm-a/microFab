import logo from "./logo.svg";
import "./Stylesq.css";
import { NavbarDefault } from "./Navbar";
import { Button } from "@material-tailwind/react";
import we from "./qw.png";
import sdd from "./cder.png";
import hj from "./Union1.jpg"
import "./Styles_abt2.css"
import pic from "./List.png"
import tasto from "./testicards.json";
import Slider from "./slider";
import TestimonialCard from "./tasticard";
import Footer from './components/Common/Footer/Footer'
import React, { useState, useRef, useEffect } from 'react';
import yu from "./fgf.svg";
import a from "./Rectangle 57.svg";
import b from "./layer.svg";
import cc from "./WhatsApp Image 2023-11-23 at 13.48.59.jpeg";
import './App.css';

function FaqItem({ question, answers, initiallyOpen }) {
  const [isOpen, setIsOpen] = useState(initiallyOpen);
  const [barHeight, setBarHeight] = useState(0);
  const answerRef = useRef(null);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
    Document.bgColor = '#282c34';
  };
  useEffect(() => {
    if (isOpen && answerRef.current) {
      setBarHeight(answerRef.current.clientHeight + 'px'); // Set the height when answer is open
    } else {
      setBarHeight('auto'); // Set back to 'auto' when answer is closed
    }
 
  }, [isOpen]);
  return (
    // <center>
    // <div className="faq-item mb-4 text-xs leading-tight text-black container lm" onClick={toggleAnswer}>
    //   <div className={`question ${isOpen ? 'active' : ''}mb-4 text-xs leading-tight text-black question mb-4 text-sm leading-tight text-black `}>
    //   <span className="vertical-bar"></span> {/* Add a vertical bar element */}
    //     {question}
    //   </div>
    //   {isOpen && (
    //     <div className="answer">
    //       {answers.map((paragraph, index) => (
    //         <p key={index}>{paragraph}</p>
    //       ))}
    //     </div>
    //   )}
    // </div>
    // </center>
    <div className="faq-item">
      <div className={`question ${isOpen ? 'active' : ''}`} onClick={toggleAnswer}>
      <div className="vertical-bar" style={{ height: barHeight }}></div>
        {question}
      </div><br></br>
      {isOpen && (
        <div ref={answerRef} className={`answer ${isOpen ? 'show' : ''}`}>
        {answers.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      )}
    </div>
  
  );
}
function AboutUs() {
  return (
    <div>
      <div className="App">
        {/* <div><NavbarDefault /></div><br></br><br></br> */}
        <div>
          <div className="ui">
          <div className="bg-[url('./opp.png')] nn">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <center>
              <div className="flex flex-col rounded-lg bg-white md:max-w-6xl md:flex-row mm">
                <div className="flex flex-col p-6">
                 
                  <h3 className="mb-2 text-7xl leading-tight text-[#8AA6AA]">
                    About Us
                  </h3>
                  <p className="mb-4 text-xs leading-tight text-[#8AA6AA]">
                  MicroFab is the result of a collaboration between industry leaders MicroTools and FabLab, combining expertise in BFS and FFS machine manufacturing and EPC contracting. Specializing in advanced packaging and industrial solutions, MicroFab is committed to quality, innovation, and seamless project execution. The company aims to revolutionize packaging and project execution, serving as a unified source for cutting-edge technologies and turnkey solutions across various industries.
                  </p>
                </div>
                {/* <br></br><br></br><br></br> */}
                <img
                  className="h-96 w-full rounded-t-lg ju  md:h-64 md:w-74 md:rounded-none md:rounded-l-lg"
                  src={yu} alt=""
                />
              </div>
            </center>
            {/* <br></br><br></br> */}
          
          {/* </center> */}

          <div className="flex flex-col p-6 text-white bg-[#8AA6AA] kmk">
            
            <h5 className="mb-4 text-3xl leading-tight text-white bg-[#8AA6AA]">
            Our Beliefs
            </h5>
            <p className="mb-4 text-xs  text-white bg-[#8AA6AA]"> With our comprehensive approach that includes incorporation of packaging technologies, installation, and maintenance, we help enterprises to commence the BFS and FFS production journey.</p>
            <br></br>
            <br></br>
            {/* <div class="lg:grid-grid-cols-3 md:grid-cols-3 gap-8 gh bg-[#8AA6AA]"> */}
            <div class="grid grid-col-3 grid-flow-row gap-10 container">
              {/* <div><span className="text-7xl h-full">1</span><spacer></spacer>
        <span>
        <span className="text-3xl n"> Lorem ipsum tgrtg rgtg referfrgf</span>
        </span>
        </div> */}
              <div className="row-span-3 gap-10 md:flex-row column">
                {/* <div className="qa">  */}
                <span className="text-7xl wer">1</span>

                <span className="text-3xl m"> INTEGRITY</span>
                {/* </div> */}
                <br></br>
                <br></br>
                <p className="mb-4 text-xs leading-tight text-white">
                To earn trust of our customers with reliability and honesty in all of
our interactions, along with our unwavering commitment.
                </p>
              </div>
              <div className="row-span-3 gap-10 column">
                <span className="text-7xl wer">2</span>

                <span className="text-3xl m"> FORWARD-THINKING</span>
                <br></br>
                <br></br>
                <p className="mb-4 text-xs leading-tight text-white">
                To make a difference by staying ahead in the market, venturing
unexplored domains, and ideating for a change.
                </p>
              </div>
              <div className="row-span-3 gap-10 column">
                <span className="text-7xl wer">3</span>
                <span className="text-3xl o"> INNOVATION</span>
                <br></br>
                <br></br>
                <p className="mb-4 text-xs leading-tight text-white">
                Striving for more effective solutions by actively pursuing
research and development, infusing fresh perspectives, and
exploring new technological avenues.
                </p>
              </div>
            </div>
          </div>
          </div>
          </div>
          
          <br></br>
          <br></br>
          {/* <h5 className="mb-2 text-2xl leading-tight">
                  Our latest blog posts
                </h5><br></br> */}
          {/* <div className="w-screen as h-160px okl">
            <Slider options={{ align: "center" }}>
              {tasto.map((tasto, i) => (
                // 3. flex-[0_0_50%] set the width of each card to 50% of the viewport
                // for mobile devices we use 90% width
                <div key={i} className="flex-[0_0_190%] md:flex-[0_0_23%] vvv">
                  <TestimonialCard {...tasto} />
                </div>
              ))}
            </Slider>
          </div> */}
          <br></br>
          <center>
            <br></br><br></br>
            <div className="flex flex-col rounded-lg bg-white md:max-w-6xl md:flex-row mm">
              <div className="flex flex-col p-6">
                <p className="mb-4 text-5xl leading-tight ">
                Industries that we serve
                </p>
                {/* <h5 className="mb-2 text-4xl leading-tight ll">
                  Lorem ipsum
                </h5> */}
                <p className="mb-4 text-xs mr-20 leading-tight  ll">
                MicroFab technology serves as a versatile tool across pharma, chemical, dairy, food and cosmetics providing solutions for precise manufacturing, miniaturization, and enhancing the efficiency and safety of processes in pharmaceuticals, food, cosmetics, and chemicals. Its adaptability makes it a valuable asset in addressing specific needs within each sector, contributing to advancements in product development and manufacturing processes.
                </p>
              </div><br></br><br></br><br></br>
              {/* <br></br><br></br><br></br><br></br><br></br> */}
             
                <img src={a} alt="no"/>
                {/* Your browser does not support the video tag. */}
              
            </div>
          </center>
          <br></br>
          <br></br>
          <div className="bg-[url('./piku.png')] jk">
            <br></br>
            <center>
              <div className="flex flex-col rounded-lg md:max-w-3xl md:flex-row mm">
                <center>
                  <div className="flex flex-col p-6">
                    <p>
                      <h5 className="mb-2 text-6xl leading-tight text-white">
                        <strong>Why Choose Us</strong>
                      </h5>
                    </p>
                    <p className="mb-4 text-xl leading-tight text-white">
                    With MicroFab, you can gain the most from cutting-edge innovations to evolve the company in the industry it’s destined for. While we are driven by passion to transform the packaging industry, we infuse every endeavour with a blend of technical brilliance and utmost dedication.</p>
                  </div>
                </center>
              </div>
              <Button
                variant="filled"
                size="lg"
                color="white"
                className="ab rounded-full bg-white text-black"
              >
                <strong> --Read More-- </strong>
              </Button>
            </center>
            <br></br>
          </div>
          <br></br>
          <div className="bg-white ">
            <br></br>
            <center>
              <div className="flex flex-col rounded-lg md:max-w-5xl md:flex-row mm">
                <center>
                  <div className="flex flex-col p-6">
                    <p>
                      <h5 className="mb-2 text-3xl leading-tight text-black">
                        <strong>MEET OUR TEAM</strong>
                      </h5>
                    </p>
                    <p className="mb-4 text-xl leading-tight text-black">
                    Our entire team of mavericks are dedicated to offer packaging solutions and support your business.
                    </p>
                  </div>
                </center>
              </div>
            </center>
          </div>
          <br></br>
          </div>
        
          <div className="io" >
            {/* <center><img src='./popo.jpeg' alt="Loading"></img></center> */}
           {/* <img src="https://s3-alpha-sig.figma.com/img/688c/1dfa/e642076d55e4e4759eb7174f0f65f42b?Expires=1694995200&Signature=BReTl6LL1sOswmno5ryCVGBYZCGZS0LWSY4~xTYD7ZmyY4G9Gy4oAf4rIFVhpOAnoGihJ63ywqQ~v83fR5Cf9f70ie0L~qlLFPJEgELtXApAGUm4I7KLbNNTqZORhlkU3McxPKhBIZOWzkqHBVy~A3yXAGRpcsgC1gHH-JXbekHgvYtAO9od1cFQ~xqxFaoz8vp81N0UvLNuMlmABLwg~oSQvXUcn0j3-oHwMr4G6p4RiEF8IzuYhTdh-rNY9Ccjq~SmicZeLfoWZmETMe8qHUc6pJcOdJZaTuf5y-CwvHa6kE3ELQ02Ned20Dv~DNLWZfsN2IzN-RXdHTHkq2ZNrw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"  alt="loading failed" width="100%" ></img> */}
           <img className= "aws" src= {sdd}  alt="loading failed" width="100%" ></img>
          </div><br></br>
         <br></br>
          <h5 className="mb-2 text-3xl leading-tight text-black"><center>FAQ</center></h5><br></br>
    {/* </div> */}
          <div className="flex flex-col p-6 container">
          
         
            {/* <p>
              <h5 className="mb-2 text-3xl leading-tight text-black vb">FAQ</h5>
            </p>
            <br></br>
            <FaqItem
          question="What is Lorem Ipsum?"
          answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        />
            <p className="mb-4 text-sm leading-tight text-black lm faq-container">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </p>
            <p className="mb-4 text-sm leading-tight text-black lm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.If
              you are a Hookah business, please join us and help us defend and
              protect your business, our culture and community.
            </p>
            <br></br>
            <p className="mb-4 text-sm leading-tight text-black lm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </p>
            <br></br>
            <p className="mb-4 text-sm leading-tight text-black lm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </p> */}
            <div className="cv">
            <FaqItem
          question="What is BFS and FFS Technology, and how does It work? "
          answers={["Blow-Fill-Seal (BFS) and Form-Fill-Seal (FFS) technologies are advanced manufacturing processes for aseptic packaging. BFS involves forming a container, filling it with the product, and sealing it in one continuous operation. FFS, on the other hand, is a broader term encompassing various methods of forming and filling containers before sealing.",]}
          initiallyOpen={true}
        />
           <FaqItem
          question="How energy-efficient are your BFS and FFS machines? "
          answers={["We prioritize energy efficiency in our machine designs. Our systems incorporate advanced technologies to minimize energy consumption, contributing to both cost savings and environmental sustainability.",]}
          initiallyOpen={true}
        />
           <FaqItem
          question="What sets your BFS and FFS machines apart from others in the market?"
          answers={["Our machines stand out due to their state-of-the-art technology, customizable features, and a commitment to precision and reliability. We prioritize innovation to ensure our clients have a competitive edge in their respective industries.",]}
          initiallyOpen={true}
        />
           <FaqItem
          question="Can your machines be customized for specific production needs? "
          answers={["Yes, we offer customization options to tailor our machines to the unique production requirements of our clients. Our engineering team works closely with clients to understand their needs and deliver bespoke solutions.",]}
          initiallyOpen={true}
        />
          <FaqItem
          question="Do you provide turnkey solutions for BFS and FFS projects? "
          answers={["Absolutely. We provide comprehensive turnkey solutions, from initial design and manufacturing to installation and ongoing support. Our turnkey approach ensures a seamless and efficient process for our clients.",]}
          initiallyOpen={true}
        />
          <FaqItem
          question="What quality control measures are implemented in your manufacturing process?"
          answers={["Our manufacturing process adheres to rigorous quality control standards. We implement thorough testing and inspection protocols at every stage to guarantee the highest quality and performance of our BFS and FFS machines..",]}
          initiallyOpen={true}
        />
        </div>
         </div>
          </div>
      <Footer/>
    </div>
  );
}

export default AboutUs;
