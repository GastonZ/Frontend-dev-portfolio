import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { tinky_laptop, facto_laptop, motorx_laptop, foco_laptop, mindy_laptop } from "../../assets";

const cards = [
  { url: tinky_laptop, title: "Tinky", id: 1 },
  { url: facto_laptop, title: "Facto", id: 2 },
  { url: "https://s1.zerochan.net/Rias.Gremory.600.4086864.jpg", title: "AgencIA", id: 3 },
  { url: motorx_laptop, title: "Motor X", id: 4 },
  { url: foco_laptop, title: "Foco", id: 5 },
  { url: mindy_laptop, title: "Mindy", id: 6 },
  { url: "https://s1.zerochan.net/Rias.Gremory.600.4086864.jpg", title: "MyTinerary", id: 7 },
];

const Card = ({ card }) => (
  <div key={card.id} className="group relative h-[200px] w-[450px] md:h-[450px] md:w-[700px] lg:h-[450px] lg:w-[700px] overflow-hidden">
    <div
      style={{ backgroundImage: `url(${card.url})`, backgroundSize: "cover", backgroundPosition: "center" }}
      className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
    ></div>
    <div className="absolute bottom-0 left z-10 grid place-content-start group-hover:bg-opacity-50 group-hover:bg-n-8 w-full transition-all">
      <p className="from-white/20 to-white/0 text-6xl font-black text-white group-hover:-translate-y-3 transition-all m-4">
        {card.title}
      </p>
    </div>
  </div>
);

const SpaceShip = ({ targetRef }) => {
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "2000%"]);
  const y = useTransform(scrollYProgress, [0, 0.5, 0.8, 1], ["0%", "1000%", "-1000%", "500%"]);

  return (
    <motion.div style={{ x, y }} className="absolute top-1/2 left-0 z-[999] -translate-y-1/2">
      Lanzo
    </motion.div>
  );
};

const Projects = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-85%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh] bg-n-7">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* <SpaceShip targetRef={targetRef} /> */}
        <motion.div style={{ x }} className="flex gap-6">
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
