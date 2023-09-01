import "../../../App.css";

export default function Analytics() {
  return (
    <div className="md:ml-[10%] m-6 w-full flex flex-col md:justify-center md:place-items-start ">
      <p className="text-[#8AA6AA] font-bold md:text-[35px] text-[30px] md:mt-[3%]">
        Analytics
      </p>
      <div className="w-full flex flex-col md:justify-start ">

        {/* top */}
        <div className="md:w-[80%] w-[80%] flex md:flex-row flex-col md:justify-between gap-10">
          <div>
            <h1 className="md:text-[80px] text-[50px] flex flex-row font-[1000]">
              200 <p className="text-[#8AA6AA]">+</p>
            </h1>
            <p className="custom-font text-[15px]">
              Premium moulds from Germany, Italy and US Origins
            </p>
          </div>
          <div className="">
            <h1 className="md:text-[80px] text-[50px] flex flex-row font-[1000]">
              50<p className="text-[#8AA6AA] font-serif">,</p>000
            </h1>
            <p className="custom-font">
              Premium moulds from Germany, Italy and US Origins
            </p>
          </div>
        </div>

      {/* bottom */}
        <div className="md:w-[80%] w-[80%] mt-[30px]">
          <h1 className="md:text-[80px] text-[50px] flex flex-row font-[1000]">
            8<p className="text-[#8AA6AA] font-mono">+</p>Countries
          </h1>
          <p className="custom-font">
            Our Global footprint spans over Algeria, Ghana, Nigeria, South
            Africa, Malaysia and many more
          </p>
        </div>
      </div>
    </div>
  );
}
