import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cyber_one, cyber_two, cyber_three, cyber_four } from '../../assets/index';
import { isTouchableDevice } from '../../utils/helper';

const timelineData = [
  {
    year: '2021',
    title: 'The Beginning of the Journey',
    description: 'In 2021, I embarked on my adventure in web development. I undertook various self-study projects and practiced algorithms. Additionally, I completed an intensive 1500-hour course that simulated a real work environment.',
    image: cyber_one,
    align: 'left',
    accentColor: '#AC6AFF',
    tag: 'Learning',
  },
  {
    year: '2022',
    title: 'My First Professional Job',
    description: (
      <>
        In 2022, I landed my first job as a frontend developer at{' '}
        <a target="_blank" rel="noopener noreferrer" href="https://totalcoin.com/" style={{ color: '#AC6AFF', fontWeight: 600 }}>
          Totalcoin.
        </a>{' '}
        For a year, I applied my knowledge in a professional setting and significantly grew as a developer while still working in freelance jobs and non-stop learning.
      </>
    ),
    image: cyber_two,
    align: 'right',
    accentColor: '#FF98E2',
    tag: 'Professional',
  },
  {
    year: '2023',
    title: 'Venturing into New Horizons',
    description: (
      <>
        I decided to dedicate myself entirely to{' '}
        <a href="https://www.linkedin.com/company/la-agencia-ia/" target="_blank" rel="noopener noreferrer" style={{ color: '#858DFF', fontWeight: 600 }}>
          The AgencIA
        </a>{' '}
        key project, which is still under development. A massive project dedicated to promoting companies and businesses using AI and social media.
      </>
    ),
    image: cyber_three,
    align: 'left',
    accentColor: '#858DFF',
    tag: 'Entrepreneurship',
  },
  {
    year: '2024',
    title: 'Growing',
    description: 'In 2024, a partner and I founded a software development company. Currently, I am working on AI-related projects, exploring new technologies, and expanding my horizons.',
    image: cyber_four,
    align: 'right',
    accentColor: '#FFC876',
    tag: 'Founder',
  },
];

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '172, 106, 255';
}

/* ─── Single timeline card with 3D reveal ─── */
const TimelineCard = ({ item, index, isMobile }) => {
  const isLeft = isMobile ? true : item.align === 'left';
  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });

  const cardRotateY = useTransform(scrollYProgress, [0, 1], [isLeft ? -6 : 6, 0]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 0.6, 1]);
  const cardX = useTransform(scrollYProgress, [0, 1], [isLeft ? -60 : 60, 0]);
  const cardScale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);

  // Image parallax: moves slower than card
  const imgY = useTransform(scrollYProgress, [0, 1], [30, -10]);

  return (
    <div ref={ref} className="relative flex items-center justify-center w-full py-6 md:py-10">
      {/* Central dot (desktop only) */}
      {!isMobile && (
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 z-20"
          style={{
            width: '14px',
            height: '14px',
            borderRadius: '50%',
            background: item.accentColor,
            boxShadow: `0 0 0 4px rgba(${hexToRgb(item.accentColor)}, 0.2), 0 0 24px ${item.accentColor}55`,
            scale: cardScale,
          }}
        />
      )}

      {/* Year badge */}
      <motion.div
        style={{ opacity: cardOpacity, scale: cardScale }}
        className={`absolute ${isMobile ? 'left-0 top-0' : 'left-1/2 -translate-x-1/2 -top-2'} z-10`}
      >
        <span
          className="text-[10px] font-mono font-bold tracking-[0.25em] px-3 py-1 rounded-full"
          style={{
            background: `rgba(${hexToRgb(item.accentColor)}, 0.1)`,
            border: `1px solid ${item.accentColor}44`,
            color: item.accentColor,
          }}
        >
          {item.year}
        </span>
      </motion.div>

      {/* Card with 3D perspective rotation on scroll */}
      <motion.div
        style={{
          perspective: '1200px',
          width: isMobile ? '100%' : 'calc(50% - 3rem)',
          marginLeft: isLeft ? 0 : 'auto',
          marginRight: isLeft ? 'auto' : 0,
          marginTop: '2rem',
        }}
      >
        <motion.div
          style={{
            rotateY: isMobile ? 0 : cardRotateY,
            opacity: cardOpacity,
            x: cardX,
            scale: cardScale,
            transformStyle: 'preserve-3d',
          }}
        >
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(12, 8, 22, 0.7)',
              backdropFilter: 'blur(16px)',
              border: `1px solid rgba(${hexToRgb(item.accentColor)}, 0.15)`,
              boxShadow: `0 8px 40px rgba(0,0,0,0.4)`,
            }}
          >
            {/* Top accent */}
            <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${item.accentColor}77, transparent)` }} />

            <div className="flex gap-5 p-5 md:p-6 items-start">
              {/* Avatar with parallax */}
              <div className="flex-shrink-0 relative">
                <motion.div style={{ y: isMobile ? 0 : imgY }}>
                  <motion.img
                    loading="lazy"
                    src={item.image}
                    alt={item.year}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-xl object-cover"
                    style={{
                      border: `2px solid ${item.accentColor}44`,
                      boxShadow: `0 0 24px ${item.accentColor}22`,
                    }}
                  />
                </motion.div>
                <div className="absolute inset-0 rounded-xl blur-xl -z-10 opacity-30" style={{ background: item.accentColor }} />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <span
                  className="inline-block text-[9px] font-bold tracking-[0.3em] uppercase mb-2 px-2.5 py-1 rounded-full"
                  style={{
                    background: `rgba(${hexToRgb(item.accentColor)}, 0.1)`,
                    color: item.accentColor,
                    border: `1px solid ${item.accentColor}33`,
                  }}
                >
                  {item.tag}
                </span>

                {/* Large watermark year */}
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl md:text-5xl font-bold font-mono leading-none select-none" style={{ color: item.accentColor, opacity: 0.12 }}>
                    {item.year}
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-bold mb-2 leading-snug text-white/95">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/50">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

/* ─── Glowing timeline line ─── */
const TimelineLine = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px">
      {/* Static dim line */}
      <div className="absolute inset-0" style={{ background: 'rgba(172,106,255,0.08)' }} />
      {/* Growing glow line */}
      <motion.div
        className="absolute top-0 left-0 right-0 origin-top"
        style={{
          scaleY,
          height: '100%',
          background: 'linear-gradient(to bottom, #AC6AFF88, #FF98E266, #858DFF88, #FFC87666)',
          boxShadow: '0 0 8px rgba(172,106,255,0.3)',
        }}
      />
    </div>
  );
};

const Experience = () => {
  const isMobile = isTouchableDevice();

  return (
    <div
      id="experience"
      className="relative min-h-screen py-20 md:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #15131D, #0E0C15)' }}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(172,106,255,0.05) 0%, transparent 50%)' }} />

      {/* Header */}
      <div className="text-center mb-16 md:mb-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 text-xs tracking-[0.35em] uppercase text-purple-400 font-medium mb-4">
            <span className="inline-block w-6 h-px bg-purple-400" />
            Timeline
            <span className="inline-block w-6 h-px bg-purple-400" />
          </span>
          <h2
            className="text-5xl md:text-7xl font-bold"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #e8d5ff 40%, #AC6AFF 80%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            My Journey
          </h2>
        </motion.div>
      </div>

      {/* Timeline content */}
      <div className="relative max-w-5xl mx-auto px-4 md:px-6">
        {!isMobile && <TimelineLine />}

        <div className="flex flex-col">
          {timelineData.map((item, index) => (
            <TimelineCard key={item.year} item={item} index={index} isMobile={isMobile} />
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #0E0C15)' }} />
    </div>
  );
};

export default Experience;
