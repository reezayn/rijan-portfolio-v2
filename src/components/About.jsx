import React from "react";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 via-black to-gray-800 text-white pb-[150px]"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold text-center md:text-left md:text-5xl">
            About
          </p>
        </div>

        <p className="text-xl">
          Allow me to introduce myself, again. 😆 My name is Rijan Shrestha, a determined computer science student who has a deep love for all things technology. I am a full-stack enthusiast, constantly seeking new ways to push the boundaries of what's possible and grow my skills. As a student of computer science, I bring a unique perspective to each and every project I work on. My ability to turn ideas into tangible solutions has earned me a reputation as a problem solver with a creative streak. Whether working as part of a team or flying solo, I consistently strive to deliver outstanding results that exceed expectations. So, if you're in need of a talented, motivated, and innovative developer, look no further. I am here to bring your ideas to life.
        </p>

        <br />

        <p className="text-xl">
        To get in touch with me, you can use the <button className="text-sky-400 cursor-pointer hover:underline"><Link to='contact' smooth duration={500}>contact links</Link></button> provided at the bottom of this page or through the floating dock on the left. If time is of essence and you need to reach me quickly, you can find me on Instagram under the username : <a href="https://www.instagram.com/ree_zayn/" target="_blank" rel="noreferrer"><button className="text-sky-400 cursor-pointer hover:underline">ree_zayn</button></a> , where I'm most active.
        </p>
      </div>
    </div>
  );
};

export default About;
