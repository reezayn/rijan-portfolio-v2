import React from "react";
// import HeroImage from '../assets/heroImage.png'
// import HeroImage2 from '../assets/heroImage2.png'
import HeroImage3 from "../assets/heroImage3.png";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="md:h-full max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-between px-4 md:flex-row">
        <div className="flex flex-col items-center md:items-start justify-center md:h-full">
          <h1 className="text-4xl sm:text-7xl font-bold text-sky-400">
            Rijan Shrestha
          </h1>
          <p className="text-gray-500 py-4 max-w-md text-center md:text-left">
            Hi! I'm a computer science student and a web development enthusiast.
            I specialize in creating visually striking and intuitive websites
            that stand out from the crowd. Let's work together and bring your
            online presence to new heights.
          </p>
          <div>
            <button className="group flex px-6 py-3 my-2 w-fit text-white items-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-[15px] cursor-pointer hover:font-[500]">
              <Link to='about' smooth duration={500}>
                About me
              </Link>
              <span className="group-hover:rotate-90 duration-300">
                <RiArrowRightSLine className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div className="">
          <img
            src={HeroImage3}
            alt="it was me"
            className="mx-auto mt-28 mb-10 w-[55%] rounded-[250px] md:hidden"
          />
          <img
            src={HeroImage3}
            alt="it was me"
            className="hidden md:flex rounded-[20px] mx-auto mt-15 w-[350px] hover:scale-110 duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
