import { BiLogoProductHunt } from "react-icons/bi";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoNewspaperSharp, IoPerson } from "react-icons/io5";
import { RiContactsBook3Fill } from "react-icons/ri";
import { Link } from "react-scroll";

const navigation = [
  { id: "about", label: "About", icon: IoPerson },
  { id: "portfolio", label: "Portfolio", icon: BiLogoProductHunt },
  { id: "resume", label: "Resume", icon: IoNewspaperSharp },
  { id: "contact", label: "Contact", icon: RiContactsBook3Fill },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ahad-ali-81bab3278/",
    icon: FaLinkedin,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/ahadsaimasm?mibextid=ZbWKwL",
    icon: FaFacebook,
  },
  {
    label: "GitHub",
    href: "https://github.com/ahadsaim9",
    icon: FaGithub,
  },
];

const SideBar = () => {
  return (
    <aside className="sidebar" aria-label="Portfolio navigation">
      <div className="sidebar-profile flex flex-col items-center gap-4">
        <img
          className="h-[132px] w-[132px] rounded-full object-cover ring-4 ring-blue-50"
          src="https://i.ibb.co/2s99M1W/Photo-Room-20240303-235344.png"
          alt="Ahad Saim"
        />
        <div className="text-center">
          <h1 className="text-xl font-bold text-gray-950">Ahad Saim</h1>
          <p className="mt-1 text-sm text-gray-600">Software Engineer</p>
        </div>
        <div className="flex gap-3">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-700 transition duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:text-white"
              href={href}
              key={label}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      <nav className="grid grid-cols-4 gap-1 md:flex md:flex-col md:gap-2">
        {navigation.map(({ id, label, icon: Icon }) => (
          <Link
            activeClass="active"
            className="group flex cursor-pointer flex-col items-center gap-1 rounded-lg px-2 py-2 text-xs font-medium text-gray-600 transition-all duration-300 hover:bg-blue-50 hover:text-blue-700 md:flex-row md:gap-3 md:px-4 md:py-3 md:text-base"
            duration={850}
            key={id}
            offset={-64}
            smooth="easeInOutQuart"
            spy
            hashSpy={false}
            to={id}
          >
            <Icon className="text-lg transition-transform duration-300 group-hover:scale-110" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default SideBar;
