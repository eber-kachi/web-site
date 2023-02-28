import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
// import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-4xl sm:text-3xl lg:text-4xl font-extrabold text-black-900 leading-relaxed"
            >
              Elige tu plan
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              Conoce los planes de diseño web que incluyen: Hosting y dominio e
              integración con redes sociales
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-4 lg:py-12 px-2 sm:px-0 lg:px-2">
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                {/* <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/Free.png"
                    width={145}
                    height={165}
                    alt="Free Plan"
                  />
                  <p></p>
                </div> */}
                <p className="text-2xl text-black-900 font-bold capitalize my-2 sm:my-2">
                  Initt Basic
                </p>
                <p className="text-base text-cyan-500 font-normal capitalize">
                  Ideal para tener presencia en internet
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-900 flex-grow my-8 sm:my-8 font-light">
                  <li className="relative check custom-list font-light">
                    Hosting Ilimitado
                  </li>
                  <li className="relative check custom-list">Dominio .COM</li>
                  <li className="relative check custom-list">
                    Correos corporativos
                  </li>
                  <li className="relative check custom-list">
                    Certificado SSL
                  </li>
                  <li className="relative check custom-list">BackUps</li>
                  <li className="relative check custom-list text-green-500">
                    Diseño hasta 6 páginas
                  </li>
                  <li className="relative check custom-list">
                    Diseño persononalizado
                  </li>
                  <li className="relative check custom-list text-green-500">
                    Website estático
                  </li>
                  <li className="relative check custom-list">
                    Hecho en Wordpress (Si es requerido)
                  </li>
                  <li className="relative check custom-list">
                    Integración con WhatsApp Business
                  </li>
                  <li className="relative check custom-list">
                    Integración con Redes Sociales
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-8">
                  <p className="text-2xl text-black-900 text-center mb-4 font-bold">
                    Bs. 560{" "}
                    <span className="text-black-500 font-normal text-base">
                      / Año
                    </span>
                  </p>
                  <ButtonOutline className="">Solicitar</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <p className="text-2xl text-black-900 font-bold capitalize my-2 sm:my-2">
                  Initt StartUp
                </p>
                <p className="text-base text-cyan-500 font-normal capitalize">
                  Ideal para <span className="font-bold"> Emprendedores</span>
                </p>
                <p className="text-base text-gray-400 font-normal capitalize underline">
                  Todo el plan{" "}
                  <span className="text-black-900"> Initt Basic</span> +
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-900 flex-grow my-8 sm:my-8 font-light">
                  <li className="relative check custom-list font-light">
                    Website dinámico - administrable
                  </li>
                  <li className="relative check custom-list">
                    Hasta 8 páginas
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-black-900 text-center mb-4 font-bold">
                    Bs. 990{" "}
                    <span className="text-black-500 font-normal text-base">
                      / Año
                    </span>
                  </p>
                  <ButtonOutline className="">Solicitar</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <p className="text-2xl text-black-900 font-bold capitalize my-2 sm:my-2">
                  Initt Profesional{" "}
                  <badged className="bg-black-900 rounded-full text-xs p-1 px-2 text-gray-100 font-thin">
                    Especial
                  </badged>
                </p>
                <p className="text-base text-cyan-500 font-normal capitalize">
                  Ideal para empresas y organizaciones
                </p>
                <p className="text-base text-gray-400 font-normal capitalize underline">
                  Todo el plan{" "}
                  <span className="text-black-900"> Initt StartUp</span> +
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-900 flex-grow my-8 sm:my-8 font-light">
                  <li className="relative check custom-list font-light">
                    Desarrollo 100% personalizado desde 0
                  </li>
                  <li className="relative check custom-list text-green-500">
                    Software a medida
                  </li>
                  <li className="relative check custom-list">
                    Servicios especiales ilimitados
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-black-900 text-center mb-4 font-bold">
                    Bs.{" "}
                    <span className="text-black-500 font-normal text-base">
                      / personalizado
                    </span>
                  </p>
                  <ButtonOutline className="">Solicitar</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>

        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-3xl sm:text-3xl lg:text-4xl font-bold text-black-900 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
            >
              Productos para Organizaciones{" "}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              Los proyectos desarrollados por nuestro equipo están enfocados en
              soluciones prácticas para: Organizaciones con alto grado de
              afiliación.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <div className="absolute rounded-xl  py-8 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-cyan-500 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-bold">
                    ¿Tienes alguna consulta antes de empezar un proyecto con
                    nosotros?
                  </h5>
                  <p className="text-black-900">
                    Lo entendemos, por ello es que te brindamos nuestra línea de
                    consultas por WhatsApp, donde un asesor especializado
                    atenderá todas tus dudas y consultas.
                  </p>
                </div>
                <ButtonPrimary>Chatea con nosotros</ButtonPrimary>
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
              ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
