import React from 'react';

const Introduction = ({ eventCenterName = "[Your Event Center Name]" }) => {
  return (
    <section className="w-full py-16 px-4 bg-gray-50 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Your Vision, Our Venue, Unforgettable Moments
        </h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Welcome to {eventCenterName}, Lagos' premier destination for unforgettable celebrations and impactful corporate gatherings. Nestled in the vibrant heart of the city, our state-of-the-art venue offers versatile spaces, exquisite catering, and unparalleled service, ensuring every moment of your event is flawlessly executed and truly memorable.
        </p>
      </div>
    </section>
  );
};

export default Introduction;