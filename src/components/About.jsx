import React from "react";
// import { Link } from "react-scroll";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 via-black to-gray-800 text-white pb-[150px]"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold text-center md:text-left md:text-5xl">
            About
          </p>
        </div>
        <p className="text-base text-gray-400 md:text-lg lg:text-xl">
        Yo! This is Rijan - a self-proclaimed internet creator and die-hard One Piece fan. 
        <br /> 
        I'm always up for chatting about anime, but I'm also a tech and coding enthusiast with a <a href="https://www.instagram.com/ree_zayn/" target="_blank" rel="noreferrer"><button className="cursor-pointer text-sky-400 hover:underline">YouTube channel</button></a> full of cool content. Want more? Check out my <a href="https://www.instagram.com/ree_zayn/" target="_blank" rel="noreferrer"><button className="cursor-pointer text-sky-400 hover:underline">Blog</button></a>. Besides I also have a passion for art - I love bringing my imagination to life in vibrant visuals. Also I am seen jamming out on my guitar in my little free time which I get after following my multiple passions.
        </p>
        <br />
        <p className="text-base text-gray-400 md:text-lg lg:text-xl">
        Get in touch with me via any of the contact links but if time is of essence and you need to reach me quickly, you can find me on Instagram under the username : <a href="https://www.instagram.com/ree_zayn/" target="_blank" rel="noreferrer"><button className="cursor-pointer text-sky-400 hover:underline">ree_zayn</button></a> , where I'm most active.
        Let's connect and see where our passions take us! 
        </p>
        

        
      </div>
    </div>
  );
};

export default About;


