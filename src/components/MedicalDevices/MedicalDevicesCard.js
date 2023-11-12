import React, { useState } from "react";
import top1 from "../../assets/medicalDevices/top.svg";
import { Icon } from "@iconify/react";
import col1 from '../../assets/medicalDevices/col1.svg'
import col2 from '../../assets/medicalDevices/col2.svg'
import col3 from '../../assets/medicalDevices/col3.svg'
import col4 from '../../assets/medicalDevices/col4.svg'

export default function MedicalDevicesCard({ img, heading, content }) {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  const images = {
    col1,
    col2,
    col3,
    col4,
};

  return (
    <div
      className={`md:m-2 lg:w-[22%] md:w-[250px]  flex flex-col shadow-lg rounded-[20px]`}
      onClick={toggleContent}
    >
      <div className="md:h-[190px] w-full">
        <img
          src={images[img]}
          alt="Medical Device"
          className="w-full h-full rounded-[16px] object-cover"
        />
      </div>
      <div className="md:h-[60px] flex flex-row justify-between place-items-center p-5">
        <h3 className="text-[18px] font-semibold">{heading}</h3>
        {showContent ? (
          <div className="bg-primary rounded-full text-white p-2">
            <Icon icon="majesticons:arrow-down" />
          </div>
        ) : (
          <div className="bg-primary rounded-full text-white p-2">
            <Icon icon="majesticons:arrow-right" className="" />
          </div>
        )}
      </div>
      {showContent && (
        <p className="text-[14px] font-thin opacity-70 px-5 pb-5">{content}</p>
      )}
    </div>
  );
}
