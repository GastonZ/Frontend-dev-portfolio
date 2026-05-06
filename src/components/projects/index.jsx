import { motion, useTransform, useScroll, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import {
  tinky_laptop, facto_laptop, motorx_laptop,
  foco_laptop, mindy_laptop, mytinerary_laptop, agencia_laptop
} from "../../assets";
import { isTouchableDevice } from "../../utils/helper";

const cards = [
  { thopic: 'Connection', url: tinky_laptop, title: "Migracion y Cultura", id: 1, done: true, link: 'https://migracionycultura.org/', canVisit: true, accentColor: '#AC6AFF' },
  { thopic: 'Design Studio', url: facto_laptop, title: "Facto Studio", id: 2, done: false, link: 'https://facto-studio.vercel.app/', canVisit: true, accentColor: '#FF98E2' },
  { thopic: 'AI', url: agencia_laptop, title: "AgencIA", id: 3, done: false, link: '-', canVisit: false, accentColor: '#858DFF' },
  { thopic: 'Design & Shop', url: motorx_laptop, title: "Motor X", id: 4, done: true, link: 'https://motorx.vercel.app/', canVisit: true, accentColor: '#FFC876' },
  { thopic: 'Landing · Software', url: foco_laptop, title: "Foco", id: 5, done: true, link: 'https://foco-website.vercel.app/', canVisit: true, accentColor: '#7ADB78' },
  { thopic: 'Pets & Shop', url: mindy_laptop, title: "Mindy", id: 6, done: true, link: 'https://petshop-mindy.netlify.app/', canVisit: true, accentColor: '#FF776F' },
  { thopic: 'Design & Travel', url: mytinerary_laptop, title: "MyTinerary", id: 7, done: true, link: 'https://mytinerary-netrunners.vercel.app/', canVisit: true, accentColor: '#AC6AFF' },
];

const StatusBadge = ({ done }) => (
  <div
    className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
    style={{
      backdropFilter: 'blur(12px)',
      background: done ? 'rgba(122, 219, 120, 0.12)' : 'rgba(255, 199, 118, 0.12)',
      border: `1px solid ${done ? 'rgba(122,219,120,0.35)' : 'rgba(255,199,118,0.35)'}`,
      color: done ? '#7ADB78' : '#FFC876',
    }}
  >
    <span
      className="w-1.5 h-1.5 rounded-full"
      style={{
        background: done ? '#7ADB78' : '#FFC876',
        boxShadow: `0 0 6px ${done ? '#7ADB78' : '#FFC876'}`,
      }}
    />
    {done ? 'Live' : 'In Progress'}
  </div>
);

/* ─── 3D Tilt Card ─── */
const Card = ({ card }) => {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const imgX = useMotionValue(0);
  const imgY = useMotionValue(0);

  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 20 });
  const springImgX = useSpring(imgX, { stiffness: 100, damping: 25 });
  const springImgY = useSpring(imgY, { stiffness: 100, damping: 25 });

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const px = (e.clientX - cx) / (rect.width / 2);
    const py = (e.clientY - cy) / (rect.height / 2);

    rotateX.set(py * -8);
    rotateY.set(px * 8);
    // Parallax: image shifts opposite to mouse
    imgX.set(px * -12);
    imgY.set(py * -8);
  }, [rotateX, rotateY, imgX, imgY]);

  const handleMouseLeave = useCallback(() => {
    setHovered(false);
    rotateX.set(0);
    rotateY.set(0);
    imgX.set(0);
    imgY.set(0);
  }, [rotateX, rotateY, imgX, imgY]);

  return (
    <div
      style={{ perspective: '1000px' }}
      className="flex-shrink-0"
    >
      <motion.div
        ref={cardRef}
        onMouseEnter={() => setHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: 'preserve-3d',
          background: 'rgba(12, 8, 20, 0.88)',
          backdropFilter: 'blur(20px)',
          border: hovered
            ? `1px solid ${card.accentColor}55`
            : '1px solid rgba(172,106,255,0.1)',
          boxShadow: hovered
            ? `0 25px 50px rgba(0,0,0,0.6), 0 0 60px ${card.accentColor}15, inset 0 0 60px ${card.accentColor}05`
            : '0 8px 32px rgba(0,0,0,0.5)',
        }}
        className="relative w-[420px] h-[530px] rounded-2xl overflow-hidden cursor-pointer"
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      >
        <StatusBadge done={card.done} />

        {/* Image layer with parallax */}
        <motion.div
          className="relative h-[310px] overflow-hidden"
          style={{
            x: springImgX,
            y: springImgY,
            scale: hovered ? 1.05 : 1,
            transformStyle: 'preserve-3d',
            transform: 'translateZ(20px)',
          }}
        >
          <img
            src={card.url}
            alt={card.title}
            className="w-full h-full object-cover"
            style={{ transform: 'scale(1.15)' }}
          />
        </motion.div>

        {/* Gradient fade between image and content */}
        <div
          className="absolute left-0 right-0 h-32 pointer-events-none"
          style={{
            top: '230px',
            background: 'linear-gradient(to bottom, transparent, rgba(12,8,20,0.98))',
          }}
        />

        {/* Accent glow line */}
        <div
          className="absolute left-0 right-0 h-px"
          style={{
            top: '310px',
            background: `linear-gradient(90deg, transparent 10%, ${card.accentColor}${hovered ? 'bb' : '33'}, transparent 90%)`,
            transition: 'all 0.5s',
          }}
        />

        {/* Content layer — slightly raised in Z */}
        <div
          className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-3"
          style={{ transform: 'translateZ(40px)' }}
        >
          <span
            className="text-[10px] font-bold tracking-[0.3em] uppercase"
            style={{ color: card.accentColor }}
          >
            {card.thopic}
          </span>

          <h2 className="text-2xl font-bold leading-tight text-white/95">
            {card.title}
          </h2>

          <div className="flex items-center justify-between pt-1.5">
            <span className="text-xs font-mono text-white/20">
              {String(card.id).padStart(2, '0')}
            </span>
            {card.canVisit ? (
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium group/link"
                style={{
                  color: hovered ? card.accentColor : 'rgba(255,255,255,0.45)',
                  transition: 'color 0.3s',
                }}
                onClick={(e) => e.stopPropagation()}
              >
                Visit site
                <span
                  className="inline-block transition-transform duration-300 group-hover/link:translate-x-1"
                >
                  →
                </span>
              </a>
            ) : (
              <span className="text-xs text-white/25">Coming soon</span>
            )}
          </div>
        </div>

        {/* Reflective shine on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{
            background: hovered
              ? `linear-gradient(135deg, ${card.accentColor}08 0%, transparent 50%, ${card.accentColor}05 100%)`
              : 'transparent',
            transition: 'background 0.5s',
          }}
        />
      </motion.div>
    </div>
  );
};

/* ─── Mobile card (no tilt) ─── */
const MobileCard = ({ card }) => (
  <div
    className="relative w-full rounded-2xl overflow-hidden"
    style={{
      background: 'rgba(12, 8, 20, 0.88)',
      border: '1px solid rgba(172,106,255,0.12)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
    }}
  >
    <StatusBadge done={card.done} />
    <div className="relative h-[200px] overflow-hidden">
      <img src={card.url} alt={card.title} className="w-full h-full object-cover" />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, transparent 30%, rgba(12,8,20,0.95) 100%)' }}
      />
    </div>
    <div className="p-5 flex flex-col gap-2">
      <span className="text-[10px] font-bold tracking-[0.3em] uppercase" style={{ color: card.accentColor }}>
        {card.thopic}
      </span>
      <h2 className="text-xl font-bold text-white">{card.title}</h2>
      <div className="flex justify-between items-center pt-1">
        <span className="text-xs font-mono text-white/20">{String(card.id).padStart(2, '0')}</span>
        {card.canVisit ? (
          <a href={card.link} target="_blank" rel="noopener noreferrer" className="text-sm font-medium" style={{ color: card.accentColor }}>
            Visit site →
          </a>
        ) : (
          <span className="text-xs text-white/30">Coming soon</span>
        )}
      </div>
    </div>
  </div>
);

/* ─── Main Projects Section ─── */
const Projects = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const isCellphone = isTouchableDevice();
  const x = useTransform(scrollYProgress, [0, 1], ['2%', '-76%']);

  // Parallax background offset for depth effect
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '-8%']);

  if (isCellphone) {
    return (
      <section id="work" className="min-h-screen pt-8 pb-16 px-4" style={{ background: '#15131D' }}>
        <div className="flex flex-col gap-5 max-w-lg mx-auto">
          {cards.map((card) => (
            <MobileCard card={card} key={card.id} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="work" ref={targetRef} className="relative h-[260vh]" style={{ background: '#15131D' }}>
      {/* Ambient glow that moves with scroll */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          y: bgY,
          background: 'radial-gradient(ellipse at 40% 50%, rgba(172,106,255,0.05) 0%, transparent 50%), radial-gradient(ellipse at 70% 40%, rgba(255,152,226,0.03) 0%, transparent 40%)',
        }}
      />

      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-40 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #15131D, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-40 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #15131D, transparent)' }} />

        {/* Card count indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {cards.map((_, i) => (
            <motion.div
              key={i}
              className="h-1 rounded-full"
              style={{
                width: '24px',
                background: `rgba(172,106,255,${0.15 + i * 0.05})`,
              }}
            />
          ))}
        </div>

        <motion.div style={{ x }} className="flex gap-10 pl-24">
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
