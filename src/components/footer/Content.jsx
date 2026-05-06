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

const FooterLink = ({ href, children, external }) => (
  <a
    href={href}
    target={external ? '_blank' : undefined}
    rel={external ? 'noopener noreferrer' : undefined}
    className="text-sm transition-colors duration-300"
    style={{ color: 'rgba(255,255,255,0.45)' }}
    onMouseEnter={(e) => (e.target.style.color = '#AC6AFF')}
    onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.45)')}
  >
    {children}
  </a>
);

export default function Content() {
  return (
    <div
      className="h-full w-full flex flex-col justify-between px-12 py-10"
      style={{ background: 'linear-gradient(to bottom, #0E0C15, #08060f)' }}
    >
      {/* Top section */}
      <div className="flex justify-between items-start">
        <div className="flex gap-20">
          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <h3
              className="text-[10px] font-bold tracking-[0.3em] uppercase mb-2"
              style={{ color: '#AC6AFF' }}
            >
              Navigation
            </h3>
            {navLinks.map((link) => (
              <FooterLink key={link.label} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-3">
            <h3
              className="text-[10px] font-bold tracking-[0.3em] uppercase mb-2"
              style={{ color: '#AC6AFF' }}
            >
              Socials
            </h3>
            {socialLinks.map((link) => (
              <FooterLink key={link.label} href={link.href} external>
                {link.label}
              </FooterLink>
            ))}
          </div>
        </div>

        {/* Back to top */}
        <motion.a
          href="#home"
          className="flex items-center gap-2 text-xs tracking-widest uppercase transition-colors duration-300"
          style={{ color: 'rgba(255,255,255,0.3)' }}
          whileHover={{ color: 'rgba(172,106,255,0.8)', y: -2 }}
        >
          <span>Back to top</span>
          <motion.span
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            ↑
          </motion.span>
        </motion.a>
      </div>

      {/* Separator */}
      <div className="h-px w-full my-6" style={{ background: 'linear-gradient(90deg, transparent, rgba(172,106,255,0.15), transparent)' }} />

      {/* Bottom section - large name */}
      <div className="flex justify-between items-end">
        <h1
          className="font-bold leading-none select-none"
          style={{
            fontSize: 'clamp(3rem, 9vw, 10rem)',
            background: 'linear-gradient(135deg, rgba(172,106,255,0.7) 0%, rgba(172,106,255,0.15) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Gastón Zappulla
        </h1>
        <p className="text-xs text-white/15 pb-2 flex-shrink-0 pl-4">
          © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
