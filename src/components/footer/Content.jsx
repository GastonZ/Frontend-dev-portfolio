import React from 'react'

export default function Content() {
  return (
    <div className='bg-n-6 py-8 px-12 h-full w-full flex flex-col justify-between'>
        <Section1 />
        <Section2 />
    </div>
  )
}

const Section1 = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}

const Section2 = () => {
    return (
        <div className='flex justify-between items-end'>
            <h1 className='text-[10vw] mt-10 text-color-1'>Gastón Zappulla</h1>
            <p>End</p>
        </div>
    )
}

const Nav = () => {
    return (
        <div className='flex shrink-0 gap-20'>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-color-1'>Navigation</h3>
                <a className='text-white' href='#home'>Home</a>
                <a className='text-white' href='#projects'>Projects</a>
                <a className='text-white' href='#experience'>Our Mission</a>
                <a className='text-white' href='#contact'>Contact Us</a>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-color-1'>Socials</h3>
                <a target='_blank' href='https://www.linkedin.com/in/gastonzappulla/'>LinkedIn</a>
                <a target='_blank' href='https://github.com/GastonZ'>Github</a>
                <a href="mailto:gastonzappulla@outlook.com" target="_blank">E-mail</a>
            </div>
        </div>
    )
}