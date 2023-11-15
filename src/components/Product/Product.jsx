import React from "react";
import './prod.css';
import pro from "./images/Frame 21516.svg";
import pro2 from "./images/Frame 21518.svg";
import pro3 from "./images/Frame 21519.svg";
import pro4 from "./images/Frame 21520.svg";
import s1 from "./images/Rectangle 47.svg";
import s2 from "./images/Rectangle 48.svg";
import s3 from "./images/Rectangle 49.svg";
import a1 from "./images/Frame 21515.svg";
import a2 from "./images/Frame 21516 (1).svg";
import b1 from "./images/Rectangle 49 (1).svg";
import b2 from "./images/Rectangle 47 (1).svg";
import b3 from "./images/Rectangle 48 (1).svg";
import MedicalDevicesCard from "../MedicalDevices/MedicalDevicesCard";
import Footer from "../Common/Footer/Footer";
import TurnKeySolutionsData from "./prodt.json";
export default function Product() {
  return (
    <>
      {/* <NavbarDefault /> */}
      <br></br><br></br><br></br><br></br>
      <div className="serv1">
          <br></br><br></br>
        <h3 className="mb-4 pb-4 text-3xl leading-tight text-[#8AA6AA] serv3">
        Product solutions
          </h3>
          <br></br><br></br><br></br>

          <h3 className="mb-4  pb-4 text-4xl leading-tight text-black">
          Our service can be a peace of mind when you’re very much concerned about machine maintenance.</h3>

          <h6 className="text-2xs leading-tight text-black serv2" color="clack">
          While we dabble in providing exceptional customer service, you can connect with us for project management and contract manufacturing.
          </h6>
          <br></br><br>
          </br>
          </div>
          
          <h3 className="mb-4  pb-4 text-4xl leading-tight text-black vb">
         Machines</h3>
         <h6 className="text-xl leading-tight text-black vbb" color="clack">
          While we dabble in providing exceptional customer service, you can connect with us for project management and contract manufacturing.
          </h6>
          <br></br>
          
          <div className="md:pl-16 flex flex-wrap md:gap-4 md:gap-y-8 md:p-0 p-8 md:place-items-start place-items-center md:justify-start justify-center">
        {TurnKeySolutionsData.map((device, index) => (
          <MedicalDevicesCard
            key={index} // Ensure each card has a unique key
            heading={device.heading}
            content={device.content}
            img={device.img}
          />
        ))}
      </div>
          <br></br>


          <br></br>
          <div className="serv1">
          <div class="serv4"></div>
          <br></br>
          

          <div className="flex flex-col rounded-lg text-black md:max-w-5xl md:flex-row">
  <img
    className="h-48 w-full rounded-t-lg object-cover  md:h-auto md:w-48 md:rounded-none md:rounded-l-lg md:order-1"
    src={s3}
    alt=""
  />
   <img
    className="w-full df rounded-t-lg object-cover  md:h-auto md:w-64 md:rounded-none md:rounded-l-lg md:order-1"
    src={s2}
    alt=""
  />
   <img
    className="w-full rounded-t-lg object-cover  md:h-auto md:w-64 md:rounded-none md:rounded-l-lg md:order-1 as"
    src={s1}
    alt=""
  />
  <div className="flex flex-col justify-start order-1 md:order-2 xc">
    <h3 className="mb-2 pb-4 text-6xl leading-tight text-black bh">
    After sale
service </h3>
    <h6 className="text-2xs leading-tight text-black serv7" color="clack">
    In today’s era, it’s essential to maintain even the best technology. So, with our comprehensive services, you can stay confident that the system offers better quality and runs smoothly and economically. While we assure you that the machine functions smoothly, our team also helps the workforce to know more about the processes that drive the production flow.
  </h6></div>
</div>  
</div>
<br></br>
<br></br>
<br></br>
<div class="serv4 serv1"></div>
          <br></br>
          

          <div className="flex flex-col rounded-lg text-black md:max-w-5xl md:flex-row">
  <img
    className="h-48 w-full rounded-t-lg object-cover  md:h-auto md:w-96 md:rounded-none md:rounded-l-lg md:order-1"
    src={a1}
    alt=""
  />
   <img
    className="w-full  rounded-t-lg object-cover ghj md:h-auto md:w-full md:rounded-none md:rounded-l-lg md:order-3"
    src={a2}
    alt=""
  />
 
  <div className="flex flex-col justify-start order-2 md:order-2 xd">
    <h3 className="mb-2 pb-4 text-6xl leading-tight text-black ">
    Machine
upgradisation</h3>
    <h6 className="text-xl leading-tight text-black " color="clack">
    When you think about machine upgrades and modernization, we walk miles ahead to optimize the older models with significant modifications. This, eventually, enhances the overall efficiency and the quality of the products. It may sound easy to replace the existing components. But, if there are no suitable components, then our experienced engineers develop special solutions.  </h6></div>
</div>  
<div className="serv1">
        <div>
        <br></br><br></br><br></br><br></br><br></br>
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
    <h6 className="text-2xs leading-tight text-black " color="clack">
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
<br></br><br></br>
</div>
<br></br><br></br><br></br>
          <div className="serv1">
          <div class="serv4"></div>
          <br></br>
          

          <div className="flex flex-col rounded-lg text-black md:max-w-9xl md:flex-row">
  <img
    className="vf w-full rounded-t-lg object-cover ee  md:h-auto md:w-48 md:rounded-none md:rounded-l-lg md:order-3"
    src={b1}
    alt=""
  />
   <img
    className="w-full ml-96 dff rounded-t-lg object-cover  md:h-auto md:w-64 md:rounded-none md:rounded-l-lg md:order-3"
    src={b2}
    alt=""
  />
   <img
    className="w-full m-12 ase rounded-t-lg object-cover md:h-auto md:w-64 md:rounded-none md:rounded-l-lg md:order-3"
    src={b3}
    alt=""
  />
  <div className="flex flex-col justify-start order-1 md:order-1 xv">
    <h3 className="mb-2 pb-4 text-7xl leading-tight text-black hj">
    Medical devices</h3>
    <h6 className="text-xl leading-tight text-black " color="clack">
  
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt . </h6>
  <button
              type="submit"
              className="bg-[#8AA6AA] mt-4 md:mt-4 text-white px-4 py-2 md:w-[80%] w-[90%] rounded-md"
            >
              KNOW MORE ->
            </button>
  </div>
</div>  

</div>
</div>

<Footer />

   
          </>
  )
};