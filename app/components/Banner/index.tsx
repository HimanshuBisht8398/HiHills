import Image from "next/image";

const Banner = () => {
  return (
    <div id="about-us">
                    <div className='mx-auto max-w-7xl my-10 sm:py-10 px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-16'>

                {/* COLUMN-1 */}

<div className="mx-auto sm:mx-0">

  {/* Section Label */}
  <div className="py-2 text-center lg:text-start">
   <div className='py-3 text-center lg:text-start'>
                        <button className='text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black'>WHO ARE WE</button>
                    </div>
  </div>

  {/* Main Heading */}
  <div className="py-2 text-center lg:text-start">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-darkpurple">
      About Us
    </h2>
    <div className="w-20 h-1 bg-orange-500 mt-3 mx-auto lg:mx-0 rounded-full"></div>
  </div>

  {/* Description */}
  <div className="py-6 text-center lg:text-start">
    <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed tracking-wide max-w-2xl mx-auto lg:mx-0">
      <span className="font-semibold text-darkpurple">
        Himalayan Edge
      </span>{" "}
      is a premier Haridwar-based travel agency specializing in expert-led
      Uttarakhand tour packages and Chardham Yatra pilgrimages. Leveraging
      years of local experience and deep geographical knowledge, the company
      provides a comprehensive “under one roof” solution that includes
      customized itineraries, reliable hotel bookings, and professional car
      rentals with a focus on cleanliness and safety.
      <br /><br />
      By offering competitive pricing and seamless logistics starting from
      both Haridwar and Delhi, Himalayan Edge has established itself as a
      reliable tour operator dedicated to balancing affordability with the
      personal comfort and unique requirements of every traveler.
    </p>
  </div>

</div>

                {/* COLUMN-2 */}

                <div className='lg:-m-15 lg:pt-20 hidden lg:block'>
                    <Image src="/images/banner/banner.svg" alt="hero-image" width={800} height={642} />
                </div>

            </div>
        </div>
        </div>

    )
}

export default Banner;
