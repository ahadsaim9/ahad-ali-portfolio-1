import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <section>
      <div className=" flex justify-center items-center mx-auto  md:w-80 border-b-blue-950 h-10 pt-5 border-b-4  mb-4 pb-2 ">
        <h1 className="text-center md:text-3xl text-2xl  mb-4 text-blue-950 font-semibold italic">
          Some of my Projects
        </h1>
      </div>
      <div className="md:grid grid-cols-2 gap-5  max-w-screen-xl">
        <Link
          className="w-full flex flex-col justify-between p-5 gap-y-2 duration-300 hover:drop-shadow-2xl shadow-2xl rounded-md  "
          target="_blank"
          to={"https://staging.helloauto.ca/"}
        >
          <img
            className="w-full max-h-[250px] rounded-md"
            src="https://i.ibb.co.com/JwCRcsNN/Screenshot-2026-06-22-180322.png"
            alt=""
          />
          <h4 className=" md:text-2xl font-semibold italic">
            CarVu – Vehicle Marketplace Platform
          </h4>
          <article>
            CarVu is a modern vehicle marketplace platform designed to
            streamline the process of buying, selling, and managing vehicles
            online. The platform provides an intuitive user experience with
            advanced vehicle search, filtering, listing management, auction
            functionality, and secure user workflows. <br />
            <br />
            As a Frontend Developer, I contributed to building responsive and
            scalable user interfaces, integrating RESTful APIs, implementing
            dynamic forms, managing application state with Redux Toolkit and RTK
            Query, and ensuring a seamless user experience across different
            devices. I collaborated closely with backend developers and
            designers to deliver production-ready features and maintain
            high-performance standards.
          </article>
        </Link>
        {/* <Link
          className="w-full flex flex-col justify-between p-5 gap-y-2 duration-300 hover:drop-shadow-2xl shadow-2xl rounded-md  "
          target="_blank"
          to={"https://cd-bd-newse-wala-w-1.web.app/"}
        >
          <img
            className="w-full max-h-[250px] rounded-md"
            src="https://i.ibb.co.com/jWGPCPM/Screenshot-2024-12-02-143313.png"
            alt=""
          />
          <h4 className=" md:text-2xl font-semibold italic">The Dragon News</h4>
          <article>
            This project is the idea of a news channel. Here email
            authentication and google authentication are used as authentication.
            If you want to see the details of the news, you can log in and enter
            the private route, such a routing system has been used.
          </article>
        </Link> */}
        <Link
          className="w-full flex flex-col justify-between p-5 gap-y-2 duration-300 hover:drop-shadow-2xl shadow-2xl rounded-md  "
          target="_blank"
          to={"https://www.zenticsys.com/"}
        >
          <img
            className="w-full max-h-[250px] rounded-md"
            src="https://i.ibb.co.com/Z6FPqH4C/Screenshot-2026-06-22-184946.png"
            alt=""
          />
          <h4 className=" md:text-2xl font-semibold italic">
            Zenticsys – Corporate Website
          </h4>
          <article>
            Zenticsys is a modern software development company website that
            showcases custom software development, SaaS solutions, enterprise
            applications, UI/UX design, mobile app development, and digital
            transformation services across multiple industries. The platform is
            designed to present the company’s expertise, services, and
            technology solutions through a clean, responsive, and user-focused
            experience.
            <br />
            <br />
            As a Frontend Developer, I contributed to developing and maintaining
            responsive user interfaces, implementing modern web components,
            optimizing performance, and ensuring a seamless user experience
            across devices. I collaborated with designers and development teams
            to deliver a scalable and professional digital presence for the
            company.
          </article>
        </Link>
        <Link
          className="w-full flex flex-col justify-between p-5 gap-y-2 duration-300 hover:drop-shadow-2xl shadow-2xl rounded-md  "
          target="_blank"
          to={"https://remarkable-daffodil-f73acd.netlify.app/"}
        >
          <img
            className="w-full max-h-[250px] rounded-md"
            src="https://i.ibb.co/zRFFrfB/Screenshot-2024-08-13-120559.png"
            alt=""
          />
          <h4 className=" md:text-2xl font-semibold italic">
            Welcome To Your Bank Account
          </h4>
          <article>
            Welcome to our secure and convenient platform for managing your bank
            accounts. Easily deposit and withdraw funds with just a few clicks.
            Our system is user-friendly interface.
          </article>
        </Link>

        <Link
          className="w-full flex flex-col justify-between p-5 gap-y-2 duration-300 hover:drop-shadow-2xl shadow-2xl rounded-md  "
          target="_blank"
          to={"https://ahad-saim-asm-donation-campaign.netlify.app/"}
        >
          <img
            className="w-full max-h-[250px] rounded-md "
            src="https://i.ibb.co/jHp9V1H/Screenshot-2024-08-13-215402.png"
            alt=""
          />
          <h4 className=" md:text-2xl font-semibold italic">Helping People</h4>
          <article>
            This is a service site.Here the aspects of health, education and
            clothing are highlighted, which are basic human needs.
          </article>
        </Link>
      </div>
    </section>
  );
};

export default Portfolio;
