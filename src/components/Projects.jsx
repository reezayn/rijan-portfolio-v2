import React from "react";
import Doctorsahab from "../assets/projectspics/doctorsahab.png";
import reegym from "../assets/projectspics/reegym.png";
import yatra from "../assets/projectspics/yatra.png";

const Projects = () => {
  const links = [
    {
      id: 1,
      title: "Doctorsahab",
      shortdesc: "An AI powered Health tool",
      projectpic: Doctorsahab,
      techused: ["React", "Tailwind"],
      linktosite: "https://doctorsahab.netlify.app/",
      githublink: "https://github.com/reezayn/doctorsahab",
    },
    {
      id: 2,
      title: "Ree-gym",
      shortdesc: "Your personal gym exercise search tool",
      projectpic: reegym,
      techused: ["React", "Tailwind", "Material UI"],
      linktosite: "https://rijan-gym.netlify.app/",
      githublink: "https://github.com/reezayn/rijan-gym",
    },
    {
      id: 3,
      title: "Yatra",
      shortdesc: "The only travel companion you need",
      projectpic: yatra,
      techused: ["React", "Tailwind", "Material UI"],
      linktosite: "https://project-yatra.netlify.app/",
      githublink: "https://github.com/reezayn/project-yatra",
    },
  ];
  return (
    <div
      name="projects"
      className="flex text-white bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="justify-center w-full h-full max-w-screen-lg px-4 mx-auto">
        <div>
          <h1 className="text-4xl font-bold text-center md:text-left md:text-5xl">
            Projects
          </h1>
          <p className="mt-10 text-lg text-gray-500">
            These are some of the projects that I have built over the years that
            reflect my passion in software and design.
          </p>
        </div>
        <div>
          {links.map(
            ({
              id,
              title,
              shortdesc,
              projectpic,
              techused,
              linktosite,
              githublink,
            }) => (
              <div
                key={id}
                className="flex flex-col my-16 one-project md:flex-row"
              >
                <div className="flex justify-center md:justify-start md:pr-[120px]">
                  <a href={linktosite} target="_blank" rel="noreferrer">
                    <img
                      src={projectpic}
                      alt="project-landing-page"
                      className="w-[300px] rounded-[20px] md:w-[450px] hover:scale-110 duration-300"
                    />
                  </a>
                </div>
                <div className="flex flex-col items-center justify-center md:items-start">
                  <h1 className="py-2 text-2xl font-bold md:text-4xl">
                    {title}
                  </h1>
                  <p className="text-gray-500 md:text-lg">{shortdesc}</p>
                  <div className="techusedlist flex flex-row my-[15px]">
                    {techused.map((techitem) => (
                      <div className="bg-gray-700 rounded-lg m-[5px] md:m-0 md:mr-[11px] px-[15px] py-[8px] text-gray-400">
                        {techitem}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-row">
                    <a href={linktosite} target="_blank" rel="noreferrer">
                      <button className="px-4 py-3 mx-0 my-2 w-[150px] rounded-lg text-black border-2 font-bold bg-sky-400 cursor-pointer hover:font-[500] hover:bg-black hover:border-2 border-sky-400 hover:text-sky-500 ">
                        Visit live
                      </button>
                    </a>
                    <a href={githublink} target="_blank" rel="noreferrer">
                      <button className="px-4 py-3 mx-3 my-2 w-[150px] rounded-lg font-bold border-2 border-sky-400 hover:bg-sky-400 hover:text-black text-sky-400 cursor-pointer hover:font-[500]">
                        View Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
