import Header from "./components/Header/Header";
import Machine_Frame from "./components/machine_frame/Machine_frame";
import Why_Microfab from "./components/right/Why_MicroFab";
import BFS from "./components/right/BFS_FFS";
import Moulds from "./components/right/Moulds";
import sold_img from "./assets/Machinary_sold_over.svg";
import Analytics from "./components/Analytics/Analytics";
import OptionsButtons from "./components/Options/OptionButtons";
import WaterTS from "./components/water_treatment_system/water_TS";
import Footer from "./components/Footer/Footer";
import Who_are_we from "./components/Who_are_we/Who_are_we";
import ContactForm from "./components/Contact_form/Contact_form";
import GetinTouchWithUs from "./components/GetinTouchWithUs/GetinTouchWithUs";
import HomeArticle from "./components/Home_articles/HomeArticles";

export default function Home() {
  return (
    <div className="md:h-screen h-screen overflow-x-hidden md:overflow-x-hidden">
      {/* <Header /> */}
      <div className="flex flex-col">
        <div className="md:h-screen md:w-screen h-[1400px] w-[100%] md:flex md:flex-row flex flex-col">
          <Machine_Frame />
          <div className=" md:m-0 m-4 flex justify-center place-items-center flex-col md:mt-[75px] mt-[5px]">
            <Why_Microfab />

            <div className="border-2 w-[100%] flex flex-row justify-normal md:justify-between">
              <div className="flex flex-col justify-between">
                <BFS content="BFS" />
                <BFS content="FFS" />
              </div>
              <div className="">
                <Moulds />
              </div>
            </div>

            <div>
              <img src={sold_img} className="h-[250px] w-[250px] mt-4"></img>
            </div>
          </div>
        </div>
      </div>

      <Analytics />

      <OptionsButtons />

      <div className="flex justify-center w-full">
        <WaterTS />
      </div>

      <Who_are_we/>

      <HomeArticle/>
      
    </div>
  );
}
