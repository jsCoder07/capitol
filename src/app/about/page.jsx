import React from "react";
import Head from "next/head";
import Menu from "../components/Menu";
import { FaSnowflake, FaCarAlt, FaTheaterMasks } from "react-icons/fa";
import { ImPower } from "react-icons/im";
import { PiSecurityCameraBold } from "react-icons/pi";
import { AiOutlineSound } from "react-icons/ai";
const page = () => {
  return (
    <div>
      <Head>
        <title>Capitol City Event Center About Us</title>
        <meta
          name="description"
          content="Your premier event center in Nigeria"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Menu />
      </header>
      <div className="font-sans">
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center h-[60vh] flex items-center justify-center text-center text-white"
          style={{ backgroundImage: "url('/images/hero-conference.jpg')" }}
        >
          <div className="bg-black bg-opacity-50 p-8 rounded-lg">
            <h1 className="font-playfair text-4xl md:text-6xl ">
              About Capitol city hall Event Center
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              Your perfect venue for unforgettable events.
            </p>
            <button className="mt-6 px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-md shadow-lg">
              Book Now
            </button>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img
            src="/images/hero-wedding.jpg"
            alt="Event Hall"
            className="rounded-lg shadow-md"
          />
          <div>
            <div className="mb-16">
            <h2 className="font-playfair text-3xl  mb-4">
              About Us – Capitol city hall Event Center
            </h2>
            <p className="font-lato text-gray-700 leading-relaxed">
              Welcome to Capitol city hall Event Center, the perfect destination for
              memorable celebrations, corporate gatherings, and social events in
              the heart of Capitol city hall, Lagos. We are dedicated to providing a
              stylish and versatile space where every occasion is special and
              every detail counts.
            </p>
            </div>
            <div>
            <h2 className="font-playfair text-3xl  mb-4">Who We Are</h2>
            <p className="font-lato text-gray-700 leading-relaxed">
              Capitol city hall Event Center was created with one vision: to offer a
              world-class venue that combines elegance, functionality, and
              affordability for our community and beyond. Whether you’re
              planning a wedding, birthday party, conference, seminar, or
              cultural event, our center is designed to meet your unique needs.
            </p>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="bg-gray-50 py-16 px-6 md:px-16">
          <h2 className="text-3xl font-playfair text-center mb-10">
            Our Facilities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {[
              {
                name: "Air-conditioned halls for maximum comfort",
                icon: <FaSnowflake size={24} />,
              },
              { name: "Ample parking space for guests", icon: <FaCarAlt /> },
              { name: "Backup power supply to ensure your event runs smoothly", icon: <ImPower /> },
              { name: "State-of-the-art sound and lighting systems", icon: <AiOutlineSound /> },
              { name: "Security", icon: <PiSecurityCameraBold /> },
              { name: "Stage Setup", icon: <FaTheaterMasks size={24} /> },
            ].map((facility, index) => (
              <div
                key={index}
                className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition"
              >
                <div className="text-yellow-600 text-4xl mb-4 flex items-center  justify-center space-x-3">
                  {facility.icon}
                </div>
                <p className="text-gray-800 font-semibold font-playfair">{facility.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Promise Section */}
                <section className="bg-gray-100 py-16 px-6 md:px-16 text-center mb-8">
          <h2 className="text-3xl font-playfair mb-4">Why Choose Us?</h2>
          <h3>Prime Location: </h3>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
             Conveniently located on Capitol Road with easy access from major routes.

          </p>
         <h3>Affordable Packages:  </h3>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Quality services that suit every budget.


          </p>
           <h3>Professional Support:</h3>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Our experienced team is here to make your event stress-free from start to finish.



          </p>
        </section>


        <section className="bg-yellow-100 py-16 px-6 md:px-16 text-center">
          <h2 className="text-3xl font-playfair mb-4">Our Promise to You</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            From planning to execution, we ensure your event is stress-free and
            memorable. We go above and beyond to create a warm, welcoming
            atmosphere where unforgettable memories are made.
          </p>
          <button className="px-8 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-md shadow-lg">
            Book Your Event Now
          </button>
        </section>

        {/* Call-to-Action Footer */}
        <section className="py-12 text-center">
          <h3 className="text-2xl md:text-3xl font-playfair mb-4">
            Ready to host your next big event?
          </h3>
          <button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md shadow-lg">
            Contact Us Today
          </button>
        </section>
      </div>
    </div>
  );
};

export default page;
