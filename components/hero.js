import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";
import ReactPlayer from 'react-player'
import { useRef } from "react";

const Hero = () => {
  const videoRef = useRef();
  return (
    <>
      <Container className="flex flex-wrap relative lg:top-20 top-10 lg:mt-8 ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8 xl:ml-16 ">
            <h1 className="text-5xl font-bold leading-snug tracking-tight text-dark md:text-6xl lg:leading-tight xl:text-7xl xl:leading-loose dark:text-light">
              Anicode
            </h1>

            <p className="mt-8 xl:mt-0 text-3xl font-semibold leading-snug text-dark dark:text-light  sm:leading-snug md:text-4xl lg:text-[42px] md:leading-snug overflow-hidden max-w-[530px] tracking-wide">
            Understand programming through visualization
            </p>
            <div className="xl:mt-8 xl:mb-0 mb-12 relative top-10 flex flex-col items-start  sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href=""
                rel="noopener"
                className="xl:px-8 xl:py-4 xl:text-2xl font-bold text-center text-[#48c78e] border-2 border-[#48c78e] hover:bg-[#48c78e] hover:text-white transition ease-in delay-50 rounded-full text-lg px-4 py-2">
                Start Learning
              </a>
            </div>  
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">

            <video width="700" height="700" className="bg-black object-cover rounded-xl" loop autoPlay muted>
              <source src="/videos/video_copy.mp4" type="video/mp4"/>
            </video>
          </div>
        </div>
      </Container>
     
    </>
  );
}


export default Hero;