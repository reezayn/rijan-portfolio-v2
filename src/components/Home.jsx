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
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="flex flex-col-reverse items-center justify-between max-w-screen-lg px-4 mx-auto md:h-full md:flex-row">
        <div className="flex flex-col items-center justify-center md:items-start md:h-full">
          <h1 className="text-4xl font-bold sm:text-7xl text-sky-400">
            Rijan Shrestha
          </h1>
          <p className="max-w-md py-4 text-center text-gray-500 md:text-left">
            Hi! I'm a computer science student and a web development enthusiast.
            I specialize in creating visually striking and intuitive websites
            that stand out from the crowd. Let's work together and bring your
            online presence to new heights.
          </p>
          <div>
            <button className="group flex px-6 py-3 my-2 w-fit text-white items-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-[15px] cursor-pointer hover:font-[500]">
              <Link to='contact' smooth duration={500}>
                Contact me
              </Link>
              <span className="duration-300 group-hover:rotate-90">
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
