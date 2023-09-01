import React from "react";
import img1 from '../../../assets/Happy_customers/img1.svg'
import img2 from '../../../assets/Happy_customers/img2.svg'
import img3 from '../../../assets/Happy_customers/img3.svg'

export default function HappyCustomers() {
  return (
    <div className="flex justify-between p-10">

      {/* left */}
      <div className="flex flex-row justify-center place-items-center items-center w-1/2 relative z-1"> {/* Add z-1 to create a stacking context */}
        
        {/* images */}
        <div className="relative z-0">
            <img src={img1} className="w-[120px] absolute z-10"></img>
            <img src={img2} className="w-[120px] absolute z-20"></img>
            <img src={img3} className="w-[120px] absolute z-30"></img>
        </div>

        {/* 1 MIL + */}
        <div>
            {/* Add content here */}
        </div>
      </div>


      {/* right */}
      <div className="flex flex-col items-center w-1/2 relative">
        {/* Add content here */}
      </div>
    </div>
  );
}
