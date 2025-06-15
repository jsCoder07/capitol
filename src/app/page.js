import Head from "next/head";
import Menu from "../app/components/Menu";
import Hero from "../app/components/sections/Hero"; // Adjust path if necessary
import Introduction from "../app/components/sections/Introduction";
import ServicesOverview from "../app/components/sections/ServicesOverview";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import UpcomingEvents from "./components/sections/UpcomingEvents";
import ScrollFadeIn from './components/animations/ScrollFadeIn';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Event Center Nigeria</title>
        <meta
          name="description"
          content="Your premier event center in Nigeria"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Menu />
      </header>

      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
       
        <Introduction eventCenterName="Capitol City Hall" />
        
        <ServicesOverview />
       
     <WhyChooseUs />
        {/* ... more content */}

        <UpcomingEvents/>
      </main>

      <footer className="bg-gray-800 text-white text-center p-4">
        &copy; 2025 Capitol City Hall Nigeria. All rights reserved.
      </footer>
    </div>
  );
}
