
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'Weddings',
    description: 'Celebrate your special day in a breathtaking setting.',
    imageSrc: '/images/services/wedding.png', // Replace with your actual image
    imageAlt: 'Elegant Wedding Setup',
  },
  {
    title: 'Corporate Events',
    description: 'Host successful conferences, seminars, and meetings.',
    imageSrc: '/images/services/corporate.png', // Replace with your actual image
    imageAlt: 'Professional Corporate Event',
  },
  {
    title: 'Social Gatherings',
    description: 'Perfect for birthdays, anniversaries, and parties.',
    imageSrc: '/images/services/social.png', // Replace with your actual image
    imageAlt: 'Lively Social Gathering',
  },
  {
    title: 'Exhibitions & Trade Shows',
    description: 'Showcase your products and services in a dynamic space.',
    imageSrc: '/images/services/exhibition.png', // Replace with your actual image
    imageAlt: 'Dynamic Exhibition Booth',
  },
  {
    title: 'Concerts & Performances',
    description: 'A versatile venue for memorable musical and theatrical events.',
    imageSrc: '/images/services/concert.png', // Replace with your actual image
    imageAlt: 'Exciting Concert Performance',
  },
  {
    title: 'Catering Services',
    description: 'Exquisite culinary experiences tailored to your event.',
    imageSrc: '/images/services/catering.png', // Replace with your actual image
    imageAlt: 'Delicious Catering Display',
  },
  // Add more services/event types as needed
];

const ServicesOverview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our Key Services & Event Types
        </h2>
        <p className="text-lg text-gray-600">
          We cater to a wide range of events with exceptional facilities and dedicated support.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <div className="relative h-60 md:h-56 lg:h-64 w-full">
              <Image
                src={service.imageSrc}
                alt={service.imageAlt}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-t-lg"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              {service.description && (
                <p className="text-gray-600 text-sm">{service.description}</p>
              )}
              <Link href="/services" className="inline-block mt-4 text-primary-500 hover:text-primary-600 font-medium transition duration-300">
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesOverview;