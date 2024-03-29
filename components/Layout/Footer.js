import React from "react";
import Image from "next/image";
import LogoVPN from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Tiktok from "../../public/assets/Icon/tiktok-icon.svg";
const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <div>
            <Image
              src="/assets/Logo.png"
              height={40}
              width={40}
              alt="Icon People"
            />
          </div>
          <p className="mb-4">
            <strong className="font-medium">InittSoft</strong> Es una empresa de
            tecnología enfocada en el uso de herramientas modernas integrando
            inteligencia artificial
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              {/* <Facebook className="h-6 w-6" /> */}
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              {/* <Tiktok className="h-6 w-6" /> */}
            </div>
          </div>
          <p className="text-gray-400">
            ©{new Date().getFullYear()} - InittSoft
          </p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Productos</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-black-900 cursor-pointer transition-all">
              Mi OTB{" "}
            </li>
            <li className="my-2 hover:text-black-900 cursor-pointer transition-all">
              Chat IA Business{" "}
            </li>
            <li className="my-2 hover:text-black-900 cursor-pointer transition-all">
              Asistent Colegios{" "}
            </li>
            <li className="my-2 hover:text-black-900 cursor-pointer transition-all">
              Conectica{" "}
            </li>
            <li className="my-2 hover:text-black-900 cursor-pointer transition-all">
              TourBolivia{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Soluciones</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-black-900 cursor-pointer transition-all">
              Páginas web{" "}
            </li>
            <li className="my-2 hover:text-black-900 cursor-pointer transition-all">
              Desarrollo Web{" "}
            </li>
            <li className="my-2 hover:text-black-900 cursor-pointer transition-all">
              Desarrollo Movil{" "}
            </li>
            <li className="my-2 hover:text-black-900 cursor-pointer transition-all">
              Tiendas Online{" "}
            </li>
            <li className="my-2 hover:text-black-900 cursor-pointer transition-all">
              ChatBot Comercial{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Contactos</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-black-900 cursor-pointer transition-all">
              Av Blanco Galindo Km. 15 Zona Villa Aurora Qllo - Cbba.{" "}
            </li>
            <li className="my-2 hover:text-black-900 cursor-pointer transition-all">
              +591 67844094{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
