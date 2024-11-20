import React, { useEffect } from 'react';
// import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Background from './util/Background';
import LocomotiveScroll from 'locomotive-scroll';
import WhoWeAre from './components/WhoWeOur';
import { TracingBeam } from './components/ui/tracing-beam';
import { Meteors } from './components/ui/meteors';

function App() {
  useEffect(() => {
    new LocomotiveScroll({
      el: document.querySelector('#main'),
      smooth: true,
    });
  }, []);

  return (
    <div id="main" className="">
      {/* <Loader /> */}

      <Navbar />
      <Background/>
      <WhoWeAre/>
      {/* <TracingBeam/> */}
      <div className=' absolute w-full  bottom-[-100px] border-2 border-red-900'>
      <Meteors/>
      </div>
    </div>
  );
}

export default App;
