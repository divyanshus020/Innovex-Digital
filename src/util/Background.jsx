// LandingPage.js
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import RINGS from 'vanta/dist/vanta.rings.min';
import Button from '../components/Button'; // Import the Button component

export default function LandingPage() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        RINGS({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          backgroundColor: 0x0,
          gyroControls: false,
          color:  0x0077ff,
          backgroundAlpha: 0.9,
          minHeight: 200.00,
          minWidth: 200.00,
          scaleMobile: 1.00,
          scale: 1.00,
          size: 1.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="w-full h-screen flex items-center p-20 relative mb-1">
      {/* Landing Page Content */}
      <div className="text-left text-white z-10">
        <h1 className="text-5xl font-bold mb-4">Innovex Digital</h1>
        <p className="text-xl mb-6">Empowering your business with innovative IT solutions for lasting success</p>
        <Button text="Get Started" onClick={() => alert("Button clicked!")} />
      </div>
      {/* Dark overlay for text readability */}
      {/* <div className="absolute inset-0 bg  "></div> */}
      
    </div>
  );
}
