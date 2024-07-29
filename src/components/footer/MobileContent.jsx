import React from 'react'

const MobileContent = () => {
    return (
        <div className='min-h-screen flex flex-col gap-4 justify-center'>
            <div className='flex flex-col  items-center'>
                <h3 className='text-2xl text-color-1'>NAVIGATION</h3>
                <span className='text-lg text-white'>
                    <a href="#home">
                        Home
                    </a>
                </span>
                <span className='text-lg text-white'>
                    <a href="#work">
                        Projects
                    </a>
                </span>
                <span className='text-lg text-white'>
                    <a href="#experience">
                        About
                    </a>
                </span>
                <span className='text-lg text-white'>
                    <a href="#contact">
                        Contact
                    </a>
                </span>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h3 className='text-2xl text-color-1'>SOCIALS</h3>
                <span className='text-lg text-white'>
                    <a href="https://www.linkedin.com/in/gastonzappulla/" target='_blank'>
                        LinkedIn
                    </a>
                </span>
                <span className='text-lg text-white'>
                    <a href="https://github.com/GastonZ" target='_blank'>
                        Github
                    </a>
                </span>
                <span className='text-lg text-white'>
                    <a href="mailto:gastonzappulla@outlook.com" target="_blank">
                        E-mail
                    </a>
                </span>
            </div>
        </div>
    )
}

export default MobileContent