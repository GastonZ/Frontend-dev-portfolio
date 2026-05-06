import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import SpaceScene from '../space/SpaceScene';
import { isTouchableDevice } from '../../utils/helper';

const TypewriterText = ({ text, delay = 0 }) => {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 55);
    return () => clearInterval(interval);
  }, [started, text]);

  return <span>{displayed}<span className="animate-pulse">|</span></span>;
};

export default function Intro() {
  const isCellphone = isTouchableDevice();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div id="home" className="relative bg-n-8 overflow-hidden">
      {/* 3D Space Scene background */}
      <div className="relative h-screen flex justify-center items-center flex-col overflow-hidden">
        {!isCellphone && <SpaceScene />}

        {/* Mobile star background */}
        {isCellphone && (
          <div className="absolute inset-0 z-0" style={{
            background: 'radial-gradient(ellipse at 50% 50%, #1a0a2e 0%, #0E0C15 60%, #08060f 100%)'
          }} />
        )}

        {/* Radial glow behind text */}
        <div
          className="absolute z-1 pointer-events-none"
          style={{
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(172,106,255,0.12) 0%, rgba(172,106,255,0.04) 40%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
            left: '50%',
            top: '50%',
          }}
        />

        {/* Hero text */}
        <motion.div
          className="z-10 text-center px-4 select-none"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow label */}
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.35em] uppercase text-purple-400 font-medium">
              <span className="inline-block w-6 h-px bg-purple-400" />
              Portfolio
              <span className="inline-block w-6 h-px bg-purple-400" />
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-bold leading-none mb-3"
            style={{
              fontSize: 'clamp(2.8rem, 8vw, 7rem)',
              background: 'linear-gradient(135deg, #ffffff 0%, #e8d5ff 40%, #AC6AFF 70%, #FF98E2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 40px rgba(172,106,255,0.3))',
            }}
          >
            Gastón Zappulla
          </motion.h1>

          {/* Title */}
          <motion.div variants={itemVariants}>
            <h2
              className="text-xl md:text-3xl font-light tracking-widest"
              style={{ color: 'rgba(255,255,255,0.65)' }}
            >
              Front End Developer
            </h2>
          </motion.div>

          {/* Tags */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mt-8"
          >
            {['React', 'Next.js', 'TypeScript', 'UI/UX'].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full text-xs tracking-widest uppercase"
                style={{
                  background: 'rgba(172,106,255,0.1)',
                  border: '1px solid rgba(172,106,255,0.3)',
                  color: '#AC6AFF',
                  backdropFilter: 'blur(8px)',
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="mt-10 flex justify-center gap-4">
            <a
              href="#work"
              className="group relative px-8 py-3 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #AC6AFF, #FF98E2)',
                color: '#fff',
                boxShadow: '0 0 30px rgba(172,106,255,0.4)',
              }}
            >
              <span className="relative z-10">View Projects</span>
            </a>
            <a
              href="#experience"
              className="px-8 py-3 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                background: 'rgba(172,106,255,0.08)',
                border: '1px solid rgba(172,106,255,0.35)',
                color: 'rgba(255,255,255,0.8)',
                backdropFilter: 'blur(10px)',
              }}
            >
              About Me
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <span className="text-xs tracking-widest uppercase text-white/30">Scroll</span>
          <motion.div
            className="w-px h-12"
            style={{ background: 'linear-gradient(to bottom, rgba(172,106,255,0.6), transparent)' }}
            animate={{ scaleY: [0, 1, 0], originY: 0 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>

      {/* Projects transition */}
      <div
        className="h-[20vh] flex justify-center items-end pb-6"
        style={{
          background: 'linear-gradient(to bottom, transparent, #15131D)',
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(172,106,255,0.6))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Projects
        </motion.h2>
      </div>
    </div>
  );
}
