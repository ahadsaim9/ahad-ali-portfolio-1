import { m } from "framer-motion";

const resumePages = [
  "https://i.ibb.co.com/pvmG3qBR/Screenshot-2026-06-22-192048.png",
  "https://i.ibb.co.com/ZpsLJ711/Screenshot-2026-06-22-192132.png",
];

const Resume = () => {
  return (
    <m.section
      id="resume"
      className="page-section"
      initial={{ opacity: 0, x: -70 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
          Experience & education
        </p>
        <h2 className="mt-2 text-3xl font-bold text-gray-950 md:text-4xl">Resume</h2>
      </div>
      <div className="mx-auto grid max-w-4xl gap-6">
        {resumePages.map((page, index) => (
          <img
            className="h-auto w-full rounded-xl border border-gray-200 shadow-lg"
            src={page}
            alt={`Ahad Saim resume page ${index + 1}`}
            loading="lazy"
            key={page}
          />
        ))}
      </div>
    </m.section>
  );
};

export default Resume;
