"use client";
import Navbar from './components/Navbar/page.jsx';
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
      <div className="pt-16">  
        <h1 className="text-3xl font-bold text-center mt-10">Hello from the Hero Section!</h1>
      </div>
    </main>
  );
}