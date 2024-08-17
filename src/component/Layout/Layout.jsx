import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import "../Layout/Layout.css";

const Layout = () => {
  return (
    <div className="container-box">
      <div className="side-box w-full mx-auto md:w-[250px] md:relative h-auto ">
        <section className="sidebar">
          <SideBar></SideBar>
        </section>
      </div>
      <section className="outlet">
        <Outlet></Outlet>
      </section>
    </div>
  );
};

export default Layout;
