
import logo from "./appli.png";
// import back1 from"../../back1.png";
// import bac1 from "./bac1.svg"
import "./Style_tech.css"
import pharma from "./pill.svg"
import { Button } from "@material-tailwind/react";
import { NavbarWithMegaMenu } from "./packnav";
import { Card3Presentation } from "./cards";
import { HorizontalCard } from "./one-stop";
import Slider from "./slider";
// import { AppliCard } from "./testicard"
import testimonials from "./testimonials.json";
import { useState } from "react";
import Footer from "./components/Common/Footer/Footer";
export default function Technology() {
  return (
    <div>
     <span className="qaz">
          <h3 className="mb-4 pb-4 text-5xl leading-tight text-[#8AA6AA] df">
            Blow-Fill-Seal & Form-Fill-Seal Solutions for Pharmaceuticals
          </h3>

          <button class="bg-[#8AA6AA] hover:bg-blue-700 text-white font-bold py-2 px-20 rounded m-2">
  Explore
</button>
          <span>
            <h6
              className="text-1xl leading-tight text-[#8AA6AA] sd"
              color="blue"
            >
              "Unleashing the Power of BFS Technology: Aseptic Filling, Sterile
              Containers, and Unbreakable Packaging in a Single Step!"
            </h6>{" "}
            <br></br>
          </span>

          {/* <br></br>
          <br></br> */}
          <div>
            <img
              className="h-106 w-full object-cover object-center"
              src={logo}
              
              alt="nature image"
            />
          </div>
        </span><br></br>
         {/* <div className="flex justify-center sm:px-12 p-8 "> */}
          <img className="object-scale-down  rounded-md m-auto max-h-full  w-screen"  src="https://s3-alpha-sig.figma.com/img/049b/b5ae/76c59824d5ca5b9e19d5e820f6a945af?Expires=1694995200&Signature=ZXC6URTArvrGzkOxgfRGVWAuRrpxudo4FvuSjFuXfmPg76sK4Z2t70-VgHciDi15PTmhGJFVQH5EvqckE71QiSBi7qAPo4tFoE4qBThAYtWJ4TZlKXwID89oP78DoU264Q7FoCUtTqv9nN8rQfiPRkMNncJ09W8CeQCUMCenEvVmMktjl5XI6LrqKqmqdl3ARi2xF38RvOw2FNNxgoKfnCeQt7W591Sfqy-sCgJPXfcUxtFCjYY5M0rd~DhPjKuzv9ljsxy1LMM7MaVCZbFRepA6qt3XVrOMm5Xl1Yf11UdKlBQIY9nUVw2ND6ldR5ys3~YKODa770VgV5eBIGLyPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" al="yu"></img>
         {/* </div> */}
      
     <div><center>
     <div className="flex flex-col rounded-lg bg-white md:max-w-7xl md:flex-row mm">
                <div className="flex flex-col p-6">
       <img className="object-scale-down  rounded-md m-auto max-h-full  w-screen"  src="https://s3-alpha-sig.figma.com/img/4c40/73e4/0198a1aa6f81883b00365baa37650449?Expires=1694995200&Signature=dz2Kw3tjvn1ealbkagEc2rWKfujTTK9IVOs0sC-vCNFdP~nafhBDJeq7ff2pvx~MWtAMnH~pGk2U6TdG6CCP8mKqvc6vdRWk~hs7JWeJUHOBTkdWC~71VSQD7gPUzuVxZ52bIDYO6R3v9lN-K7N3WqQbposxGP77GhyJFI9mLX3vf0yGXu8y4z6koDqZljxqsMX6b-eincBLJ3dlG48QlZslUNuMUC2NIhH1CKhw48wyHzspmLahuC~nWch9lY0dNTVVAXtS~geihH8XhfSbPc2gDYjAJcNlInlaKUvE5Dhr1~jo3WDpMBAuWe4mJHPXv9E4uzHQtGLxNOuNWaEmKQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" al="yu"></img>
       <br></br><br></br><h6 className="mb-4 border-b pb-4 text-xl leading-tight text-black kl">
       <strong>Blow: </strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit .
          </h6>
          <br></br><h6 className="mb-4  pb-4 text-xl leading-tight text-black kl">
       <strong>Flow: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit .
          </h6>
          <br></br><h6 className="mb-4  pb-4 text-xl leading-tight text-black kl">
       <strong>Seal: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit .
          </h6>
          </div></div>
          </center></div>
          <div className="tgb bg-[#8AA6AA]">
      <div className="container">
        <div className="text-box ">
          <h2 className="mb-4 pb-4 text-5xl leading-tight text-white"><strong>ADVANTAGES</strong></h2>
          <p className="mb-4 pb-4 text-xs leading-tight text-white">The BFS process is a technological advancement that offers a lot of advantages!</p>
        </div>
        {/* <div className="image-box"> */}
          <img className="image-box" src="https://s3-alpha-sig.figma.com/img/ed02/79d9/a5f3eb9e225cde48048ee98888504e53?Expires=1694995200&Signature=Z8O6H3jGIjbP6pGWcjRrAcU0fjzhl62qnjtm9pMvHNpX0qWa1u9-6w2rdPukeV6zY-ssEB1CZjWIqPHqO9lFdXkMucdVcB7VtTfScXnClmd0jwOXHoTeqqLU8EB56TzI-fCZV0EbbCM73AUeD~UBKCYDOZy7yY5xZRBbPNA4w0GeSbF25nvBzzLmxJa4XK6r~fLmGPRlnmMHAe72VMsgnL9Qi6kKGNNGaoJn6p2wCK5ERXCgLvRADjwNnzkJl3H4CC6aJ~paf9wz6xkhk-E4zHeL0OD-bQdEz2LdnUIwWMIrttKd~CK2oa0Cuo3IriU0XWoISEXmhMa76aPMBcTuEw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Large Image" />
        {/* </div> */}
        </div>
      <div className="container ">
        <div className="card-container">
        <div className="card">
            
            <h6 className="mb-4 border-b pb-4 text-xs leading-tight text-black kl"><br></br> 
       <strong>Reduced Environmental Impact<br></br> <br></br> </strong> BFS eliminates the need for multiple packaging components, reducing waste and promoting a more sustainable approach to pharmaceutical packaging.
          </h6>
            {/* <p>Text for Card 1 goes here.</p> */}
          </div><div className="card">
            
            <h6 className="mb-4 border-b pb-4 text-xs leading-tight text-black kl"><br></br> 
       <strong>Improved Dosing Accuracy<br></br><br></br>  </strong>BFS technology enables precise filling and dosing, minimizing variations and ensuring each unit contains the exact intended amount of medication.
          </h6>
            {/* <p>Text for Card 1 goes here.</p> */}
          </div><div className="card">
            
            <h6 className="mb-4 border-b pb-4 text-xs leading-tight text-black kl"><br></br> 
       <strong>Cost-Efficiency<br></br><br></br>  </strong>The seamless integration of container forming, filling, and sealing within a single system reduces labor, energy, and materials costs contributing to overall cost efficiency.
          </h6>
            {/* <p>Text for Card 1 goes here.</p> */}
          </div><div className="card">
            
            <h6 className="mb-4 border-b pb-4 text-xs leading-tight text-black kl"><br></br> 
       <strong>Enhanced Product Integrity<br></br> <br></br> </strong>BFS technology creates a hermetic seal, safeguarding pharmaceutical products from contamination, oxygen, and light, preserving their efficacy and shelf life.
PG10 Process & Applications
          </h6>
            {/* <p>Text for Card 1 goes here.</p> */}
          </div>
          
        </div>
      </div><br></br><br></br>
    </div>
    <div className="w-screen">
        <Slider options={{ align: "center" }}>
          {testimonials.map((testimonial, i) => (
            // 3. flex-[0_0_50%] set the width of each card to 50% of the viewport
            // for mobile devices we use 90% width
            <div key={i} className="flex-[0_0_90%] md:flex-[0_0_23%]">
              <div className="py-4 px-4 bg-white shadow-lg rounded-lg my-20">
      <div className="flex justify-center md:justify-end -mt-16">
        {/* <Image> */}
          
         {/* <img className="w-150 h-30 object-cover  border-2 border-indigo-500" src={{...testimonial}.imgSrc} alt={{...testimonial}.imgSrc}></img>  */}
           {/* height={80}
           width={80}
           src={props.imgSrc} 
           </Image> */}
      </div>
      
        {/* <h2 className="text-[#8AA6AA] text-3xl font-semibold">{props.title}</h2> */}
        <div>
          <div  className="asdf">
        <h3 className="mb-4 border-b pb-4 text-3xl leading-tight text-[#8AA6AA] df asdf"><img className="w-150 h-30 object-cover  border-2 border-indigo-500"  src={{...testimonial}.imgSrc} style={{ width: '50px', height: '50px' }} alt="hi"></img> &nbsp;Pharma</h3>
        {/* <spacer></spacer> */}
        
        </div>
        
        <h5 className="mt-2 text-gray-600 text-md kkk"><strong>{{...testimonial}.content}</strong></h5>
        <h5 className="mt-2 text-gray-600 kkk" >{{...testimonial}.author}</h5><br></br>
        <button class="bg-[#8AA6AA] hover:bg-blue-700 text-black font-bold py-2 px-28 rounded">
  Button
</button>
{/* <button class="btn btn-blue">
  Button
</button> */}
      </div>
      {/* <div className ="mt-2 text-gray-600flex justify-end mt-4 pyu text-[#8AA6AA]">Blow-Fill-Seal, Technology </div>
      <div className="flex justify-end mt-4 mt-2">
      <div className="flex flex-row place-items-center gap-3">
                    <a className="text-[#8AA6AA] font-extrabold">Read more</a>
                    <img
                      src={arrow_right}
                      className="bg-[#8AA6AA] h-6 p-0.5 rounded-full"
                      alt="Read more"
                    />
        
        </div>
        
      </div> */}
      
    </div>
            </div>
          ))}
        </Slider>
      </div>
      <Footer></Footer>
    </div>
  );
}
/* Rectangle 1 */

/* Rectangle 1 */


// flex justify-center sm:px-12 p-8 h-screen object-scale-down max-h-full drop-shadow-md rounded-md m-auto bg-[url('https://s3-alpha-sig.figma.com/img/a73d/bc52/9c53df8cca3e3c182b3ffd363dceeecc?Expires=1694995200&Signature=Wny0-AluigDBgJd2YpZM9WBFBeUbsJpylmLIu~4gifJTkpnRVTNf3qMAYp9oalptXXTXYXlYhafcRDFpjI~oflaUINoeeRX~rQSpep-laGd9ygH0SN4BlO~sWTMaN4SKtm6Sfa6XmYQOl~pNPgdzfEtM0BxGJG6PMvGQkYDZSbz29C7k1SzJtkE7-Z1-7F5N8TyRvAjuoEUfuRZszd~d70U2kM0kErkJVv3I6T3D4X0xzDT62CRq70s0-b2fVbkDoJGpoG8S94hDIVvEbNi97syVBabNP48wM5eZK3Spc0jnzyiPItxA6oYre6JRpNPOHpU6ycnud7phHE8MmwHqBw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')]
