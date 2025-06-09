'use client'; // This component uses client-side interactivity (Swiper)

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Example event data - replace with your actual upcoming events
const upcomingEvents = [
  {
    id: 1,
    name: 'Lagos Tech Summit 2025',
    date: 'August 15, 2025',
    time: '9:00 AM - 5:00 PM',
    location: 'Grand Ballroom',
    description: 'A gathering of tech enthusiasts, innovators, and industry leaders.',
    imageSrc: '/images/events/tech-summit.png', // Ensure this image exists in public/images/events
    slug: 'lagos-tech-summit-2025', // For the individual event page link
  },
  {
    id: 2,
    name: 'Annual Wedding Expo',
    date: 'September 5-7, 2025',
    time: '10:00 AM - 6:00 PM Daily',
    location: 'Exhibition Hall',
    description: 'Connect with top wedding vendors and discover the latest trends.',
    imageSrc: '/images/events/wedding-expo.png',
    slug: 'annual-wedding-expo',
  },
  {
    id: 3,
    name: 'Cultural Festival & Gala',
    date: 'October 12, 2025',
    time: '7:00 PM Onwards',
    location: 'Garden Pavilion & Ballroom',
    description: 'Celebrate Nigeria\'s rich heritage with music, dance, and cuisine.',
    imageSrc: '/images/events/cultural-gala.png',
    slug: 'cultural-festival-gala',
  },
  {
    id: 4,
    name: 'Food & Beverage Showcase',
    date: 'November 20, 2025',
    time: '11:00 AM - 7:00 PM',
    location: 'Conference Centre',
    description: 'Explore diverse culinary delights from local and international chefs.',
    imageSrc: '/images/events/food-showcase.png',
    slug: 'food-beverage-showcase',
  },
  {
    id: 5,
    name: 'Kids Fun Fair',
    date: 'December 2, 2025',
    time: '10:00 AM - 4:00 PM',
    location: 'Outdoor Arena',
    description: 'A day of games, rides, and entertainment for the whole family.',
    imageSrc: '/images/events/kids-fair.png',
    slug: 'kids-fun-fair',
  },
];

const UpcomingEvents = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center mb-10 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Upcoming Events
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Don't miss out on exciting events happening soon at our Lagos Event Center!
        </p>
      </div>

      <div className="container mx-auto px-4">
        <Swiper
          spaceBetween={30} // Space between slides
          slidesPerView={1} // Default: 1 slide per view
          loop={true} // Optional: loop the carousel
          autoplay={{
            delay: 4000, // Autoplay every 4 seconds
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiperEvents" // Custom class for styling specific Swiper instance
          breakpoints={{
            // when window width is >= 640px (sm)
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 1024px (lg)
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {upcomingEvents.map((event) => (
            <SwiperSlide key={event.id}>
              <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                <div className="relative h-48 w-full">
                  <Image
                    src={event.imageSrc}
                    alt={event.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {event.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-1">{event.date} - {event.time}</p>
                  <p className="text-sm text-gray-500 mb-3">{event.location}</p>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    {event.description.length > 90 ? `${event.description.substring(0, 90)}...` : event.description}
                  </p>
                  <div className="mt-auto"> {/* Pushes the button to the bottom */}
                    <Link href={`/events/${event.slug}`} className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-5 rounded-full text-sm transition duration-300">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default UpcomingEvents;