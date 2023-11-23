import React from "react";
import './services.css';
import pro from "./images/Frame 21516.svg";
import pro2 from "./images/Frame 21518.svg";
import pro3 from "./images/Frame 21519.svg";
import pro4 from "./images/Frame 21520.svg";
import MedicalDevicesCard from "../MedicalDevices/MedicalDevicesCard";
import Footer from "../Common/Footer/Footer";
import ServicesJson from "./Services.json";
import ServicesJson1 from "./services1.json"
export default function Service() {
  return (
    <>
      {/* <NavbarDefault /> */}
      <br></br><br></br><br></br><br></br>
      <div className="serv1">
        <div>
          <br></br><br></br>
        <h3 className="mb-4 pb-4 text-3xl leading-tight text-[#8AA6AA] serv3">
        Service Solutions
          </h3>
          <br></br><br></br><br></br>

          <h3 className="mb-4  pb-4 text-4xl leading-tight text-black">
          Experience the difference with us as firmly stand with our motto to offer incredible services every step of the way
          </h3>

          <h6 className="text-2xs leading-tight text-black serv2" color="clack">
          While we dabble in providing exceptional customer service, you can connect with us for project management and contract manufacturing.
          </h6>
          <br></br><br></br><br></br><br></br>
          <div class="serv4"></div>
          <br></br>
          

          <div className="flex flex-col rounded-lg text-black md:max-w-5xl md:flex-row">
  <img
    className="h-64 w-full rounded-t-lg object-cover  md:h-auto md:w-64 md:rounded-none md:rounded-l-lg order-2 mn md:order-"
    src={pro}
    alt=""
  />
  <div className="flex flex-col justify-start order-1 md:order-1">
    <h3 className="mb-2 pb-4 text-6xl leading-tight text-black">
    Project Construction & Management </h3>
    <h6 className="text-2xs leading-tight text-black zx " color="clack">
          While you communicate your project requirements with us, our agile and proactive team always directs and supervises project implementation right from the nascent and initial stage. Ultimately, our strength lies in customer satisfaction and meeting the business needs for a viable project with regards to the budget and the functionality.
          </h6>
    
  </div>
</div>
<br></br><br></br>
</div></div>
<div className="md:pl-6 flex flex-wrap md:gap-5 md:gap-y-4 md:p-0 p-8 md:place-items-start place-items-center md:justify-start justify-center">
        {ServicesJson.map((device, index) => (
          <MedicalDevicesCard
            key={index} // Ensure each card has a unique key
            heading={device.heading}
            content={device.content}
            img={device.img}
          />
        ))}
      </div>
      <br></br><br></br>
      <div className="serv1">
        <div>
          <div class="serv4"></div>
          <br></br>
          

          <div className="flex flex-col rounded-lg text-black md:max-w-5xl md:flex-row">
  <img
    className="h-120 w-full rounded-t-lg object-cover  md:h-auto lg:w-120 md:w-96 md:rounded-none md:rounded-l-lg order-2 mmn md:order-"
    src={pro2}
    alt=""
  />
  <div className="flex flex-col justify-start order-1 md:order-1">
    <h3 className="mb-2 pb-4 text-6xl leading-tight text-black">
    Contract manufacturing</h3>
    <h6 className="text-2xs leading-tight text-black" color="clack">
    When the entire gamut of production operational activities becomes cumbersome, you can approach us to deal with everything from scratch. With MicroFab, your company is sure to save money, produce more products, and gain access to more resources. As we cater to different businesses, our mavericks are adept at maintaining machinery and the tools. We also shoulder every responsibility while designing products. </h6>
    
  </div>
</div>
<br></br>
          

          <div className="flex flex-col rounded-lg text-black md:max-w-5xl md:flex-row">
  <img
    className="h-96 w-full rounded-t-lg object-cover  md:h-auto md:w-96 md:rounded-none md:rounded-l-lg order-2 bbv md:order-"
    src={pro4}
    alt=""
  />
    <img
    className="h-64 w-full rounded-t-lg object-cover  md:h-auto md:w-120 md:rounded-none md:rounded-l-lg order-2 bv md:order-1"
    src={pro3}
    alt=""
  />
</div>
<br></br><br></br><br></br><br></br>
          <div class="serv4"></div>
          <br></br>
          

          <div className="flex flex-col rounded-lg text-black md:max-w-5xl md:flex-row">
  <img
    className="h-64 w-full rounded-t-lg object-cover  md:h-auto md:w-64 md:rounded-none md:rounded-l-lg md:order-1"
    src={pro}
    alt=""
  />
  <div className="flex flex-col justify-start order-1 md:order-2 xc">
    <h3 className="mb-2 pb-4 text-6xl leading-tight text-black">
    Advisory Services </h3>
    <h6 className="text-2xs leading-tight text-black" color="clack">
    When perplexity is still reigning when you gear up to be future ready, we advise on the technology that you need to incorporate in your organization. Eventually, the machinery must lower down the operational costs and be capable of producing an astounding number of finished products. After all, we provide packaging solutions for you to attain recognition in the competitive world. </h6>
    
  </div>
</div>  
</div></div>
<br></br><br></br><br></br>
<div className="md:pl-6 flex flex-wrap md:gap-5 md:gap-y-4 md:p-0 p-8 md:place-items-start place-items-center md:justify-start justify-center">
        {ServicesJson1.map((device, index) => (
          <MedicalDevicesCard
            key={index} // Ensure each card has a unique key
            heading={device.heading}
            content={device.content}
            img={device.img}
          />
        ))}
      </div>

      
    
    <Footer />
          </>
  )
};