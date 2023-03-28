import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { SiVisualstudiocode } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

const Skills = () => {
  return (
    <div
      name="skills"
      className="flex w-full text-white bg-gradient-to-b from-black to-gray-800 md:h-screen"
    >
      <div className="justify-center w-full h-full max-w-screen-lg px-4 mx-auto">
        <div className="mb-[55px]">
          <h1 className="text-4xl font-bold text-center md:text-left md:text-5xl">
            Skills
          </h1>
        </div>
        <div className="flex flex-row">
          <div className="w-full border-gray-700 skillsList md:w-1/2 md:border-r-2">
            <div className="frontend my-[25px]">
              <h1 className="pb-2 text-2xl font-bold">Frontend</h1>
              <div className="flex flex-row bothcol">
                <div className="col1 w-1/2 md:min-w-[58%]">
                  <ul>
                    <li className="py-[3px] font-bold text-gray-400">HTML, CSS</li>
                    <li className="py-[3px] font-bold text-gray-400">Tailwind</li>
                    <li className="py-[3px] font-bold text-gray-400">
                      Javascript
                    </li>
                  </ul>
                </div>
                <div className="col2">
                  <ul>
                    <li className="py-[3px] font-bold text-gray-400">Typescript</li>
                    <li className="py-[3px] font-bold text-gray-400">
                      React JS
                    </li>
                    <li className="py-[3px] font-bold text-gray-400">
                      Next JS
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="backend my-[25px]">
              <h1 className="pb-2 text-2xl font-bold">Backend</h1>
              <div className="flex flex-row bothcall">
                <div className="col1 w-1/2 md:min-w-[58%]">
                  <ul>
                    <li className="py-[3px] font-bold text-gray-400">NodeJS</li>
                    <li className="py-[3px] font-bold text-gray-400">Sanity</li>
                    <li className="py-[3px] font-bold text-gray-400">Payload</li>
                  </ul>
                </div>
                <div className="col2">
                  <ul>
                    <li className="py-[3px] font-bold text-gray-400">
                      ExpressJS
                    </li>
                    <li className="py-[3px] font-bold text-gray-400">Firebase</li>
                    <li className="py-[3px] font-bold text-gray-400">MongoDB</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="others my-[25px]">
              <h1 className="pb-2 text-2xl font-bold">Others</h1>
              <div className="flex flex-row bothcol">
                <div className="col1 w-1/2 md:min-w-[58%]">
                  <ul>
                    <li className="py-[3px] font-bold text-gray-400">Git</li>
                    <li className="py-[3px] font-bold text-gray-400">Github</li>
                    <li className="py-[3px] font-bold text-gray-400">
                      Vercel
                    </li>
                  </ul>
                </div>
                <div className="col2">
                  <ul>
                    <li className="py-[3px] font-bold text-gray-400">
                      VS Code
                    </li>
                    <li className="py-[3px] font-bold text-gray-400">
                      Netlify
                    </li>
                    <li className="py-[3px] font-bold text-gray-400">Web Design</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col hidden skillsLogo md:flex text-sky-400">
            <div className="row1 flex flex-row ml-[80px]">
              <div className="m-[25px]">
                <AiFillHtml5 size={75} className='duration-300 cursor-pointer hover:scale-125'/>
              </div>
              <div className="m-[25px]">
                <DiCss3 size={75} className='duration-300 cursor-pointer hover:scale-125' />
              </div>
              <div className="m-[25px]">
                <TbBrandJavascript size={75} className='duration-300 cursor-pointer hover:scale-125'/>
              </div>
            </div>
            <div className="row2 flex flex-row ml-[80px]">
              <div className="m-[25px]">
                <FaReact size={75} className='duration-300 cursor-pointer hover:scale-125' />
              </div>
              <div className="m-[25px]">
                <SiTailwindcss size={75} className='duration-300 cursor-pointer hover:scale-125' />
              </div>
              <div className="m-[25px]">
                <FaNodeJs size={75} className='duration-300 cursor-pointer hover:scale-125' />
              </div>
            </div>
            <div className="row3 flex flex-row ml-[80px]">
              <div className="m-[25px]">
                <BsGithub size={70} className='duration-300 cursor-pointer hover:scale-125' />
              </div>
              <div className="m-[25px]">
                <SiMongodb size={70} className='duration-300 cursor-pointer hover:scale-125' />
              </div>
              <div className="m-[25px]">
                <SiVisualstudiocode size={70} className='duration-300 cursor-pointer hover:scale-125' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
