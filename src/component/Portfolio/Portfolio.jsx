import { m } from "framer-motion";

const projects = [
  {
    title: "CarVu – Vehicle Marketplace Platform",
    href: "https://staging.helloauto.ca/",
    image: "https://i.ibb.co.com/JwCRcsNN/Screenshot-2026-06-22-180322.png",
    description:
      "A modern vehicle marketplace with advanced search, listing management, auctions, and secure user workflows. I built responsive interfaces, integrated REST APIs, implemented dynamic forms, and managed state with Redux Toolkit and RTK Query.",
    technologies: ["React", "TypeScript", "Redux Toolkit", "RTK Query"],
  },
  {
    title: "Zenticsys – Corporate Website",
    href: "https://www.zenticsys.com/",
    image: "https://i.ibb.co.com/Z6FPqH4C/Screenshot-2026-06-22-184946.png",
    description:
      "A responsive corporate platform showcasing software, SaaS, UI/UX, mobile, and digital transformation services. I contributed reusable components, performance improvements, and production-ready responsive experiences.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Responsive UI"],
  },
];

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardsContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: (index) => ({ opacity: 0, x: index === 0 ? -150 : 150 }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: {
    y: -8,
    scale: 1.03,
    boxShadow: "0 24px 50px rgba(15, 23, 42, 0.18)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const badgeContainerVariants = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.35, staggerChildren: 0.08 },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { scale: 1 },
  visible: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } },
};

const Portfolio = () => {
  return (
    <m.section id="portfolio" className="page-section overflow-x-clip">
      <m.div
        className="mb-10"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
          Selected work
        </p>
        <h2 className="mt-2 text-3xl font-bold text-gray-950 md:text-4xl">
          Portfolio
        </h2>
      </m.div>

      <m.div
        className="grid gap-7 lg:grid-cols-2"
        variants={cardsContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {projects.map((project, index) => (
          <m.a
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/80 bg-white shadow-md outline-none ring-blue-500/20 focus-visible:ring-4"
            custom={index}
            href={project.href}
            key={project.title}
            target="_blank"
            rel="noreferrer"
            variants={cardVariants}
            whileHover="hover"
            whileFocus="hover"
          >
            <div className="relative overflow-hidden">
              <m.img
                className="h-56 w-full object-cover"
                src={project.image}
                alt={`${project.title} preview`}
                loading="lazy"
                variants={imageVariants}
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold text-gray-950 transition-colors group-hover:text-blue-700 md:text-2xl">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 leading-7 text-gray-600">
                {project.description}
              </p>
              <m.div
                className="mt-5 flex flex-wrap gap-2"
                variants={badgeContainerVariants}
              >
                {project.technologies.map((technology) => (
                  <m.span
                    className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                    key={technology}
                    variants={badgeVariants}
                  >
                    {technology}
                  </m.span>
                ))}
              </m.div>
            </div>
          </m.a>
        ))}
      </m.div>
    </m.section>
  );
};

export default Portfolio;
