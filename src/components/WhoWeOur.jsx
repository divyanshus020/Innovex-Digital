import React from 'react';
import Button from './Button'; // Import your custom Button component

const WhoWeAre = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-r from-blue-500 to-purple-700 text-white">
      <h2 className="text-4xl font-bold mb-4 ">Who We Are</h2>
      <h2 className="text-6xl font-bold mb-4 animate-bounce">You Dream It, We Build It
      </h2>
      <p className="text-lg max-w-2xl text-center mb-6 transition duration-500 ease-in-out transform hover:scale-105">
        At Innovex Digital, we are a passionate team of digital innovators dedicated to crafting cutting-edge solutions
        that drive business success. Founded with a mission to empower brands through technology, we specialize in web
        and mobile app development, digital marketing, and comprehensive software consulting.
      </p>
      <div className="flex gap-4">
        <Button text="Learn More" className="bg-white text-blue-700 hover:bg-blue-700 hover:text-white" />
        <Button text="Contact Us" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700" />
      </div>
    </section>
  );
};

export default WhoWeAre;
