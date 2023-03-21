import React, { useState } from 'react'
// import { FaBars, FaTimes } from "react-icons/fa";
import { HiBars3BottomRight } from 'react-icons/hi2'
import { GiCrossMark } from 'react-icons/gi'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const links = [
    {
      id: 1,
      link: 'home',
    },
    {
      id: 2,
      link: 'about',
    },
    {
      id: 3,
      link: 'work',
    },
    {
      id: 4,
      link: 'projects',
    },
    // {
    //   id: 5,
    //   link: "contact",
    // },
  ]

  return (
    <>
      <div
        id="mainNavDiv"
        className="flex items-center justify-between w-full h-20 px-4 text-white bg-black"
      >
        <a href="/">
          <div>
            <h1 className="ml-3 text-5xl duration-200 cursor-pointer font-signature hover:scale-105">
              Rijan
            </h1>
          </div>
        </a>

        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 font-medium text-gray-500 capitalize duration-200 cursor-pointer hover:scale-110 hover:text-white"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
          <a
            href="https://rijanshrestha.hashnode.dev/"
            target="_blank"
            rel="noreferrer"
          >
            <li className="px-4 font-medium text-gray-500 capitalize duration-200 cursor-pointer hover:scale-110 hover:text-white">
              Blog
            </li>
          </a>
          {/* <a
            href="https://www.youtube.com/@codehustle"
            target="_blank"
            rel="noreferrer"
          >
            <li className="px-4 font-medium text-gray-500 capitalize duration-200 cursor-pointer hover:scale-110 hover:text-white">
              YouTube
            </li>
          </a> */}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="z-10 mr-4 text-gray-500 cursor-pointer md:hidden"
        >
          {nav ? <GiCrossMark size={23} /> : <HiBars3BottomRight size={30} />}
        </div>

        {nav && (
          <ul className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen bg-gradient-to-b from-black to-gray-500">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 py-5 text-4xl capitalize cursor-pointer"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
            <a
              href="https://rijanshrestha.hashnode.dev/"
              target="_blank"
              rel="noreferrer"
            >
              <li className="px-4 py-5 text-4xl capitalize cursor-pointer">
                Blog
              </li>
            </a>
            {/* <a
              href="https://www.youtube.com/@codehustle"
              target="_blank"
              rel="noreferrer"
            >
              <li className="px-4 py-5 text-4xl capitalize cursor-pointer">
                YouTube
              </li>
            </a> */}
          </ul>
        )}
      </div>
    </>
  )
}

export default Navbar
