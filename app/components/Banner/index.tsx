import Image from "next/image";

const Banner = () => {
  return (
    <div id="about-us" className="bg-white"> 
      <div className="mx-auto max-w-7xl my-10 sm:py-16 px-6 lg:px-8"> 
        
        {/* Main Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* COLUMN-1 (TEXT) */}
          <div className="mx-auto lg:mx-0 text-center lg:text-start flex flex-col justify-center h-full">

            {/* Section Label */}
            <div className="py-2">
              <button className="text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black transition-all">
                WHO ARE WE
              </button>
            </div>

            {/* Main Heading */}
            <div className="py-2">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-darkpurple leading-tight">
                About Us
              </h2>
              <div className="w-24 h-1.5 bg-orange-500 mt-4 mx-auto lg:mx-0 rounded-full"></div>
            </div>

            {/* Description */}
            <div className="py-6">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed tracking-wide max-w-2xl mx-auto lg:mx-0">
                <span className="font-semibold text-darkpurple">
                  Hi Hills 
                </span>{" "}
                is a premier Haridwar-based travel agency specializing in expert-led
                Uttarakhand tour packages and Chardham Yatra pilgrimages. Leveraging
                years of local experience and deep geographical knowledge, the company
                provides a comprehensive “under one roof” solution that includes
                customized itineraries, reliable hotel bookings, and professional car
                rentals with a focus on cleanliness and safety.
                <br /><br />
                By offering competitive pricing and seamless logistics starting from
                both Haridwar and Delhi, Hi Hills has established itself as a
                reliable tour operator dedicated to balancing affordability with the
                personal comfort and unique requirements of every traveler.
              </p>
            </div>

          </div>

          {/* COLUMN-2 (IMAGE) */}
          <div className="flex justify-center lg:justify-end block h-full">
            <Image 
              src="/images/wework/Aboutus.png" 
              alt="Hi Hills Team and Services in Uttarakhand" 
              width={750} 
              height={600}
              className="object-cover rounded-2xl shadow-2xl"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;