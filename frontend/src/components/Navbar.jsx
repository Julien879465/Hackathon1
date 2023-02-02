import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/img/logo.png";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav className="relative w-full flex flex-wrap  items-center justify-between px-2 py-3 bg-bg-sable ">
      <div><img src={logo} className=" item-center" alt="logo" /></div>
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            href="Home"
          >
            
          </a>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FontAwesomeIcon icon={faBars} />{" "}
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="Home"
              >
                <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                <span className="ml-2">Grotte</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="Perso"
              >
                <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                <span className="ml-2">Toi</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="Restos"
              >
                <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                <span className="ml-2">Manger ou ?</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="Plats"
              >
                <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                <span className="ml-2">Manger quoi ?</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  );
}
