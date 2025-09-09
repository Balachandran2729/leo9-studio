"use client";
import Navbar from './components/Navbar/page.jsx';
import Hero from './components/Hero/page.jsx';
import BlogCard from './components/BlogCard/page.jsx';
import { useEffect, useState } from 'react';
export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <main>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Hero isDarkMode={isDarkMode} />
      <BlogCard isDarkMode={isDarkMode} />
    </main>
  );
}