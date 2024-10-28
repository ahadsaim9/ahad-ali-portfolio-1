import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="max-w-screen-xl flex flex-col items-center">
      <img
        className="max-h-[150px] max-w-[150px] mt-10 rounded-full object-cover"
        src="https://i.ibb.co/Q6Ysgxt/Photo-Room-20240813-165411.png"
        alt=""
      />
      <div className="md:px-2  md:w-2/5 mx-auto md:text-nowrap h-[50vh] mt-6 flex flex-col ">
        <p className=" text-2xl md:text-3xl text-blue-950 italic text-center mb-5 font-bold">
          AHAD ALI
        </p>
        <p className=" text-[12px] lx:text-[16px]  font-semibold">
          E-mail_Address:
          <span className=" ml-2 italic text-blue-900">
            ahadsaim9@gmail.com
          </span>
        </p>
        <p className="text-[12px] lx:text-[16px] font-semibold">
          Facebook_Link:
          <Link
            target="_blank"
            to={"https://www.facebook.com/ahadsaimasm?mibextid=ZbWKwL"}
          >
            <span className="underline ml-2 text-blue-900 italic duration-500 hover:text-blue-950 text-[12px] lx:text-[16px]  ">
              facebook.com/ahadsaim
            </span>
          </Link>
        </p>
        <p className=" text-[12px] lx:text-[16px]  font-semibold">
          Linkedin_Link:
          <Link
            target="_blank"
            to={"https://www.linkedin.com/in/ahad-ali-81bab3278/"}
          >
            <span className="underline ml-2 text-blue-900 italic duration-500 hover:text-blue-950 text-[12px] lx:text-[16px] ">
              www.linkedin.com/in/ahad-ali
            </span>
          </Link>
        </p>
        <p className="text-[12px] lx:text-[16px]  font-semibold">
          Whatsapp_Number:
          <Link target="_blank">
            <span className="underline ml-2 text-blue-900 italic duration-500 hover:text-blue-950 text-[12px] lx:text-[16px]  ">
              01740995191
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Contact;
