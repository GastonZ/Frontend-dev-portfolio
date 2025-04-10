import { motion, useTransform, useScroll, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { tinky_laptop, facto_laptop, motorx_laptop, foco_laptop, mindy_laptop, projectDone, projectProgress, mytinerary_laptop, agencia_laptop } from "../../assets";
import { isTouchableDevice } from "../../utils/helper";

const cards = [
  { thopic : 'Connection',url: tinky_laptop, title: "Migracion y cultura", id: 1, done: true, link: 'https://migracionycultura.org/', canVisit: true },
  { thopic : 'Design',url: facto_laptop, title: "Facto Studio", id: 2, done: false, link: 'https://facto-studio.vercel.app/', canVisit: true },
  { thopic : 'AI',url: agencia_laptop, title: "AgencIA", id: 3, done: false, link: '-', canVisit: false },
  { thopic : 'Design - Shop',url: motorx_laptop, title: "Motor X", id: 4, done: true, link: 'https://motorx.vercel.app/', canVisit: true },
  { thopic : 'Landing - Software',url: foco_laptop, title: "Foco", id: 5, done: true, link: 'https://foco-website.vercel.app/', canVisit: true },
  { thopic : 'Pets - Shop',url: mindy_laptop, title: "Mindy", id: 6, done: true, link: 'https://petshop-mindy.netlify.app/', canVisit: true },
  { thopic : 'Design - Travel',url: mytinerary_laptop, title: "MyTinerary", id: 7, done: true, link: 'https://mytinerary-netrunners.vercel.app/', canVisit: true },
];

const Card = ({ card }) => {
  const [isHover, setHover] = useState(false);

  return (
    <div id="#work" key={card.id} className="hover:-translate-y-3 transition-all relative h-[495px] w-[700px] bg-n-14 z-[999999999]">
      {
        card.done ?
          <div>
            {
              isHover && (
                <AnimatePresence>
                  <motion.span
                    className="absolute right-[50px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Project completed
                  </motion.span>
                </AnimatePresence>
              )
            }
            <img
              alt="Project status icon"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className="absolute h-24 -right-[50px] -top-[45px]"
              src={projectDone}
            />
          </div>
          :
          <div>
            {
              isHover && (
                <AnimatePresence>
                  <motion.span
                    className="absolute right-[50px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Project in progress
                  </motion.span>
                </AnimatePresence>
              )
            }
            <img
              alt="Project status icon"
              loading="lazy"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className="absolute h-24 -right-[50px] -top-[45px]"
              src={projectProgress}
            />
          </div>
      }
      <div>
        <img className="h-[400px] w-full object-cover" src={card.url} alt="Portfolio project image" />
      </div>
      <div className="flex justify-between relative">
        <div className="flex flex-col p-4">
          <h2 className="text-sm text-color-text-light">{card.thopic}</h2>
          <h1 className="text-5xl">
            {card.title}
          </h1>
        </div>
        <div className="flex flex-col p-4 text-end justify-end">
          <span className="text-color-text-light underline underline-offset-2 cursor-pointer hover:text-gray-100 transition-all">{card.canVisit ? <a target="_blank" href={card.link}>Visit site</a> : 'Available soon'}  </span>
          {/* <span className="text-color-text-light underline underline-offset-2 cursor-pointer hover:text-gray-100 transition-all">About</span> */}
        </div>
      </div>
    </div>
  );
};

const CellPhoneCard = ({ card }) => {
  const [isHover, setHover] = useState(false);
  
  return (
    <div className="w-full px-4 relative">
      <img className="w-full object-cover" src={card.url} alt="" />
      <div className="flex flex-col absolute top-0 p-4 bg-n-7 w-full bg-opacity-30">
        <span className="text-xs ">
          {card.thopic}
        </span>
      <h2 className="text-3xl">
        {card.title}
      </h2>
      </div>
      {
        card.canVisit ? <a target="_blank" className="absolute bottom-0 right-10 text-color-1 brightness-125" href={card.link}>Visit</a> : <p className="absolute bottom-0 right-10 text-color-1 brightness-125">Developing</p>
      }
    </div>
  );
  
}

const Projects = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  let isCellphone = isTouchableDevice();
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-85%"]);

  return (
    isCellphone ?
    <section id="work" className="min-h-screen pt-10 bg-n-7 flex flex-wrap justify-center items-center gap-4">
          {cards.map((card) => (
            <CellPhoneCard card={card} key={card.id} xValue={x}/>
          ))}
    </section>
    :
    <section id="work" ref={targetRef} className="relative h-[200vh] bg-n-7 ">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-16">
          {cards.map((card) => (
            <Card card={card} key={card.id} xValue={x}/>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;