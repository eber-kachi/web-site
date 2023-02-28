import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
// import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Testimoni = ({
  listTestimoni = [
    {
      name: "Mi OTB",
      image: "/assets/MiOtb.png",
      city: "App web",
      country: " App Movil",
      rating: "4.7",
      testimoni:
        "Mi OTB Es un Sistema web integrado con una aplicación móvil que permite acreditar a los afiliados de una OTP al mismo tiempo optimiza el proceso de control de asistencias y eventos de la Organización",
    },
    {
      name: "ChatBot Inteligente",
      image: "/assets/chatbot.png",
      city: "Warsaw",
      country: "Poland",
      rating: "4.6",
      testimoni:
        "Un servicio que puede integrarse al chat de WhatsApp Business de tu negocio y automatizar la comunicación para los clientes de forma más eficiente",
    },
    {
      name: "Asistent Colegios",
      image: "/assets/application.png",
      city: "Warsaw",
      country: "Poland",
      rating: "4.9",
      testimoni:
        "La implementación de este software en Unidades Educativas permitirá enviar notificaciones de asistencia en tiempo real mediante un código unico de credencial de estudiante. También generar boletas de notas de forma generica y autómatica, reduciendo el trabajo en la administración Educativa.",
    },
    {
      name: "Conectica",
      image: "/assets/Conectica.png",
      city: "Warsaw",
      country: "Poland",
      rating: "4.5",
      testimoni:
        "Es una plataforma de educación superior a nivel nacional donde podrás encontrar indormación de estudios de manera completa y respaldada por cada Institución (Institutos y Universidades)",
    },
    {
      name: "TourBolivia",
      image: "/assets/earth.png",
      city: "Warsaw",
      country: "Poland",
      rating: "4.0",
      testimoni:
        "Plataforma de turismo libre para que cada viajero pueda compartir sus experiencias en cada atrativo turistico a nivel nacional.",
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {listTestimoni.map((listTestimonis, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-gray-500 hover:border-black-600 transition-all rounded-lg p-8 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1 items-center">
                  <Image
                    src={listTestimonis.image}
                    height={70}
                    width={70}
                    alt="Icon People"
                  />
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-xl font-semibold text-black-900 capitalize">
                      {listTestimonis.name}
                    </p>
                    <p className="text-sm text-black-500 capitalize">
                      {listTestimonis.city},{listTestimonis.country}
                    </p>
                  </div>
                </div>
                <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  <p className="text-sm">{listTestimonis.rating}</p>
                  <span className="flex ml-4">
                    {/* <Stars className="h-4 w-4" /> */}
                  </span>
                </div>
              </div>
              <p className="mt-5 text-left text-black-500">
                “{listTestimonis.testimoni}”.
              </p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-black-900 border hover:bg-black-900 hover:text-white-500 transition-all text-black-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            {/* <ArrowBack className="h-6 w-6 " /> */}
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-black-900 border hover:bg-black-900 hover:text-white-500 transition-all text-black-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            {/* <ArrowNext className="h-6 w-6" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
