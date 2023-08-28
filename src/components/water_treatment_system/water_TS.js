import React from "react";
import "../../App.css";
import machine from "../../assets/water_TS/machine.svg";
import WTS from "../../assets/water_TS/water_treatment_system.svg";

const WaterTS = () => {
  return (
    <div className="relative border-2 w-[100%]">
      <img src={machine} alt="WTS" className="absolute left-0 top-0"></img>
      <div className="relative font-mono flex justify-center place-items-center md:w-[600px] md:h-[600px] rounded-full border border-solid border-[rgba(190, 190, 190, 0.20)] shadow-xl">
        <div className="flex justify-center place-items-center md:h-[450px] md:w-[450px] rounded-full  border border-solid border-[rgba(190, 190, 190, 0.20)] shadow-xl">
          <div className="flex md:flex-col md:justify-center md:place-items-center md:h-[250px] md:w-[250px] rounded-full border border-solid border-[rgba(190, 190, 190, 0.20)] shadow-xl">
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
