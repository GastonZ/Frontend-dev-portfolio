import { useEffect } from 'react'
import Header from './components/header'
import Intro from './components/intro'
import Projects from './components/projects'

function App() {

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
    </>
  )
}

export default App
