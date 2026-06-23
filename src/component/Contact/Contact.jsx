import { m } from "framer-motion";

const Contact = () => {
  return (
    <m.section
      id="contact"
      className="page-section flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      <div className="w-full max-w-2xl rounded-3xl border border-gray-200 bg-white p-7 text-center shadow-xl md:p-12">
        <img
          className="mx-auto h-32 w-32 rounded-full object-cover ring-4 ring-blue-50"
          src="https://i.ibb.co/Q6Ysgxt/Photo-Room-20240813-165411.png"
          alt="Ahad Saim"
          loading="lazy"
        />
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
          Let&apos;s work together
        </p>
        <h2 className="mt-2 text-3xl font-bold text-gray-950 md:text-4xl">Contact Me</h2>
        <p className="mx-auto mt-4 max-w-lg leading-7 text-gray-600">
          Have a project or opportunity in mind? Send me an email or connect with me online.
        </p>
        <div className="mt-7 flex flex-col items-center gap-3 text-sm sm:text-base">
          <a className="text-blue-700 transition-colors hover:text-blue-900 hover:underline" href="mailto:ahadsaim9@gmail.com">
            ahadsaim9@gmail.com
          </a>
          <a className="text-blue-700 transition-colors hover:text-blue-900 hover:underline" href="https://www.linkedin.com/in/ahad-ali-81bab3278/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="text-blue-700 transition-colors hover:text-blue-900 hover:underline" href="https://wa.me/8801740995191" target="_blank" rel="noreferrer">
            WhatsApp: +880 1740-995191
          </a>
        </div>
      </div>
    </m.section>
  );
};

export default Contact;
