import { m } from "framer-motion";
import TechStack from "../TechStack/TechStack";

const skillGroups = [
  {
    title: "Frontend Development",
    skills:
      "React.js, Next.js, TypeScript, JavaScript (ES6+), Redux Toolkit, RTK Query, Tailwind CSS, Material UI (MUI), React Hook Form, Zod",
  },
  {
    title: "Backend Development",
    skills: "Node.js, Express.js, REST API Development, JWT Authentication",
  },
  { title: "Database", skills: "MongoDB, PostgreSQL" },
  {
    title: "Tools & Technologies",
    skills: "Docker, Git, GitHub, Postman, Firebase Cloud Messaging (FCM)",
  },
];

const About = () => {
  return (
    <m.section
      id="about"
      className="page-section space-y-10"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="flex flex-col items-center gap-8 md:flex-row">
        <div className="order-2 md:order-1 md:w-8/12">
          <h1 className="text-4xl font-bold text-black md:text-5xl">Ahad Saim</h1>
          <h2 className="mt-2 text-xl text-blue-700 md:text-2xl">
            Software Engineer
          </h2>
          <p className="mt-4 text-justify leading-8 text-gray-700">
            Hello! I&apos;m Ahad Saim, a Software Engineer at Zenticsys with
            experience building modern web applications using React.js,
            Next.js, TypeScript, and Node.js. I have contributed to
            enterprise-level platforms including HelloAuto Car Inspection,
            CarVu Vehicle Marketplace, and the Zenticsys corporate website. My
            expertise includes frontend architecture, API integration, state
            management with Redux Toolkit and RTK Query, dashboard development,
            responsive UI design, and scalable application development. I am
            passionate about creating clean, maintainable, and user-focused
            software solutions while continuously expanding my knowledge in
            backend development, system design, and modern software engineering
            practices.
          </p>
        </div>

        <div className="order-1 flex justify-center md:order-2 md:w-4/12">
          <img
            className="max-w-[260px] rounded-2xl shadow-xl"
            src="https://i.ibb.co/0qRFZXf/Photo-Room-20240806-124409.png"
            alt="Ahad Saim"
          />
        </div>
      </div>

      <TechStack />

      <section>
        <h2 className="mb-4 text-2xl font-semibold text-black">Education</h2>
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-black">
            Bachelor of Science (B.Sc.) in Computer Science and Engineering
          </h3>
          <p>University of South Asia</p>
          <p>2023 – 2026 (Expected)</p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold text-black">Technical Skills</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map(({ title, skills }) => (
            <div key={title}>
              <h3 className="mb-2 font-semibold text-black">{title}</h3>
              <p className="leading-7">{skills}</p>
            </div>
          ))}
        </div>
      </section>
    </m.section>
  );
};

export default About;
