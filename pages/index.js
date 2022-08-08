import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";

import Banner from "../public/assets/Banner.jpg";
import Google from "../public/assets/google.svg";
import Aws from "../public/assets/aws.svg";
import Firebase from "../public/assets/firebase.svg";
import DOcean from "../public/assets/digital-ocean.svg";
import Next from "../public/assets/nextjs.svg";
import Ghost from "../public/assets/ghost.svg";
import Blog from "../public/assets/blog.png";
import Development from "../public/assets/development.png";
import CamaraCctv from "../public/assets/camara-de-cctv.png";
import Server from "../public/assets/server.jpeg";
import Camaradeseg from "../public/assets/camaradeseg.jpeg";
import Software from "../public/assets/software.jpeg";
import Socialmedia from "../public/assets/social_media.jpeg";
import Conectica from "../public/assets/Conectica.png";
import Destination from "../public/assets/destination.png";
import Blogging from "../public/assets/blogging.png";
import Miotb from "../public/assets/Miotb.png";

export default function Home() {
  const width = 96;
  const height = 96;

  return (
    <div>
      <Head>
        <title> InittSoft</title>
        <meta
          name="description"
          content="Desarrollamos soluciones digitales y servicios de acordes a las necesidades actuales"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/*Banner */}
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4 mx-10">
        <div className="flex flex-col justify-center md:pl-20 mt-10">
          <div className="mt-10">
            <span
              className="bg-gray-200 text-gray-500 md:text-xs font-semibold  rounded-full py-3 px-5"
              style={{ fontSize: "10px" }}
            >
              Teconologías modernas para tu orgnización
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold py-3">
            Desarrollamos soluciones digitales y servicios de acordes a las
            necesidades actuales
          </h1>

          <p className="py-5 font-light text-gray-400">
            La implementación de tecnologías modernas permite la automatización
            de la gestión en tu equipo de trabajo u Organización.
          </p>

          <div className="flex justify-center md:flex-none md:justify-start ">
            <button
              type="button"
              className="text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0  inline-flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-2 -ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              Conocer más
            </button>
          </div>
        </div>

        <div>
          <Image src={Banner} alt="banner" />
          {/* <img src="assets/Banner.jpg" /> */}
        </div>
      </div>

      {/*Partners */}
      <div className="grid grid-rows-1 content-center m-10" id="servicios">
        <h2 className="text-xl text-center text-gray-500 py-5">
          Utilizamos servicios, herramientas y tecnologías más productivas del
          mercado
        </h2>
        <div
          className="hidden md:flex md:justify-center "
          // style={{ display: "none" }}
        >
          <div className="mx-5">
            <Image
              src={Google}
              alt="Flowbite Logo"
              className="w-24 h-24"
              width={width}
              height={height}
            />
            {/* <img
              src="assets/google.svg"
              className="w-24 h-24"
              alt="Flowbite Logo"
            /> */}
          </div>
          <div className="mx-5">
            <Image
              src={Aws}
              alt="Flowbite Logo"
              className="w-24 h-24"
              width={width}
              height={height}
            />

            {/* <img
              src="assets/aws.svg"
              className="w-24 h-24"
              alt="Flowbite Logo"
            /> */}
          </div>
          <div className="mx-5">
            <Image
              src={Firebase}
              alt="Flowbite Logo"
              className="w-24 h-24"
              width={width}
              height={height}
            />

            {/* <img
              src="assets/firebase.svg"
              className="w-24 h-24"
              alt="Flowbite Logo"
            /> */}
          </div>
          <div className="mx-5">
            <Image
              src={DOcean}
              alt="Flowbite Logo"
              className="w-24 h-24"
              width={width}
              height={height}
            />

            {/* <img
              src="assets/digital-ocean.svg"
              className="w-24 h-24"
              alt="Flowbite Logo"
            /> */}
          </div>
          <div className="mx-5">
            <Image
              src={Next}
              alt="Flowbite Logo"
              className="w-24 h-24"
              width={width}
              height={height}
            />

            {/* <img
              src="assets/nextjs.svg"
              className="w-24 h-24"
              alt="Flowbite Logo"
            /> */}
          </div>
          <div className="mx-5">
            <Image
              src={Ghost}
              alt="Flowbite Logo"
              className="w-24 h-24"
              width={width}
              height={height}
            />

            {/* <img
              src="assets/ghost.svg"
              className="w-24 h-24"
              alt="Flowbite Logo"
            /> */}
          </div>
        </div>
      </div>

      {/*Principal */}
      <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-1 gap-10 m-10 ">
        <div className="flex flex-col  items-center text-center">
          <Image
            src={Blog}
            alt="Flowbite Logo"
            className="w-24 h-24"
            width={width}
            height={height}
          />

          {/* <img
            src="assets/blog.png"
            className="w-24 h-24"
            alt="Flowbite Logo"
          /> */}

          <h2 className="text-base font-bold m-2">Gestor de contenido</h2>

          <p className="px-10 text-base text-gray-400 font-light">
            Una herramienta moderna para integrar en tu sitio web y publicar
            contenido. Que tu información no luzca como los demás, implementa
            uno más personalizado.
          </p>

          <button
            type="button"
            className="text-sky-600 bg-white hover:bg-sky-50 hover:text-sky-500 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
          >
            Ver más
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div className="flex flex-col  items-center text-center">
          <Image
            src={Development}
            alt="Flowbite Logo"
            className="w-24 h-24"
            width={width}
            height={height}
          />

          {/* <img
            src="assets/development.png"
            className="w-24 h-24"
            alt="Flowbite Logo"
          /> */}

          <h2 className="text-base font-bold m-2">Desarrollo de Software</h2>

          <p className="px-10 text-base text-gray-400 font-light">
            Desarrollamos software a medida: sitios web, aplicaciones web,
            aplicaciones móviles y el sistema informatico que tu empresa u
            organización necesita.
          </p>

          <button
            type="button"
            className="text-sky-600 bg-white hover:bg-sky-50 hover:text-sky-500 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
          >
            Ver más
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div className="flex flex-col  items-center text-center">
          <Image
            src={CamaraCctv}
            alt="Flowbite Logo"
            className="w-24 h-24"
            width={width}
            height={height}
          />

          {/* <img
            src="assets/camara-de-cctv.png"
            className="w-24 h-24"
            alt="Flowbite Logo"
          /> */}

          <h2 className="text-base font-bold m-2">
            Instalación de cámaras de seguridad
          </h2>

          <p className="px-10 text-base text-gray-400 font-light">
            Proveemos soluciones de seguridad integral adaptadas a las
            necesidades de la actualidad. Tenemos las mejores herramientas para
            proteger a las personas y asegurar los activos, implementando la
            tecnología más moderna.
          </p>

          <button
            type="button"
            className="text-sky-600 bg-white hover:bg-sky-50 hover:text-sky-500 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
          >
            Ver más
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/*Services */}
      <div className="bg-sky-50">
        <div className="grid place-content-center h-64">
          <div className="flex flex-col justify-center text-center max-w-md">
            <h2 className="text-5xl font-bold py-5 ">
              Soluciones digitales modernas
            </h2>

            <p className="whitespace-normal">
              Brindamos servicios que tu organización necesita para optimizar la
              gestión tecnológica, comercial y administrativa.
            </p>
          </div>
        </div>

        {/*cloud Hosting */}
        <div className="bg-white grid lg:grid-cols-2 md:grid-cols-1 place-content-center">
          <div>
            <Image src={Server} alt="Flowbite Logo" />
            {/* <img src="assets/server.jpeg" /> */}
          </div>
          <div className="flex flex-col justify-center max-w-md  md:pl-20 p-10 ">
            <h3 className="text-3xl font-bold ">Cloud Hosting</h3>
            <p className="font-light text-gray-400 py-3">
              Ofrecemos un servicio variado de hosting para tu sitio o
              aplicación Web, tu tienes la idea y nosotros te damos las
              herramientas para que puedas desarrollarla.
            </p>
            <div>
              <button
                type="button"
                className="text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0  inline-flex items-center"
              >
                Conocer más
              </button>
            </div>
          </div>
        </div>
        {/*MKT Digital */}
        <div className="grid lg:grid-cols-2 md:grid-cols-1 place-content-center">
          <div className="flex flex-col justify-center max-w-md p-10 md:pl-20 ">
            <h1 className="text-3xl font-bold">
              Herramientas de Marketing Digital
            </h1>
            <p className="font-light text-gray-400 py-3  ">
              Publicidad Digital Inteligente para tu Empresa. Somos una agencia
              marketing digital basado en analítica y queremos ayudarte a
              incrementar el retorno de tu inversión.
            </p>
            <div>
              <button
                type="button"
                className="text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0  inline-flex items-center"
              >
                Conocer más
              </button>
            </div>
          </div>
          <div>
            <Image src={Socialmedia} alt="Flowbite Logo" />
            {/* <img src="assets/social_media.jpeg" /> */}
          </div>
        </div>
        {/*Desarrollo de software */}
        <div className="bg-white grid lg:grid-cols-2 md:grid-cols-1 place-content-center">
          <div>
            <Image src={Software} alt="Flowbite Logo" />
            {/* <img src="assets/software.jpeg" /> */}
          </div>
          <div className="flex flex-col justify-center max-w-md md:pl-20  p-10">
            <h1 className="text-3xl font-bold">
              Desarrollo de software Web & Movil
            </h1>
            <p className="font-light text-gray-400 py-3">
              Desarrollamos software a medida: sitios web, aplicaciones web,
              aplicaciones móviles y el sistema informatico que tu empresa u
              organización necesita.
            </p>
            <div>
              <button
                type="button"
                className="text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0  inline-flex items-center"
              >
                Conocer más
              </button>
            </div>
          </div>
        </div>
        {/*Instalacion de camaras de seguridad */}
        <div className="grid lg:grid-cols-2 md:grid-cols-1 place-content-center">
          <div className="flex flex-col justify-center max-w-md md:pl-20 p-10 ">
            <h1 className="text-3xl font-bold">
              Servicios de cámaras de seguridad
            </h1>
            <p className="font-light text-gray-400 py-3">
              Proveemos soluciones de seguridad integral adaptadas a las
              necesidades de la actualidad. Tenemos las mejores herramientas
              para proteger a las personas y asegurar los activos, implementando
              la tecnología más moderna.
            </p>
            <div>
              <button
                type="button"
                className="text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0  inline-flex items-center"
              >
                Conocer más
              </button>
            </div>
          </div>
          <div>
            <Image src={Camaradeseg} alt="Flowbite Logo" />
            {/* <img src="assets/camaradeseg.jpeg" /> */}
          </div>
        </div>
      </div>

      {/*PROYECTS */}
      <div className="m-10" id="proyectos">
        <div className="grid place-content-center h-64">
          <div className="flex flex-col justify-center text-center max-w-md">
            <h2 className="text-5xl font-bold py-5">Proyectos innovadores</h2>
            <p className="text-zinc-400 whitespace-normal">
              Brindamos tecnología para el mercado nacional basado en la
              necesidad para organizaciones de grupos multitudinarios
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-5">
          {/*Conectica */}
          <div className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none px-5">
            <div className="max-w-sm bg-white rounded-2xl shadow-md  ">
              <div className="flex flex-col items-center text-center p-5">
                <Image
                  src={Conectica}
                  alt="Flowbite Logo"
                  width={width}
                  height={height}
                />
                {/* <img
                  className="mb-3 w-24 h-24 rounded-full shadow-lg"
                  src="assets/Conectica.png"
                  alt="Bonnie image"
                /> */}

                <h5 className="mb-1 text-xl font-medium text-gray-900 ">
                  Conectica
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  La plataforma de educación más completa para Latinoamerica
                </span>
                <button
                  type="button"
                  className="text-sky-600  hover:bg-sky-50 hover:text-sky-500 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm  text-center inline-flex items-center p-1 m-2"
                >
                  Conocer
                </button>
              </div>
            </div>
          </div>
          {/*Turistic */}
          <div className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none px-5">
            <div className="max-w-sm bg-white rounded-2xl shadow-md gap-10 ">
              <div className="flex flex-col items-center text-center p-5">
                <Image
                  src={Destination}
                  alt="Flowbite Logo"
                  className="mb-3 w-24 h-24 rounded-full shadow-lg"
                  width={width}
                  height={height}
                />
                {/* <img
                  className="mb-3 w-24 h-24 rounded-full shadow-lg"
                  src="assets/destination.png"
                  alt="Bonnie image"
                /> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 ">
                  Turistics
                </h5>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Una aplicacion que te permite recorrer destinos turisticos
                  desde tu punto de partida con la colaboración de más viajeros
                </p>
                <button
                  type="button"
                  className="text-sky-600  hover:bg-sky-50 hover:text-sky-500 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm m-2 text-center inline-flex items-center p-1"
                >
                  Conocer
                </button>
              </div>
            </div>
          </div>
          {/*Gestor de blog */}
          <div className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none px-5">
            <div className="max-w-sm bg-white rounded-2xl shadow-md gap-10 ">
              <div className="flex flex-col items-center text-center p-5">
                <Image
                  src={Blogging}
                  alt="Flowbite Logo"
                  className="mb-3 w-24 h-24 rounded-full shadow-lg"
                  width={width}
                  height={height}
                />
                {/* <img
                  className="mb-3 w-24 h-24 rounded-full shadow-lg"
                  src="assets/blogging.png"
                  alt="Bonnie image"
                /> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 ">
                  Blogging
                </h5>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Gestor de bog dinamico para integra a tu pagina web
                </p>
                <button
                  type="button"
                  className="text-sky-600  hover:bg-sky-50 hover:text-sky-500 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm m-2 text-center inline-flex items-center p-1"
                >
                  Conocer
                </button>
              </div>
            </div>
          </div>
          <div className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none px-5">
            <div className="max-w-sm bg-white rounded-2xl shadow-md gap-10 ">
              <div className="flex flex-col items-center text-center p-5">
                <Image
                  src={Miotb}
                  alt="Flowbite Logo"
                  className="mb-3 w-24 h-24 rounded-full shadow-lg"
                  width={width}
                  height={height}
                />
                {/* <img
                  className="mb-3 w-24 h-24 rounded-full shadow-lg"
                  src="assets/Miotb.png"
                  alt="Bonnie image"
                /> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 ">
                  Sistema de acreditaciones y asistencias
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Una aplicacion web y movil para gestion de asistencias para
                  OTBs, Cooperativas, Sindicatos y personal de equipos
                  empresariales
                </span>
                <button
                  type="button"
                  className="text-sky-600  hover:bg-sky-50 hover:text-sky-500 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm m-2 text-center inline-flex items-center p-1"
                >
                  Conocer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
