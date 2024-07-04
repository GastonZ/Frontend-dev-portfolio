import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";
import { motion } from "framer-motion";
import { punk1 } from '../../assets/index'

const Rings = ({ parallaxRef }) => {
    return (
        <>
            <motion.div
                animate={{ scale: [1.0, 1.2, 1.0] }}
                transition={{ duration: 60, repeat: Infinity }}
                className="absolute top-[100px] left-[105px] w-[65.875rem] aspect-square border border-color-1/55 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <motion.div
                animate={{ scale: [1.0, 1.2, 1.0] }}
                transition={{ duration: 60, repeat: Infinity }}
                className="absolute top-[220px] left-[220px] w-[51.375rem] aspect-square border border-color-1/35 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <motion.div
                animate={{ scale: [1.0, 1.2, 1.0] }}
                transition={{ duration: 60, repeat: Infinity }}
                className="absolute top-[330px] left-[330px] w-[38.125rem] aspect-square border border-color-1/15 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <motion.div
                animate={{ scale: [1.0, 1.2, 1.0] }}
                transition={{ duration: 60, repeat: Infinity }}
                className="brightness-150 absolute top-[430px] left-[430px] w-[25.125rem] aspect-square border border-color-1/90 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <MouseParallax strength={0.02} parallaxContainerRef={parallaxRef}>
                <motion.img src={punk1}
                    alt="Portfolio Icon"
                    animate={{ scale: [1.0, 1.2, 1.0], rotate: [0, 180, 0] }}
                    transition={{ duration: 60, repeat: Infinity }}
                    className="absolute top-[500px] opacity-70 brightness-125 left-[510px] w-[15.125rem]" />
            </MouseParallax>
        </>
    );
};

export const BackgroundCircles = ({ parallaxRef }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="absolute w-[78rem] aspect-square rounded-full z-1">
            <Rings />
            <div className="absolute top-[15rem] w-[78rem] aspect-square rounded-full  ">


                <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>

                    <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[46deg]">
                        <motion.div animate={{ translateY: [0, 20, 0] }} transition={{ duration: 20, repeat: Infinity }}
                            className={`w-2 h-2 -ml-1 -mt-36 bg-gradient-to-b from-[#7f5b8d] to-[#201522] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                        />
                    </div>

                    <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[56deg]">
                        <motion.div animate={{ translateY: [0, 50, 0] }} transition={{ duration: 20, repeat: Infinity }}
                            className={`w-4 h-4 -ml-1 -mt-32 bg-gradient-to-b from-[#c2b0d6] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                        />
                    </div>

                    <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[54deg]">
                        <motion.div animate={{ translateY: [0, 5, 0] }} transition={{ duration: 20, repeat: Infinity }}
                            className={`hidden w-4 h-4 -ml-1 mt-[12.9rem] bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full xl:block transit transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                        />
                    </div>

                    <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]">
                        <motion.div animate={{ translateY: [0, 70, 0] }} transition={{ duration: 20, repeat: Infinity }}
                            className={`w-3 h-3 -ml-1.5 mt-52 bg-gradient-to-b from-[#928aad] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                        />
                    </div>

                    <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]">
                        <motion.div animate={{ translateY: [0, 180, 0] }} transition={{ duration: 20, repeat: Infinity }}
                            className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#e981d8] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                        />
                    </div>

                    <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
                        <motion.div animate={{ translateY: [0, 30, 0] }} transition={{ duration: 20, repeat: Infinity }}
                            className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#f369be] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                        />
                    </div>
                </MouseParallax>
            </div>
        </div>
    );
};
