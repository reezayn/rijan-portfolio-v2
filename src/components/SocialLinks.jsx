import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn
          <FaLinkedin size={25} />
        </>
      ),
      href: "https://www.linkedin.com/in/rijanshrestha3/",
      style: "rounded-tr-[20px]",
    },
    {
      id: 2,
      child: (
        <>
          GitHub
          <FaGithub size={25} />
        </>
      ),
      href: "https://github.com/reezayn",
    },
    {
      id: 3,
      child: (
        <>
          Mail
          <HiOutlineMail size={25} />
        </>
      ),
      href: "mailto:rijanshrestha98450@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Twitter
          <FaTwitter size={25} />
        </>
      ),
      href: "https://twitter.com/ree__zayn",
      style: "rounded-br-[20px]",
    },
  ];

  return (
    <div className="hidden base:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({id, child, href, style}) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-11 px-4 ml-[-105px] bg-gray-500 hover:ml-[-15px] duration-300  to-blue-500 hover:rounded-[20px]" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex items-center justify-between w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
