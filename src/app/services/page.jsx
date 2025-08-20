import React from 'react'
import Head from "next/head";
import Menu from '../components/Menu';
import UpcomingEvents from '../components/sections/UpcomingEvents';

const page = () => {
    const services = [
    {
      title: "Weddings",
      description:
        "Celebrate your special day in style. Our elegant halls and tailored packages create unforgettable wedding experiences.",
      image: "/images/wedding-cover.jpg", // replace with your own image
    },
    {
      title: "Social Gatherings",
      description:
        "From birthdays to anniversaries, we provide the perfect space and ambiance for cherished moments with loved ones.",
      image: "/images/social-main.jpg",
    },
    {
      title: "Corporate Events",
      description:
        "Host conferences, product launches, and business meetings with our modern facilities and professional services.",
      image: "/images/corporate.jpg",
    },
  ];
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
       <Menu/>
      </header>
<main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Whether it’s a wedding, a social gathering, or a corporate function,
            we provide the perfect venue and professional service to make your
            event memorable.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 container mx-auto px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
       <UpcomingEvents/>
      <footer className="bg-gray-800 text-white text-center p-4">
        &copy; 2025 Capitol City Hall Nigeria. All rights reserved.
      </footer>
    </div>
  )
}

export default page
