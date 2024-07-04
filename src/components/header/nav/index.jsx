import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { menuSlide } from '../anim';
import Link from './Link';
import Curve from './Curve';
import Footer from './Footer';

const navItems = [
  {
    title: "Home",
    href: "#",
  },
  {
    title: "Work",
    href: "#work",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Contact",
    href: "#contact",
  },
]

export default function index() {


  return (
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className="h-screen bg-purple-950 fixed right-0 top-0 z-3" style={{ color: 'white'}}>
       <div className="box-border h-full p-[100px] flex flex-col justify-center">
            <div className="flex flex-col text-[56px]">
                    <div className="border-b border-b-zinc-400 capitalize text-[11px] mb-10">
                        <p>Navigation</p>
                    </div>
                    {
                      navItems.map( (data, index) => {
                        return <Link key={index} data={{...data, index}}></Link>
                      })
                    }
            </div>
            <Footer />
        </div>
        <Curve />
    </motion.div>
  )
}