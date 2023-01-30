import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";
import { GiCrossMark } from "react-icons/gi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "projects",
    },
    {
      id: 3,
      link: "blog",
    },
    // {
    //   id: 4,
    //   link: "uses",
    // },
    {
      id: 4,
      link: "contact",
    },
  ];

  return (
    <>
      <div
        id="mainNavDiv"
        className="flex justify-between items-center w-full h-20 px-4 text-white bg-black"
      >
        <div>
          <h1 className="text-5xl font-signature ml-3 cursor-pointer hover:scale-105 duration-200">
            Rijan
          </h1>
        </div>

        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200 hover:text-white"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer mr-4 z-10 text-gray-500 md:hidden"
        >
          {nav ? <GiCrossMark size={23} /> : <HiBars3BottomRight size={30} />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 py-5 text-4xl capitalize cursor-pointer"
              >
                <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Navbar;
