import React from "react";
import "../../App.css";
import machine from "../../assets/water_TS/machine.svg";
import WTS from "../../assets/water_TS/water_treatment_system.svg";

const WaterTS = () => {
  return (
    <div className="relative border-2 w-[100%] flex flex-col md:flex-row justify-center">
      <img src={machine} alt="WTS" className="md:absolute h-[200px] w-[200px] left-[20px] top-0"></img>
      <div className="relative font-mono flex justify-center place-items-center md:w-[600px] w-[300px] h-[300px] md:h-[600px] rounded-full border border-solid border-[rgba(190, 190, 190, 0.20)] shadow-xl">
        <div className="flex justify-center place-items-center md:h-[450px] md:w-[450px] w-[250px] h-[250px]  rounded-full  border border-solid border-[rgba(190, 190, 190, 0.20)] shadow-xl">
          <div className="flex md:flex-col md:justify-center md:place-items-center md:h-[250px] md:w-[250px] w-[200px] h-[200px] rounded-full border border-solid border-[rgba(190, 190, 190, 0.20)] shadow-xl">
            <p className="md:text-[25px] font-bold">Turnkey-Lines</p>
            <p className="md:text-[15px] text-center">
              Our vast range of machinery
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterTS;
