import { LazyMotion, domAnimation } from "framer-motion";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import Resume from "../Resume/Resume";
import SideBar from "../SideBar/SideBar";
import "../Layout/Layout.css";

const Layout = () => {
  return (
    <LazyMotion features={domAnimation} strict>
      <div className="container-box">
        <SideBar />
        <main className="page-content">
          <About />
          <Portfolio />
          <Resume />
          <Contact />
        </main>
      </div>
    </LazyMotion>
  );
};

export default Layout;
