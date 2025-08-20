import React from 'react'
import Head from "next/head";
import Menu from '@/app/components/Menu';
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

      <UpcomingEvents/>
      <footer className="bg-gray-800 text-white text-center p-4">
        &copy; 2025 Capitol City Hall Nigeria. All rights reserved.
      </footer>
    </div>
  )
}

export default page
