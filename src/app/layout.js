import './globals.css';
import Navbar from './components/Navbar/page'; // Import our Navbar component
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Leo9 Studio Assignment',
  description: 'Assignment for Leo9 Studio Internship',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`min-h-screen ${inter.className}`}>
        {/* Render the Navbar */}
        <Navbar />
        {/* Render the main content of the page */}
        {children}
      </body>
    </html>
  );
}