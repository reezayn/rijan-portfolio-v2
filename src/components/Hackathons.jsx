import React from 'react'

const Hackathons = () => {
  const hackathonsArray = [
    {
      id: 2,
      name: 'CodeBrisk Hackathon',
      organizer: 'Herald College, Kathmandu',
      venue: 'Kuri Village, Kalinchowk ( 3842m altitude )',
      date: 'Feb 15-17, 2023',
      position: 'Top 3 finalists',
      blogLink: '#',
      shortDesc:
        'Winning our place in finalists and going to such a high altitude for coding was a really challenging but fun at the same time. This was truly a once in a lifetime experience.',
    },
    {
      id: 1,
      name: 'Vertex Hacks',
      organizer: 'Thapathali Campus, Kathmandu',
      venue: 'NATHM College, Kathmandu',
      date: 'Jan 21-24, 2023',
      blogLink: '#',
      shortDesc:
        'This was my first ever hackathon. I got to experience and meet many like minded people here.',
    },
  ]
  return (
    <div
      name="hackathons"
      className="w-full h-full bg-gradient-to-b from-gray-800 via-black to-gray-800 text-white pb-[150px]"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <h1 className="text-4xl font-bold text-center md:text-left md:text-5xl">
            Hackathons
          </h1>
          <p className="mt-10 text-lg text-gray-500">
            I know it's not really needed to showcase this but I want to, so
            here are hackathons I have participated so far.
          </p>
        </div>

        <div className="hackathonTimline">
          {/* <!-- component --> */}
          <div className="relative w-10/12 py-20 mx-auto md:w-7/12 lg:w-10/12">
            <div className="mt-10 border-l-2">
              {/* <!-- nth Card  --> */}
              {hackathonsArray.map(
                ({ id, name, organizer, venue, blogLink, date, shortDesc, position }) => (
                  <div
                    key={id}
                    className="relative flex flex-col items-center px-6 py-4 mb-10 ml-10 space-y-4 text-white transition transform bg-gray-800 border-2 rounded-lg cursor-pointer border-sky-500 hover:-translate-y-2 md:flex-row md:space-y-0"
                  >
                    {/* <!-- Dot Follwing the Left Vertical Line --> */}
                    <div className="absolute z-10 w-5 h-5 mt-2 transform rounded-full bg-sky-500 -left-11 -translate-x-2/4 md:mt-0"></div>

                    {/* <!-- Line that connecting the box with the vertical line --> */}
                    <div className="absolute z-0 w-10 h-1 bg-blue-300 -left-10"></div>

                    {/* <!-- Content that showing in the box --> */}
                    <div className="flex-auto">
                      <h1 className="text-base text-gray-200 lg:text-lg">{date}</h1>
                      <h1 className="text-2xl font-bold">{name}</h1>
                      <h3 className="my-1 text-sm text-gray-400 md:text-base lg:text-base">
                        <span className="text-white"> Organizer : </span>
                        {organizer}
                      </h3>
                      <h3 className="my-1 text-sm text-gray-400 md:text-base lg:text-base">
                        <span className="text-white"> Venue : </span>
                        {venue}
                      </h3>
                      <h3 className="my-1 text-sm text-gray-400 md:text-base lg:text-base">
                        <span className="text-white"> Position : </span>
                        {position}
                      </h3>
                      <h3 className="hidden my-1 text-xs text-gray-500 md:flex md:text-sm lg:text-base">
                        {shortDesc}
                      </h3>
                    </div>
                    <a
                      href={blogLink}
                      className="text-center text-white hover:text-sky-500"
                    >
                      Read Blog
                    </a>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hackathons
