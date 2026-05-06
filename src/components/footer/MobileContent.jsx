import React from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#work' },
  { label: 'About', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gastonzappulla/' },
  { label: 'Github', href: 'https://github.com/GastonZ' },
  { label: 'E-mail', href: 'mailto:gastonzappulla@outlook.com' },
];

const MobileContent = () => {
  return (
    <div
      className="flex flex-col items-center justify-center px-6 py-16 gap-10"
      style={{ background: 'linear-gradient(to bottom, #0E0C15, #08060f)' }}
    >
      {/* Separator */}
      <div className="h-px w-24" style={{ background: 'linear-gradient(90deg, transparent, #AC6AFF55, transparent)' }} />

      {/* Navigation */}
      <div className="flex flex-col items-center gap-3">
        <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase mb-1" style={{ color: '#AC6AFF' }}>
          Navigation
        </h3>
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} className="text-sm text-white/50 transition-colors hover:text-purple-400">
            {link.label}
          </a>
        ))}
      </div>

      {/* Socials */}
      <div className="flex flex-col items-center gap-3">
        <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase mb-1" style={{ color: '#AC6AFF' }}>
          Socials
        </h3>
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/50 transition-colors hover:text-purple-400"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Back to top */}
      <motion.a
        href="#home"
        className="flex items-center gap-2 text-xs tracking-widest uppercase text-white/25"
        whileTap={{ scale: 0.95 }}
      >
        Back to top
        <motion.span
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          ↑
        </motion.span>
      </motion.a>

      {/* Name */}
      <h2
        className="text-3xl font-bold text-center select-none"
        style={{
          background: 'linear-gradient(135deg, rgba(172,106,255,0.6), rgba(172,106,255,0.15))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        Gastón Zappulla
      </h2>

      <p className="text-xs text-white/15">© {new Date().getFullYear()}</p>
    </div>
  );
};

export default MobileContent;
