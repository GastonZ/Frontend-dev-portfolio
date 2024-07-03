import { useEffect, useState } from 'react';


export default function Intro() {

  const [isActive, setIsActive] = useState(false);

  return (
    <div className='h-screen grid place-content-center text-center'>
        <h1>Gaston Zappulla</h1>
        <h2>Software Developer</h2>
    </div>
  )
}