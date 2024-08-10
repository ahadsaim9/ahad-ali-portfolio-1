import { BiLogoProductHunt } from "react-icons/bi";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoNewspaperSharp, IoPerson } from "react-icons/io5";
import { RiContactsBook3Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar h-svh ">
      <div className="flex flex-col  items-center justify-center gap-4">
        <img
          className="max-h-[150px] max-w-[150px] rounded-full object-cover"
          src="https://i.ibb.co/2s99M1W/Photo-Room-20240303-235344.png"
          alt=""
        />
        <h2>
          Hi, my name is Ahad Ali and I’m a junior web developer. Welcome to my
          portfolio website.
        </h2>
        <section className="flex gap-5">
          <abbr title="Linkedin">
            <div className="bg-sky-600 h-7 w-7 rounded-full p-2 flex items-center justify-center">
              <NavLink
                target="_blank"
                to={"https://www.linkedin.com/in/ahad-ali-81bab3278/"}
              >
                <FaLinkedin></FaLinkedin>
              </NavLink>
            </div>
          </abbr>

          <div className="bg-sky-600 h-7 w-7 rounded-full p-2 flex items-center justify-center">
            <NavLink
              target="_blank"
              to={"https://www.facebook.com/ahadsaimasm?mibextid=ZbWKwL"}
            >
              <FaFacebook></FaFacebook>
            </NavLink>
          </div>
          <div className="bg-sky-600 h-7 w-7 rounded-full p-2 flex items-center justify-center">
            <NavLink
              target="_blank"
              to={"https://www.linkedin.com/in/ahad-ali-81bab3278/"}
            >
              <FaGithub></FaGithub>
            </NavLink>
          </div>
          {/* ***************section************** */}
        </section>
      </div>
      <nav className="flex flex-col gap-3 text-c1">
        <div>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? " text-orange-500 " : ""
            }
            to={"/"}
          >
            <h1 className="flex gap-1">
              <span>
                <IoPerson />
              </span>
              About Me
            </h1>
          </NavLink>
        </div>
        <div>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? " text-orange-500  " : ""
            }
            to={"/portfolio"}
          >
            <h1 className="flex gap-1">
              <span>
                <BiLogoProductHunt />
              </span>
              Portfolio
            </h1>
          </NavLink>
        </div>
        <div>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? " text-orange-500" : ""
            }
            to={"/resume"}
          >
            <h1 className="flex gap-1">
              <span>
                <IoNewspaperSharp />
              </span>
              Resume
            </h1>
          </NavLink>
        </div>
        <div>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? " text-orange-500 " : ""
            }
            to={"/contact"}
          >
            <h1 className="flex gap-1 pb-5">
              <span>
                <RiContactsBook3Fill />
              </span>
              Contact
            </h1>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
