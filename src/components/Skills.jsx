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
      className="flex bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg px-4 mx-auto justify-center w-full h-full">
        <div className="mb-[55px]">
          <h1 className="text-4xl font-bold text-center md:text-left md:text-5xl">
            Skills
          </h1>
        </div>
        <div className="flex flex-row">
          <div className="skillsList w-full md:w-1/2 md:border-r-2 border-gray-700">
            <div className="frontend my-[25px]">
              <h1 className="text-2xl font-bold pb-2">Frontend</h1>
              <div className="bothcol flex flex-row">
                <div className="col1 w-1/2 md:min-w-[58%]">
                  <ul>
                    <li className="py-[3px] font-bold text-gray-400">HTML</li>
                    <li className="py-[3px] font-bold text-gray-400">CSS</li>
                    <li className="py-[3px] font-bold text-gray-400">
                      Javascript
                    </li>
                  </ul>
                </div>
                <div className="col2">
                  <ul>
                    <li className="py-[3px] font-bold text-gray-400">React</li>
                    <li className="py-[3px] font-bold text-gray-400">
                      Tailwind
                    </li>
                    <li className="py-[3px] font-bold text-gray-400">
                      Material UI
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="backend my-[25px]">
              <h1 className="text-2xl font-bold pb-2">Backend</h1>
              <div className="bothcall flex flex-row">
                <div className="col1 w-1/2 md:min-w-[58%]">
                  <ul>
                    <li className="py-[3px] font-bold text-gray-400">NodeJS</li>
                    {/* <li className="py-[3px] font-bold text-gray-400">Express</li>
                    <li className="py-[3px] font-bold text-gray-400">MongoDB</li> */}
                  </ul>
                </div>
                <div className="col2">
                  <ul>
                    <li className="py-[3px] font-bold text-gray-400">
                      Rest API
                    </li>
                    {/* <li className="py-[3px] font-bold text-gray-400">SQL</li>
                    <li className="py-[3px] font-bold text-gray-400">Firebase</li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="others my-[25px]">
              <h1 className="text-2xl font-bold pb-2">Others</h1>
              <div className="bothcol flex flex-row">
                <div className="col1 w-1/2 md:min-w-[58%]">
                  <ul>
                    <li className="py-[3px] font-bold text-gray-400">Git</li>
                    <li className="py-[3px] font-bold text-gray-400">Github</li>
                    <li className="py-[3px] font-bold text-gray-400">
                      Web Design
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
                    <li className="py-[3px] font-bold text-gray-400">SEO</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="skillsLogo hidden md:flex flex-col text-sky-400">
            <div className="row1 flex flex-row ml-[80px]">
              <div className="m-[25px]">
                <AiFillHtml5 size={75} className='hover:scale-125 duration-300 cursor-pointer'/>
              </div>
              <div className="m-[25px]">
                <DiCss3 size={75} className='hover:scale-125 duration-300 cursor-pointer' />
              </div>
              <div className="m-[25px]">
                <TbBrandJavascript size={75} className='hover:scale-125 duration-300 cursor-pointer'/>
              </div>
            </div>
            <div className="row2 flex flex-row ml-[80px]">
              <div className="m-[25px]">
                <FaReact size={75} className='hover:scale-125 duration-300 cursor-pointer' />
              </div>
              <div className="m-[25px]">
                <SiTailwindcss size={75} className='hover:scale-125 duration-300 cursor-pointer' />
              </div>
              <div className="m-[25px]">
                <FaNodeJs size={75} className='hover:scale-125 duration-300 cursor-pointer' />
              </div>
            </div>
            <div className="row3 flex flex-row ml-[80px]">
              <div className="m-[25px]">
                <BsGithub size={70} className='hover:scale-125 duration-300 cursor-pointer' />
              </div>
              <div className="m-[25px]">
                <SiMongodb size={70} className='hover:scale-125 duration-300 cursor-pointer' />
              </div>
              <div className="m-[25px]">
                <SiVisualstudiocode size={70} className='hover:scale-125 duration-300 cursor-pointer' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
