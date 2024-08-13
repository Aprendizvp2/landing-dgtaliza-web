import webDevelop from "../../assets/img/services/web-develop.jpg";
import appDevelopment from "../../assets/img/services/app-development.jpg";
import techmologiesForefront from "../../assets/img/services/technologies-at-the-forefront.jpg";
import technologyConsulting from "../../assets/img/services/technology-consulting.jpg";
import uiDesgigns from "../../assets/img/services/ui-designs.jpg";
import customSoftwareDevelopment from "../../assets/img/services/custom-software-development.jpg";
import projectManagement from "../../assets/img/services/project-management.jpg";
import performanceOptomization from "../../assets/img/services/performance-optimization.jpg";
import maintenanceAndSupport from "../../assets/img/services/maintenance-and-support.jpg";
import Slider, { Settings } from "react-slick";
import ArrowServicesRight from "../arrowservicesright/ArrowServicesRight";
import ArrowServicesLeft from "../arrowservicesleft/ArrowServicesLeft";

const services = [
  {
    id: 1,
    image: webDevelop,
    title: "Desarrollo Web",
    description: "Creación de sitios y aplicaciones web modernas.",
  },
  {
    id: 2,
    image: appDevelopment,
    title: "Desarrollo de plicaciones Móviles",
    description: "Desarrollo de apps para Android e iOS.",
  },
  {
    id: 3,
    image: techmologiesForefront,
    title: "Tecnologías en la Vanguardia",
    description: "Soluciones tecnológicas innovadoras.",
  },
  {
    id: 4,
    image: uiDesgigns,
    title: "Diseño de Interfaces de Usuario",
    description: "Diseño de interfaces de usuario modernas.",
  },
  {
    id: 5,
    image: technologyConsulting,
    title: "Consultoría Tecnológica",
    description: "Asesoría en soluciones tecnológicas.",
  },
  {
    id: 6,
    image: customSoftwareDevelopment,
    title: "Desarrollo de Software a Medida",
    description: "Desarrollo de software a medida.",
  },
  {
    id: 7,
    image: maintenanceAndSupport,
    title: "Mantenimiento y Soporte",
    description: "Mantenimiento y soporte de software.",
  },
  {
    id: 8,
    image: performanceOptomization,
    title: "Optimización de Rendimiento",
    description: "Optimización de rendimiento de software.",
  },
  {
    id: 9,
    image: projectManagement,
    title: "Gestión de Proyectos",
    description: "Gestión de proyectos de software.",
  },
];

const settings: Settings = {
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  centerMode: true,
  centerPadding: "0px",
  nextArrow: <ArrowServicesRight />,
  prevArrow: <ArrowServicesLeft />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
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

export default function CarouselServices() {
  return (
    <div className="mt-12">
      <Slider {...settings} draggable={false} autoplay>
        {services.map((item) => (
          <div
            key={item.id}
            className="container noselect flex justify-center items-center"
          >
            <div className="canvas">
              <div className="tracker tr-1" />
              <div className="tracker tr-2" />
              <div className="tracker tr-3" />
              <div className="tracker tr-4" />
              <div className="tracker tr-5" />
              <div className="tracker tr-6" />
              <div className="tracker tr-7" />
              <div className="tracker tr-8" />
              <div className="tracker tr-9" />
              <div className="tracker tr-10" />
              <div className="tracker tr-11" />
              <div className="tracker tr-12" />
              <div className="tracker tr-13" />
              <div className="tracker tr-14" />
              <div className="tracker tr-15" />
              <div className="tracker tr-16" />
              <div className="tracker tr-17" />
              <div className="tracker tr-18" />
              <div className="tracker tr-19" />
              <div className="tracker tr-20" />
              <div className="tracker tr-21" />
              <div className="tracker tr-22" />
              <div className="tracker tr-23" />
              <div className="tracker tr-24" />
              <div className="tracker tr-25" />
              <div id="card" className="flex flex-col items-center">
                <div className="relative w-[356px] h-[286px]">
                  <img
                    className="w-full h-full rounded-lg object-cover object-center brightness-75"
                    src={item.image}
                    loading="lazy"
                    alt="imagedestination"
                  />
                </div>
                <div className="p-2 rounded-xl flex flex-col items-center bg-white z-10 justify-center w-[320px] h-[140px] text-center -mt-20">
                  <p className="text-[#0F1352] font-bold text-sm sm:text-xl md:text-xl text-center font-extrabold uppercase">
                    {item.title}
                  </p>
                  <p className="text-[#717171] text-xs sm:text-sm text-center pt-4 font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
