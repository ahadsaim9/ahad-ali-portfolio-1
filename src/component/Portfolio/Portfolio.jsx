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
          to={"https://coffee-store-4c2e5.web.app/"}
        >
          <img
            className="w-full max-h-[250px] rounded-md"
            src="https://i.ibb.co.com/1YRqRHLM/Screenshot-2025-04-21-225523.png"
            alt=""
          />
          <h4 className=" md:text-2xl font-semibold italic">Coffee Shop</h4>
          <article>
            This Coffee Shop Management project is a full-stack web application.
            The front end of the project is built using React and Tailwind CSS,
            ensuring a responsive and modern user interface. It uses React
            Router for seamless navigation between different pages like Home,
            Add Coffee, Users, Sign-In, and Sign-Up. For data handling, the
            project connects to a backend API that performs all the CRUD
            (Create, Read, Update, Delete) operations.
          </article>
        </Link>
        <Link
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
        </Link>
        <Link
          className="w-full flex flex-col justify-between p-5 gap-y-2 duration-300 hover:drop-shadow-2xl shadow-2xl rounded-md  "
          target="_blank"
          to={"https://asm-store.netlify.app/"}
        >
          <img
            className="w-full max-h-[250px] rounded-md"
            src="https://i.ibb.co/rxn1LCh/Screenshot-2024-08-13-115100.png"
            alt=""
          />
          <h4 className=" md:text-2xl font-semibold italic">ASM STORE</h4>
          <article>
            This is an iPhone mobile store.Here is the list of Apple brand
            mobiles and watches. Customers can know their prices and
            specifications if they want.
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
