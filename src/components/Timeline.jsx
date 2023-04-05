import React from 'react'

const Timeline = () => {
  return (
    <>
    {/* <!-- component --> */}
<div className="container w-full h-full mx-auto bg-transparent">
  <div className="relative h-full px-0 py-10 overflow-hidden lg:p-10 wrap">
    <div className="absolute h-full border border-2-2 border-sky-400 border-opacity-70" style={{left: '50%'}}></div>

    {/* <!-- right timeline --> */}
    <div className="flex items-center justify-between w-full mb-8 right-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 w-8 h-8 bg-gray-800 border-2 rounded-full shadow-xl border-sky-400">
        <h1 className="mx-auto text-lg font-semibold text-sky-400">1</h1>
      </div>
      <div className="order-1 w-5/12 px-6 py-4 bg-gray-800 border-2 rounded-lg shadow-xl border-sky-400">
        <h5 className='text-xs text-gray-300 md:text-sm lg:text-base'>Feb 2023 - April 2023</h5>
        <h3 className="my-1 text-base font-bold text-white md:text-lg lg:text-xl">Junior Developer Intern</h3>
        <h5 className='text-xs leading-snug tracking-wide text-opacity-100 md:text-sm text-gray-50'>ByteFaucet Technology</h5>
        <h5 className='text-[10px] lg:text-xs leading-snug tracking-wide text-gray-300 text-opacity-100'>Kathmandu, Nepal</h5>
        <p className="hidden mt-2 text-sm leading-snug tracking-wide text-gray-300 text-opacity-100 lg:flex">As a Junior Developer Intern, my role is to contribute in the projects of the company while learning the work culture and gaining real-world work experience in the field. I have invovled in many projects of the company which has given me chance to face what working with a team on a real project looks like.</p>
      </div>
    </div>

    {/* <!-- left timeline -->  
    <div className="flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 w-8 h-8 bg-gray-800 rounded-full shadow-xl">
        <h1 className="mx-auto text-lg font-semibold text-sky-400">2</h1>
      </div>
      <div className="order-1 w-5/12 px-6 py-4 bg-gray-400 rounded-lg shadow-xl">
        <h3 className="mb-3 text-xl font-bold text-white">Lorem Ipsum</h3>
        <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
    </div> */}
    
   {/* <!-- right timeline --> 
    <div className="flex items-center justify-between w-full mb-8 right-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 w-8 h-8 bg-gray-800 rounded-full shadow-xl">
        <h1 className="mx-auto text-lg font-semibold text-white">3</h1>
      </div>
      <div className="order-1 w-5/12 px-6 py-4 bg-gray-400 rounded-lg shadow-xl">
        <h3 className="mb-3 text-xl font-bold text-gray-800">Lorem Ipsum</h3>
        <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
    </div>

     <!-- left timeline --> 
    <div className="flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 w-8 h-8 bg-gray-800 rounded-full shadow-xl">
        <h1 className="mx-auto text-lg font-semibold text-white">4</h1>
      </div>
      <div className="order-1 w-5/12 px-6 py-4 bg-red-400 rounded-lg shadow-xl">
        <h3 className="mb-3 text-xl font-bold text-white">Lorem Ipsum</h3>
        <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
    </div> */}

  </div>
</div>
    </>
  )
}

export default Timeline