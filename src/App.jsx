import { useEffect } from 'react';
import Header from './components/header';
import Intro from './components/intro';
import Projects from './components/projects';
import Experience from './components/experience';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { isTouchableDevice } from './utils/helper';

function App() {

  let isMobile = isTouchableDevice();

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    if (!isMobile) {
      (async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      })();
    }
  }, [isMobile]);

  return (
    <>
      <Header />
      <Intro />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
