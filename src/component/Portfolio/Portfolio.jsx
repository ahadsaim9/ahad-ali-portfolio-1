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
  {
    title: "Bank Account Manager",
    href: "https://remarkable-daffodil-f73acd.netlify.app/",
    image: "https://i.ibb.co/zRFFrfB/Screenshot-2024-08-13-120559.png",
    description:
      "A secure and convenient interface for managing bank accounts, deposits, and withdrawals through a focused, user-friendly workflow.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Helping People",
    href: "https://ahad-saim-asm-donation-campaign.netlify.app/",
    image: "https://i.ibb.co/jHp9V1H/Screenshot-2024-08-13-215402.png",
    description:
      "A donation campaign platform highlighting health, education, and clothing initiatives that address essential human needs.",
    technologies: ["React", "JavaScript", "REST API"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  hover: {
    y: -8,
    scale: 1.015,
    boxShadow: "0 22px 45px rgba(15, 23, 42, 0.16)",
    transition: { duration: 0.3 },
  },
};

const technologyVariants = {
  rest: { opacity: 0.65, y: 6 },
  hover: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } },
};

const chipVariants = {
  rest: { opacity: 0.65, scale: 0.96 },
  hover: { opacity: 1, scale: 1 },
};

const Portfolio = () => {
  return (
    <m.section
      id="portfolio"
      className="page-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
    >
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
          Selected work
        </p>
        <h2 className="mt-2 text-3xl font-bold text-gray-950 md:text-4xl">
          Portfolio
        </h2>
      </div>

      <m.div
        className="grid gap-6 lg:grid-cols-2"
        variants={containerVariants}
      >
        {projects.map((project) => (
          <m.a
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md outline-none"
            href={project.href}
            key={project.title}
            target="_blank"
            rel="noreferrer"
            variants={cardVariants}
            whileHover="hover"
            whileFocus="hover"
          >
            <div className="overflow-hidden">
              <m.img
                className="h-56 w-full object-cover"
                src={project.image}
                alt={`${project.title} preview`}
                loading="lazy"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.45 }}
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold text-gray-950 md:text-2xl">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 leading-7 text-gray-600">
                {project.description}
              </p>
              <m.div
                className="mt-5 flex flex-wrap gap-2"
                variants={technologyVariants}
              >
                {project.technologies.map((technology) => (
                  <m.span
                    className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                    key={technology}
                    variants={chipVariants}
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
