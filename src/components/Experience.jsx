import React from 'react'
import Timeline from './Timeline'

const Experience = () => {
  return (
    <div name='experience' className="flex w-full h-screen pt-10 overflow-y-scroll text-white bg-gradient-to-b from-gray-800 via-black to-gray-800">
      <div className="justify-center w-full h-full max-w-screen-lg px-4 mx-auto">
      <div>
          <h1 className="text-4xl font-bold text-center md:text-left md:text-5xl">
            Experience
          </h1>
          <p className="mt-10 text-lg text-gray-500">
            These are places where I have worked.<br /> <i> ( I am just starting, it'll take some time to fill this section )</i>
          </p>
        </div>
        <div>
          <Timeline />
        </div>
      </div>
    </div>
  )
}

export default Experience