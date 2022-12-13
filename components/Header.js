import Link from "next/link";
import { useState, useEffect } from "react";
import LogoWhite from "@/public/assets/LogoWhite.svg";
import Image from "next/image";

export default function Header() {
  const [click, setClick] = useState(true);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    // console.log("metodo");
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", showButton);
  }, []);

  // console.log("a");

  const changeBackground = () => {
    // console.log(window.scrollY);
    if (window.scrollY > 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  // por performarce debe ir dendtro de un useEffect
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <nav
      className={
        "flex px-2 w-full content-center fixed z-10 " +
        (navbar ? "bg-slate-50" : "")
      }
    >
      <div className="container flex  flex-wrap justify-between items-center mx-auto py-2">
        <a href="https://inittsoft.com/" className="flex items-center">
          <Image
            src={LogoWhite}
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
            layout="responsive"
          />

          <span className="self-center text-xl font-semibold whitespace-nowrap">
            InittSoft
          </span>
        </a>

        <div className="flex md:order-2 gap-2">
          <button
            type="button"
            className="text-sky-500 bg-white border border-sky-500 hover:bg-sky-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center py-1 px-2"
          >
            Blog
          </button>

          <button
            type="button"
            className="text-white bg-sky-500 border-white hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center md:mr-0 p-1.5"
          >
            Contáctanos
          </button>

          <div
            className="flex md:hidden lg:hidden"
            id="burger"
            onClick={handleClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </div>
        </div>
        {/*justify-between items-center w-full md:flex md:w-auto md:order-1 xl:order-1 hidden*/}
        <div
          className={
            "justify-between items-center w-full md:flex md:w-auto md:order-1 xl:order-1 bg-white md:bg-transparent " +
            (click ? "hidden" : "")
          }
          id="menu"
        >
          <ul className="flex flex-col items-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
            <li>
              <a
                href="#"
                className="py-2 pr-4 pl-3 text-gray-500  md:p-0 hover:text-sky-500"
                aria-current="page"
              >
                Inicio
              </a>
            </li>

            <li>
              <a
                href="#servicios"
                className="block py-2 pr-4 pl-3 text-gray-500 border-b hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-sky-500 md:p-0"
              >
                Servicios
              </a>
            </li>

            <li>
              <a
                href="#proyectos"
                className="block py-2 pr-4 pl-3 text-gray-500 border-b hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-sky-500 md:p-0"
              >
                Proyectos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
