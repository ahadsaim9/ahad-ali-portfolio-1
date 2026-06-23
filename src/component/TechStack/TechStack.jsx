import { m } from "framer-motion";
import PropTypes from "prop-types";
import {
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const frontend = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#111827" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
  { name: "RTK Query", icon: SiRedux, color: "#764ABC" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Material UI", icon: SiMui, color: "#007FFF" },
];

const backendAndTools = [
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Express.js", icon: SiExpress, color: "#111827" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#181717" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const technologyType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  color: PropTypes.string.isRequired,
});

const TechCard = ({ technology }) => {
  const Icon = technology.icon;

  return (
    <m.article
      className="tech-card"
      variants={cardVariants}
      whileHover={{
        scale: 1.08,
        y: -6,
        boxShadow: `0 18px 42px ${technology.color}2e`,
      }}
      transition={{ type: "spring", stiffness: 320, damping: 20 }}
    >
      <span className="tech-logo" style={{ color: technology.color }}>
        <Icon aria-hidden="true" />
      </span>
      <span className="whitespace-nowrap text-sm font-semibold text-slate-800">
        {technology.name}
      </span>
    </m.article>
  );
};

TechCard.propTypes = {
  technology: technologyType.isRequired,
};

const MarqueeRow = ({ technologies, reverse = false }) => (
  <div className="tech-marquee">
    <div className={`tech-marquee-track${reverse ? " tech-marquee-track--reverse" : ""}`}>
      {[0, 1].map((copy) => (
        <div className="tech-marquee-group" aria-hidden={copy === 1} key={copy}>
          {technologies.map((technology) => (
            <TechCard technology={technology} key={`${copy}-${technology.name}`} />
          ))}
        </div>
      ))}
    </div>
  </div>
);

MarqueeRow.propTypes = {
  technologies: PropTypes.arrayOf(technologyType).isRequired,
  reverse: PropTypes.bool,
};

const TechStack = () => {
  return (
    <m.section
      className="tech-stack-showcase relative isolate overflow-hidden rounded-3xl border border-white/70 px-4 py-10 shadow-xl sm:px-7 md:py-14"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="tech-orb tech-orb--one" aria-hidden="true" />
      <div className="tech-orb tech-orb--two" aria-hidden="true" />

      <m.div className="relative z-10 mb-9 text-center" variants={cardVariants}>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">
          My toolkit
        </p>
        <h2 className="mt-2 text-2xl font-bold text-slate-950 md:text-3xl">
          Tech Stack &amp; Tools
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
          Technologies I use to build scalable and modern web applications.
        </p>
      </m.div>

      <m.div className="relative z-10 space-y-4" variants={sectionVariants}>
        <MarqueeRow technologies={frontend} />
        <MarqueeRow technologies={backendAndTools} reverse />
      </m.div>
    </m.section>
  );
};

export default TechStack;
