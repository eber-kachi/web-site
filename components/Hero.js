import React, { useMemo } from "react";
import Image from "next/image";
import ButtonOutline from "./misc/ButtonOutline.";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Hero = ({
  listUser = [
    {
      name: "Diseño estático y dinámico personalizado",
      number: "Páginas web",
      icon: "/assets/Icon/www.png",
    },
    {
      name: "Desarrollo de aplicaciones web y movil a medida",
      number: "Desarrollo de Aplicaciones",
      icon: "/assets/Icon/app.png",
    },
    {
      name: "Integramos a tu WhatsApp un brazo operativo digital inteligente",
      number: "Chats inteligentes",
      icon: "/assets/Icon/chat-en-vivo.png",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-xl mt-24 xl:px-16 mx-auto" id="about">
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 py-6 sm:py-16"
          variants={scrollAnimation}
        >
          <div className=" flex flex-col justify-center items-start mx-5 row-start-2 sm:row-start-1">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-thin text-black-600 leading-normal">
              Desarrollamos soluciones
              <strong className="font-black text-black-900">
                {" "}
                Tecnológicas
              </strong>
              .
            </h1>
            <p className="text-black-500 mt-4 mb-6">
              Trabajaremos de la mano en base a los objetivos de tu Organización
              y asi podrás obtener métricas de evaluación de resultados
            </p>
            <ButtonOutline className="bg-black-900 text-white-500">Conocer servicios</ButtonOutline>
          </div>
          <div className="flex w-full">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <Image
                src="/assets/Banners.png"
                alt="VPN Illustrasi"
                quality={100}
                width={612}
                height={350}
                layout="responsive"
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="relative w-full flex">
        <ScrollAnimationWrapper className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10 justify-items-center">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="flex justify-center sm:justify-center py-4 sm:py-6 w-8/12 sm:w-auto"
              key={index}
              custom={{ duration: 2 + index }}
              variants={scrollAnimation}
            >
              <div className="sm:w-auto mx-5">
                <div className="flex items-center justify-center bg-gray-100 w-16 h-16 mr-6 rounded-full">
                  <img src={listUsers.icon} className="h-8 w-8" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.number}
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </ScrollAnimationWrapper>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
