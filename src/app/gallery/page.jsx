"use client";
import React from 'react'
import { useState } from "react";
import { FaChevronCircleLeft,FaChevronCircleRight ,FaRegWindowClose  } from "react-icons/fa";
import Image from "next/image";
import Head from "next/head";
import Menu from "../components/Menu";
import UpcomingEvents from "../components/sections/UpcomingEvents";
const images = [
  { src: "/images/hero-venue-exterior.jpg", alt: "Our Location" },
  { src: "/images/hero-conference.jpg", alt: "Conference" },
  { src: "/images/social-main.jpg", alt: "Birthday Party" },
  { src: "/images/corporate.jpg", alt: "Corporate Event" },
  { src: "/images/wedding-main.jpg", alt: "Engagement Party" },
  { src: "/images/corporate2.jpg", alt: "Conference Setup" },
];
const Gallery = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  const showPrev = () =>
    setSelectedIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : 0));
  const showNext = () =>
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : 0));
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
<main className="min-h-screen bg-gray-50">
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Our Event Gallery
        </h1>

        {/* Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-2xl shadow-md cursor-pointer"
              onClick={() => openLightbox(idx)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={500}
                height={350}
                className="object-cover w-full h-64 transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <p className="text-white text-lg font-semibold">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedIndex !== null && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-gray-300"
            >
             <FaRegWindowClose />
            </button>

            <button
              onClick={showPrev}
              className="absolute left-6 text-white hover:text-gray-300"
            >
              <FaChevronCircleLeft />
            </button>

            <div className="max-w-4xl w-full px-4">
              <Image
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <p className="text-center text-white mt-4 text-lg">
                {images[selectedIndex].alt}
              </p>
            </div>

            <button
              onClick={showNext}
              className="absolute right-6 text-white hover:text-gray-300"
            >
              <FaChevronCircleRight />
            </button>
          </div>
        )}
      </section>
    </main>

       <UpcomingEvents />
      <footer className="bg-gray-800 text-white text-center p-4">
        &copy; 2025 Capitol City Hall Nigeria. All rights reserved.
      </footer>
    </div>
  )
}

export default Gallery