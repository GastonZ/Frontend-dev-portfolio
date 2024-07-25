import { useEffect, useState } from 'react';
import { BackgroundCircles } from '../design';


export default function Intro() {

    return (
        <div className='relative bg-n-7'>
            <div className='flex justify-center items-center h-screen flex-col'>
                <div className='z-2 text-center'>
                    <h1 className='text-[3rem] md:text-[5rem] first-letter:text-purple-600'>Gaston Zappulla</h1>
                    <h2 className='text-[2rem] md:text-[3rem] first-letter:text-purple-500'>Front End Developer</h2>
                </div>
                <BackgroundCircles />
            </div>
            <div className='h-[30vh] flex justify-center items-end'>
                <h1 className='text-[60px]'>
                    Projects
                </h1>
            </div>
        </div>
    )
}