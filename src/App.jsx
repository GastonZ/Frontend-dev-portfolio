import { useEffect } from 'react'
import Header from './components/header'
import Intro from './components/intro'
import Projects from './components/projects'
import Experience from './components/experience'
import Aos from 'aos'
import 'aos/dist/aos.css';
import Contact from './components/contact/Contact'

function App() {

  Aos.init();

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <>
      <Header />
      <Intro />
      <Projects />
      <Experience />
{/*       <Contact /> */}
    </>
  )
}

export default App
