

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    title: "Learn New Skills",
    subtitle: "Share what you know",
    desc: "SkillSwap is a platform where people can exchange knowledge — teach what you know and learn what you love.",
    img: "https://i.ibb.co.com/Kc2Z616v/download-3.jpg",
    bg: "from-blue-100 to-blue-50"
  },
  {
    id: 2,
    title: "Connect Locally",
    subtitle: "Meet mentors in your area",
    desc: "Find and book sessions with local skill providers easily and quickly.",
    img: "https://i.ibb.co.com/G34ZgSpg/download-6.png",
    bg: "from-purple-100 to-purple-50"
  },
  {
    id: 3,
    title: "Grow Together",
    subtitle: "Learn and teach",
    desc: "Share your knowledge and learn new skills from others in the community.",
    img: "https://i.ibb.co.com/rRP86xSP/download-4.jpg",
    bg: "from-green-100 to-green-50"
  },
  {
    id: 4,
    title: "Boost Your Career",
    subtitle: "Upskill and achieve",
    desc: "Take your skills to the next level with guided sessions from experts.",
    img: "https://i.ibb.co.com/mVMG0w3S/images-5.jpg",
    bg: "from-yellow-100 to-yellow-50"
  }
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 transition-transform duration-1000 ease-in-out
            ${index === current ? "translate-x-0" : "translate-x-full"} bg-gradient-to-r ${slide.bg}`}
        >
          {/* Text */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-700 leading-tight">
              {slide.title} <br />
              <span className="text-orange-500">{slide.subtitle}</span>
            </h1>
            <p className="text-gray-600 text-lg">{slide.desc}</p>
            <div className="space-x-4">
              <Link to="/skills" className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">Explore Skills</Link>
              <Link to="/register" className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition">Join Now</Link>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-[300px] mt-6 md:mt-0">
            <img src={slide.img} alt={slide.title} className="rounded-2xl shadow-lg w-full max-w-lg mx-auto" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;

