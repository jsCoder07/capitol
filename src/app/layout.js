

import { Playfair_Display,Lato,Open_Sans } from "next/font/google";
  import './globals.css';


    const openSans = Open_Sans({
      subsets: ['latin'], // Specify the necessary subsets
      display: 'swap', // Recommended for better performance
      // If not using a variable font, specify weights:
      // weight: ['400', '700'],
    });
// Load the font
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"], // choose weights you need
  variable: "--font-playfair",
});

const lato = Lato({
      subsets: ['latin'],
      weight: ['400', '700'], // Specify the weights you want to use (e.g., regular and bold)
      variable: '--font-lato', // Optional: Define a CSS variable for the font
    });



export const metadata = {
  title: "Welcome to Capitol City Hall",
  description: "Capitol City Hall",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${openSans.variable} ${playfair.variable}`}>
      <body>
       
        {children}
      </body>
    </html>
  );
}
