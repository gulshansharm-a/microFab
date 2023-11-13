import one from "../../../assets/Home_productSoltuions/one.svg";
import two from "../../../assets/Home_productSoltuions/two.svg";
import three from "../../../assets/Home_productSoltuions/three.svg";
import { tint } from "@cloudinary/url-gen/actions/adjust";

export default function ProductSolutions() {
  return (
    <div>
      <div className=" md:p-10 p-4 md:px-[8%] flex md:flex-row-reverse flex-col justify-between place-items-center md:gap-10 gap-10">
        {/* left content */}
        <div className="md:w-[70%] flex flex-col md:gap-6 gap-4">
          <div className="bg-primary h-1 w-5"></div>
          <div>
            <p className="font-bold text-5xl tracking-widest">
              Product <br></br>Solutions
            </p>
          </div>
          <div className="w-[90%]">
            <p className="font-thin text-[#67675F] text-[18px] md:leading-7 md:tracking-wide">
              In today’s era, it’s essential to maintain even the best
              technology. So, with our comprehensive services, you can stay
              confident that the system runs smoothly. To address the concerns
              swiftly, we also offer support to provide you with timely
              solutions.
            </p>
          </div>
        </div>

        {/* img */}
        <div className="md:w-[30%] rounded-[20px] h-[400px] flex gap-5 flex-row">
          <div className="rounded-lg w-[50%]">
            <img
              src={one}
              className="object-cover rounded-lg h-full w-full"
              alt="top"
            ></img>
          </div>
          <div className="flex flex-col w-[50%] gap-5">
            <div className="h-[30%]">
              <img
                src={two}
                className="object-cover rounded-lg h-full w-full"
                alt="top"
              ></img>
            </div>
            <div className="h-[70%]">
              <img
                src={three}
                className="object-cover rounded-lg   h-full w-full"
                alt="top"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
