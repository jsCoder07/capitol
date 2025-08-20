import React from 'react'
import Head from "next/head";
import Menu from '@/app/components/Menu';
import Image from 'next/image';
import UpcomingEvents from '@/app/components/sections/UpcomingEvents';

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
        <Menu/>
      </header>
<main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="/images/wedding-main.jpg"
          alt="Wedding at our event center"
          fill
          priority
          className="object-cover brightness-50"
        />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold">Weddings at Capitol City Hall</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Celebrate your love in elegance and style at Lagos’ premier wedding venue.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-12">Wedding Moments</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "/images/hero-wedding.jpg",
            "/images/wedding5.jpg",
            "/images/wedding3.jpg",
            "/images/wedding-cover.jpg",
            "/images/wedding2.jpg",
            "/images/wedding13.jpg",
          ].map((src, i) => (
            <div key={i} className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image src={src} alt={`Wedding ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform" />
            </div>
          ))}
        </div>
      </section>

      {/* Highlight Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold mb-6">An Unforgettable Experience</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          From intimate gatherings to grand receptions, our venue provides the perfect
          backdrop for your dream wedding. With world-class service and elegant décor,
          your special day will be truly unforgettable.
        </p>
      </section>

      {/* Call To Action */}
      <section className="py-16 px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Book Your Dream Wedding</h2>
        <p className="text-lg text-gray-600 mb-6">
          Let us help you create memories that last a lifetime.
        </p>
        <a
          href="/contact"
          className="bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-700 transition"
        >
          Contact Us
        </a>
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
