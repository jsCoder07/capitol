import React from 'react';
// Import icons from react-icons. You can browse different icon packs here: https://react-icons.github.io/react-icons/
// For example, from Font Awesome (fa), Material Design (md), IonIcons (io5), etc.
// Let's use some example icons from Material Design Icons (Md) and Font Awesome (Fa).
import { MdOutlineStars, MdOutlineLocationOn, MdOutlineFoodBank, MdOutlineSettingsInputAntenna } from 'react-icons/md';
import { FaUsersGear } from 'react-icons/fa6'; // Example from Font Awesome 6, if you have it installed or use a different one

const benefits = [
  {
    icon: <FaUsersGear className="text-primary-500 text-5xl mb-4" />, // Example: Gear for staff
    title: 'Experienced Staff',
    description: 'Our dedicated team of event professionals ensures every detail is meticulously handled, from planning to execution.',
  },
  {
    icon: <MdOutlineSettingsInputAntenna className="text-primary-500 text-5xl mb-4" />, // Example: Antenna for tech/state-of-the-art
    title: 'State-of-the-Art Facilities',
    description: 'Equipped with the latest audiovisual technology, flexible layouts, and modern amenities to suit any event size.',
  },
  {
    icon: <MdOutlineFoodBank className="text-primary-500 text-5xl mb-4" />, // Example: Food icon for catering
    title: 'Exquisite Catering',
    description: 'Indulge your guests with diverse, gourmet culinary experiences prepared by our top-tier chefs, tailored to your taste.',
  },
  {
    icon: <MdOutlineLocationOn className="text-primary-500 text-5xl mb-4" />, // Example: Location pin
    title: 'Prime Lagos Location',
    description: 'Conveniently situated in a strategic Lagos area, offering easy accessibility and ample parking for all your guests.',
  },
  // Add more benefits as needed
  {
    icon: <MdOutlineStars className="text-primary-500 text-5xl mb-4" />, // Example: Star for reputation
    title: 'Unmatched Reputation',
    description: 'Years of successful events and satisfied clients speak to our commitment to excellence and reliability.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Why Choose Us?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Partner with us for an unparalleled event experience. Here's what sets us apart:
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-8 text-center flex flex-col items-center hover:shadow-lg transition duration-300"
          >
            {benefit.icon}
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {benefit.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;