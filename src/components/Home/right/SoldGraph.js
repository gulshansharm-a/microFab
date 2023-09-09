import sold from "../../../assets/SoldGraph/SoldGraph.svg";
import "../../../App.css";

export default function SoldGraph() {
  return (
    <div className="custom-font w-full h-full flex flex-col justify-between bg-black rounded-[20px] md:mr-4 mr-4 ml-3">
      <div></div>
      <div className="bg-white rounded-[15px] m-1 flex flex-row justify-between p-2 pl-5">
        <p className="font-extrabold text-[18px]">Machinery sold over <br></br>years</p>
        <div className="flex justify-center place-items-center">
          <img src={sold} className="h-10"></img>
        </div>
      </div>
    </div>
  );
}
