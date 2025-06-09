'use client'; // This component uses client-side interactivity (Swiper)

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// You'll replace these with your actual image paths in public/images
const heroImages = [
  {
    src: '/images/hero-wedding.jpg', // Make sure you have these images in public/images
    alt: 'Elegant Wedding Event',
    caption: 'Your Dream Wedding Awaits',
  },
  {
    src: '/images/hero-conference.jpg',
    alt: 'Professional Conference Setup',
    caption: 'Conferences and Seminars, Flawlessly Executed',
  },
  {
    src: '/images/hero-social.jpg',
    alt: 'Vibrant Social Gathering',
    caption: 'Unforgettable Social Gatherings',
  },
  {
    src: '/images/hero-venue-exterior.jpg',
    alt: 'Modern Event Center Exterior',
    caption: 'Lagos Premier Event Destination',
  },
];

const Hero = () => {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000, // 5 seconds
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full h-full"
      >
        {heroImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill // Fills the parent div
                style={{ objectFit: 'cover' }} // Ensures the image covers the area without distortion
                priority={index === 0} // Load the first image with high priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-4">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                  {image.caption}
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl drop-shadow">
                  Discover the perfect venue for your next event in the heart of Lagos.
                </p>
                <Link href="/contact">
                  <button className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out shadow-lg transform hover:scale-105">
                    Plan Your Event
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;