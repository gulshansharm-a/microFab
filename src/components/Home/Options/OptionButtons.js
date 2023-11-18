import React, { useState } from "react";
import data from "./OptionsData.json";
import blow from '../../../assets/Options/BFS/blow.svg'
import fill from '../../../assets/Options/BFS/fill.svg'
import seal from '../../../assets/Options/BFS/seal.svg'

export default function OptionButtons() {
  const [chosenOptionIndex, setChosenOptionIndex] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const handleOptionClick = (index) => {
    setChosenOptionIndex(index);
    setCurrentStep(0); // Reset step index when changing the option
  };

  const handleNextStep = () => {
    if (currentStep < data[chosenOptionIndex].steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  console.log(data[currentStep].img);

  return (
    <div className="w-screen font-['ClashDisplay'] md:p-10 md:px-[100px] p-8 gap-8 flex flex-col place-items-center justify-center">
      {/* buttons */}
      <div className="flex flex-row w-full">
        <div className="flex flex-row gap-10 md:w-full justify-center">
          {data.map((item, index) => (
            <button
              key={index}
              className={`border rounded-md py-2 px-4 text-[20px] font-[800] h-[50px] w-[90%] md:w-[15%] ${
                chosenOptionIndex === index
                  ? "bg-[#8AA6AA] text-white border-[#8AA6AA] hover:bg-[#8AA6AA]"
                  : "bg-white text-[#8AA6AA] border-[#8AA6AA]"
              }`}
              onClick={() => handleOptionClick(index)}
            >
              {item.option}
            </button>
          ))}
        </div>
      </div>

      {/* question */}
      <div className="text-[#111111] text-3xl font-medium leading-normal">
        {data[chosenOptionIndex].question}
      </div>

      {/* title content */}
      <div className="text-center text-[20px] leading-9 font-normal">
        {data[chosenOptionIndex].explanation}
      </div>

      {/* steps content */}
      <div className="">
        {/* left */}
        <div className="">
          {/* step content */}
          <div>
            {data[chosenOptionIndex].steps.map((step, index) =>
              index === currentStep ? (
                <div key={index}>
                  <p>Step: {step.step}</p>
                  <p>{step.content}</p>
                  {/* <img src={step.img} alt={`Step ${index + 1}`} /> */}
                  <img src={blow} alt={`Step ${index + 1}`} />
                </div>
              ) : null
            )}
          </div>

          {/* step navigation buttons */}
          <div>
            <button onClick={handlePrevStep} disabled={currentStep === 0}>
              Previous Step
            </button>
            <button
              onClick={handleNextStep}
              disabled={currentStep === data[chosenOptionIndex].steps.length - 1}
            >
              Next Step
            </button>
          </div>
        </div>

        {/* right img */}
        <div className=""></div>
      </div>
    </div>
  );
}
