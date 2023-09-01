import world from "../../../assets/Who_are_we/world.svg";
import "../../../App.css";

export default function Who_are_we() {
  return (
    <div className="custom-font flex md:flex-row flex-col md:justify-between">
      <div className="md:hidden text-center p-4">
        <p className="md:text-[35px] text-[35px] font-bold">Who Are We?</p>
        <p className="md:text-[12px] md:w-[80%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus.
        </p>
      </div>

      <div className="md:w-[50%] ">
        <img src={world} className=""></img>
      </div>

      <div className="w-full flex md:flex-col p-10 flex-col">
        {/* for desktop view */}
        <div className="hidden md:block">
          <p className="md:text-[35px] font-bold">Who Are We?</p>
          <p className="md:text-[12px] md:w-[80%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus.
          </p>
        </div>

        {/* desktop view */}
        <div className="md:flex md:flex-col overflow-x-auto">
          {/* 21 countries */}
          <div className="flex md:flex-row gap-4 md:p-20 flex-row">
            {/* line */}
            <div className="hidden md:block md:w-[2px] w-[10px] h-[170px] md:h-[80px] bg-[#8AA6AA] gap-4"></div>
            <div className="md:w-[25%] md:text-[12px] w-full">
              <p className="md:text-[20px] text-[25px]">21+ Countries</p>
              <p>We have our presence in 21+ Countries</p>
            </div>
            {/* line */}
            <div className="md:w-[2px] w-[10px] h-[170px] md:h-[80px] bg-[#8AA6AA] gap-4"></div>
            <div className="md:w-[25%] md:text-[12px]">
              <p className="md:text-[20px] text-[25px]">21+ Countries</p>
              <p className="">We have our presence in 21+ Countries</p>
            </div>
          </div>

          {/* this is hidden in mobile view */}
          <div className="md:flex md:flex-row gap-4 md:p-20 hidden">
            {/* line */}
            <div className="w-[2px] md:h-[80px] bg-[#8AA6AA] gap-4"></div>
            <div className="md:w-[25%] md:text-[12px]">
              <p className="md:text-[20px] ">21+ Countries</p>
              <p>We have our presence in 21+ Countries</p>
            </div>
            {/* line */}
            <div className="w-[2px] md:h-[80px] bg-[#8AA6AA] gap-4"></div>
            <div className="md:w-[25%] w-[90%] md:text-[12px]">
              <p className="md:text-[20px]">21+ Countries</p>
              <p>We have our presence in 21+ Countries</p>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}

// import world from "../../../assets/Who_are_we/world.svg";
// import "../../../App.css";

// export default function Who_are_we() {
//   return (
//     <div className="custom-font flex md:flex-row flex-col w-full md:justify-between">
//       <div className="md:w-[50%] ">
//         <img src={world} className=""></img>
//       </div>

//       <div className="flex md:flex-col p-10 flex-col">
//         <div className="">
//           <p className="md:text-[35px] font-bold">Who Are We?</p>
//           <p className="md:text-[12px] md:w-[80%]">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
//             turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
//             nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
//             tellus elit sed risus. Maecenas eget condimentum velit, sit amet
//             feugiat lectus.
//           </p>
//         </div>

//         <div className="flex md:flex-col md:row">
//           {/* 21 countries */}
//           <div className="flex md:flex-row gap-4 md:p-20">

//             {/* line */}
//             <div className="w-[2px] md:h-[80px] bg-[#8AA6AA] gap-4"></div>
//             <div className="md:w-[25%] md:text-[12px]">
//               <p className="md:text-[20px]">21+ Countries</p>
//               <p>We have our presence in 21+ Countries</p>
//             </div>
//             {/* line */}
//             <div className=" w-[2px] md:h-[80px] bg-[#8AA6AA] gap-4"></div>
//             <div className="md:w-[25%] md:text-[12px]">
//               <p className="md:text-[20px]">21+ Countries</p>
//               <p>We have our presence in 21+ Countries</p>
//             </div>

//           </div>
//           <div className="flex md:flex-row gap-4 md:p-20">

//             {/* line */}
//             <div className="w-[2px] md:h-[80px] bg-[#8AA6AA] gap-4"></div>
//             <div className="md:w-[25%] md:text-[12px]">
//               <p className="md:text-[20px]">21+ Countries</p>
//               <p>We have our presence in 21+ Countries</p>
//             </div>
//             {/* line */}
//             <div className="w-[2px] md:h-[80px] bg-[#8AA6AA] gap-4"></div>
//             <div className="md:w-[25%] md:text-[12px]">
//               <p className="md:text-[20px]">21+ Countries</p>
//               <p>We have our presence in 21+ Countries</p>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
