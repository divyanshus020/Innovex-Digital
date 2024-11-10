import React, { useEffect } from 'react';
// import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Background from './util/Background';
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  useEffect(() => {
    new LocomotiveScroll({
      el: document.querySelector('#main'),
      smooth: true,
    });
  }, []);

  return (
    <div id="main" className="bg-[#EFEAE3] min-h-screen">
      {/* <Loader /> */}

      <Navbar />
      <Background/>
     
    </div>
  );
}

export default App;
