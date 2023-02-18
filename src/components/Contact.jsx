import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div
      name="contact"
      className="flex bg-gradient-to-b from-gray-800 to-black md:px-4 pb-10 text-white"
    >
      <div className="flex flex-col-reverse md:flex-row max-w-screen-lg px-4 mx-auto justify-center w-full h-full">
        <div className="leftdiv md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold pb-2 pt-7 md:pt-0">
            Hey there!
          </h1>
          <div className="md:text-xl text-gray-400 py-4">
            <p className="my-2">Like what you see? Let's make magic happen! </p>
            <p className="md:text-base">
              Whether it's a new project you want to collaborate on, a job
              opportunity, or just a friendly hello, I'm all ears. I'm always on
              the hunt for ways to push boundaries and create something
              extraordinary. So don't be shy, let's connect and see what we can
              accomplish together. Have an amazing day!
            </p>
          </div>
          <div className="pb-8">
            <a href="/resume.pdf" download="true">
              <button className="text-sky-400 cursor-pointer hover:underline">
                Download my CV
              </button>
            </a>
          </div>
          <div className="socialmedia flex flex-row justify-center md:justify-start text-gray-800">
            <div className="bg-gray-500 p-2 mx-4 md:ml-0 rounded-3xl hover:text-sky-400 duration-300">
              <a
                href="https://www.linkedin.com/in/rijanshrestha3/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
            <div className="bg-gray-500 p-2 mx-4 rounded-3xl hover:text-sky-400 duration-300">
              <a
                href="https://github.com/reezayn"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={20} />
              </a>
            </div>
            <div className="bg-gray-500 p-2 mx-4 rounded-3xl hover:text-sky-400 duration-300">
              <a
                href="mailto:rijanshrestha98450@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <HiOutlineMail size={20} />
              </a>
            </div>
            <div className="bg-gray-500 p-2 mx-4 rounded-3xl hover:text-sky-400 duration-300">
              <a
                href="https://twitter.com/ree__zayn"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="contactbox md:w-1/2 border-2 border-sky-400 rounded-xl py-3 md:py-0 md:border-none">
          <h1 className="text-3xl md:text-4xl font-bold pb-0 text-center">
            Lets connect
          </h1>
          <div className="bg-transparent px-8 m-1 md:m-5 rounded-3xl text-black">
            <form
              action="https://getform.io/f/f24e9c49-1ea7-45a2-b218-d15be0e456aa"
              method="POST"
            >
              <div className="flex flex-col m-2">
                {/* <label htmlFor="name">Name</label> */}
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="p-2 rounded-lg focus:outline-none"
                />
              </div>
              <div className="flex flex-col m-2">
                {/* <label htmlFor="email">Email</label> */}
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="p-2 rounded-lg focus:outline-none"
                />
              </div>
              <div className="flex flex-col m-2">
                {/* <label htmlFor="message">Message</label> */}
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Say your message to me..."
                  className="p-2 rounded-lg focus:outline-none"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button className="px-6 py-2 my-2 text-black font-semibold bg-sky-400 hover:bg-black border-2 border-sky-400 hover:border-sky-400 hover:text-sky-400 rounded-lg cursor-pointer">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
