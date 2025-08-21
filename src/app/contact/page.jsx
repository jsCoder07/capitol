import React from "react";
import Head from "next/head";
import Menu from "../components/Menu";
import UpcomingEvents from "../components/sections/UpcomingEvents";
const Contact = () => {
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
      <main className="bg-white text-gray-800">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-yellow-400 to-yellow-600 py-16 text-center text-white">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-2 text-lg">
            We’d love to hear from you. Get in touch with us today!
          </p>
        </section>

        {/* Contact Info + Form */}
        <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
            <p className="mb-4">
              Have questions about booking, events, or partnerships? Reach out
              to us via the form or using the contact details below.
            </p>
            <ul className="space-y-4">
              <li>
                <span className="font-semibold">Address:</span>
            68, Capitol Road, Carwash bus stop Oniwaya Agege Lagos.

              </li>
              <li>
                <span className="font-semibold">Phone:</span>
                <a
                  href="tel:+2347033777772"
                  className="text-yellow-600 hover:underline"
                >
                  +234 703 377 7772
                </a>
              </li>
              <li>
                <span className="font-semibold">Email:</span>
                <a
                  href="mailto:info@capitolcityhall.com.ng"
                  className="text-yellow-600 hover:underline"
                >
                  info@capitolcityhall.com.ng
                </a>
              </li>
            </ul>
          </div>

          {/* Right - Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Message</label>
                <textarea
                  rows={5}
                  placeholder="Type your message here..."
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Google Map Embed */}
        <section className="w-full h-80">
       
          <iframe
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.2539347219094!2d3.321647374993771!3d6.615340693378799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b91714c447d0d%3A0xe9986feac2abe33c!2sCapitol%20Rd%2C%20Agege%2C%20102212%2C%20Lagos!5e0!3m2!1sen!2sng!4v1755693489938!5m2!1sen!2sng"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </section>
      </main>
      <UpcomingEvents />
      <footer className="bg-gray-800 text-white text-center p-4">
        &copy; 2025 Capitol City Hall Nigeria. All rights reserved.
      </footer>
    </div>
  );
};

export default Contact;

