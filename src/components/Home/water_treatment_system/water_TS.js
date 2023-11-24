import React, { useEffect, useState } from "react";
import "../../../App.css";
import mac1 from "../../../assets/water_TS/mac1.svg";
import mac2 from "../../../assets/water_TS/mac2.svg";
import mac3 from "../../../assets/water_TS/mac3.svg";
import machine from "../../../assets/water_TS/machine.svg";
import STO from "../../../assets/water_TS/storage_tank-outline.svg";
import sync from "../../../assets/water_TS/sync.svg";
import WCO from "../../../assets/water_TS/water_check_outline.svg";
import water_polo from "../../../assets/water_TS/water_polo.svg";
import data from "./water_TS_Data.json";

const WaterTS = () => {
  const images = {
    mac1,
    mac2,
    mac3,
  };

  const [index, setIndex] = useState(0);
  const [borderPercentage, setBorderPercentage] = useState("5%"); // Initial border percentage

  useEffect(() => {
    const interval = setInterval(() => {
      // Update index every 2 seconds
      setIndex((prevIndex) => (prevIndex < 3 ? prevIndex + 1 : 0));
    }, 2000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  useEffect(() => {
    // Calculate border percentage based on index value
    switch (index) {
      case 0:
        setBorderPercentage("5%");
        break;
      case 1:
        setBorderPercentage("25%");
        break;
      case 2:
        setBorderPercentage("50%");
        break;
      case 3:
        setBorderPercentage("95%");
        break;
      default:
        setBorderPercentage("5%");
        break;
    }
  }, [index]);

  return (
    <div className="relative w-[100%] flex flex-col md:flex-row md:justify-center place-items-center">
      <div className="relative font-mono flex justify-center place-items-center md:w-[600px] w-[300px] h-[300px] md:h-[600px] rounded-full border border-solid border-[rgba(190, 190, 190, 0.20)] shadow-xl">
        <div className="flex justify-center place-items-center md:h-[450px] md:w-[450px] w-[250px] h-[250px]  rounded-full  border border-solid border-[rgba(190, 190, 190, 0.20)] shadow-xl">
          <div className="border-[#8AA6AA] flex flex-col justify-center place-items-center md:h-[250px] md:w-[250px] w-[200px] h-[200px] rounded-full border border-solid border-[rgba(190, 190, 190, 0.20)] shadow-xl">
            <p className="md:text-[25px] font-bold">Turnkey-Lines</p>
            <p className="md:text-[15px] text-center font-bold px-2">
              A vast range of machinery that we are proud about.
            </p>
          </div>
        </div>
      </div>
      <div className="md:hidden flex flex-row overflow-x-auto ms-[10px] mt-[30px]">
        <div className="md:block flex flex-row gap-4">
          <img
            src={machine}
            alt="WTS"
            className="md:block md:absolute md:rounded-none rounded-[19px] md:h-[200px] md:w-[200px] h-[150px] w-[150px] left-[20px] top-0"
          ></img>
          <div className="custom-font md:absolute md:left-[20px] md:top-[250px] md:h-[200px] md:w-[300px] md:text-[10px]">
            <p className="h-[150px] w-[150px] text-[12px]">
              Our advanced water purification system is a turnkey solution under
              the FFS and the BFS machinery. With the system, you can ensure
              that you obtain pristine water. Whether you need water for a
              liquid solution or for cleaning equipment, you will surely be able
              to source clean water, thereby enhancing the production standards.
            </p>
          </div>
          <img
            src={machine}
            alt="WTS"
            className=" md:hidden md:absolute md:rounded-none rounded-[19px] md:h-[200px] md:w-[200px] h-[150px] w-[150px] left-[20px] top-0"
          ></img>
          <div className="md:hidden custom-font md:absolute h-[150px] w-[150px] md:left-[20px] md:top-[250px] md:h-[200px] md:w-[300px] md:text-[10px]">
            <p className="h-[150px] w-[150px] text-[11px]">
              Our advanced water purification system is a turnkey solution under
              the FFS and the BFS machinery. With the system, you can ensure
              that you obtain pristine water. Whether you need water for a
              liquid solution or for cleaning equipment, you will surely be able
              to source clean water, thereby enhancing the production standards.
            </p>
          </div>
        </div>
      </div>

      <img
        src={images[data[index].imgl]}
        alt="WTS"
        className="hidden md:block md:absolute md:rounded-none rounded-[19px] md:h-[200px] md:w-[200px] h-[150px] w-[150px] left-[20px] top-0"
      ></img>
      <div className="hidden md:block custom-font md:absolute md:left-[20px] md:top-[250px] md:h-[200px] md:w-[300px] md:text-[10px]">
        <p className="h-[150px] w-[250px] text-[14px]">{data[index].content}</p>
      </div>

      {/* img above water treatment system */}
      <img
        src={images[data[index].imgr]}
        className="hidden md:block md:absolute md:rounded-none rounded-[19px] md:h-[200px] md:w-[200px] h-[150px] w-[150px] right-[8%] bottom-[30%]"
      ></img>

      {/* four images in circle */}
      <img
        src={WCO}
        alt="WCO"
        className="md:absolute absolute right-[47%] top-[4%] md:right-[49%] md:top-[20%] rounded-full p-0.5 bg-[#8AA6AA] h-[20px] md:h-[40px]"
      ></img>
      <img
        src={sync}
        alt="sync"
        className="md:absolute absolute right-[18%] top-[30%] md:right-[48%] md:top-[73%] rounded-full md:p-2 p-0.5 h-[20px] bg-[#8AA6AA] md:h-[40px]"
      ></img>
      <img
        src={water_polo}
        alt="Water polo"
        className="md:absolute absolute right-[47%] top-[53%] md:right-[37%] md:top-[49%] rounded-full md:p-2 p-0.5 h-[20px] bg-[#8AA6AA] md:h-[40px]"
      ></img>
      <img
        src={STO}
        alt="STO"
        className="md:absolute absolute right-[76%] top-[30%] md:right-[60%] md:top-[49%] rounded-full md:p-2 p-0.5 h-[20px] bg-[#8AA6AA] md:h-[40px]"
      ></img>

      <p className="md:block w-[300px] hidden md:text-[30px] font-bold text-[#3659FA] md:absolute bottom-[100px] right-[100px]">
        {data[index].heading}
      </p>
    </div>
  );
};

export default WaterTS;
