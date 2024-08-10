import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import webDevelop from "../../assets/img/services/web-develop.jpg";
import appDevelopment from "../../assets/img/services/app-development.jpg";
import techmologiesForefront from "../../assets/img/services/technologies-at-the-forefront.jpg";
import technologyConsulting from "../../assets/img/services/technology-consulting.jpg";
import uiDesgigns from "../../assets/img/services/ui-designs.jpg";
import customSoftwareDevelopment from "../../assets/img/services/custom-software-development.jpg";
import projectManagement from "../../assets/img/services/project-management.jpg";
import performanceOptomization from "../../assets/img/services/performance-optimization.jpg";
import maintenanceAndSupport from "../../assets/img/services/maintenance-and-support.jpg";

const storiesData = [
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

export default function CarouselServices() {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={10}
      navigation
      loop
      draggable={false}
      breakpoints={{
        1024: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1,
        },
        320: {
          slidesPerView: 1,
        },
      }}
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper"
    >
      <div>
        {storiesData.map((item) => (
          <SwiperSlide
            key={item.id}
            className="swiper-slide-two my-10 rounded-xl flex justify-center items-center flex-col gap-10 mt-20"
            data-hash={`slide${item.id}`}
          >
            <div className="flex justify-center items-center px-60">
              <div className="flex flex-col justify-center items-center h-full w-full">
                <div className="relative w-[368px] h-[286px]">
                  <img
                    className="w-full h-full rounded-lg object-cover object-center brightness-75"
                    src={item.image}
                    alt="imagedestination"
                  />
                  <div className="overlay bg-gradient-to-t from-black rounded-lg" />
                </div>
                <div
                  style={{
                    bottom: -30,
                    position: "absolute",
                    width: "300px",
                    height: "140px",
                  }}
                  className="p-2 rounded-xl flex flex-col items-center bg-white z-10 justify-center"
                >
                  <p className="text-[#0F1352] font-bold text-sm sm:text-xl md:text-xl text-center font-extrabold uppercase">
                    {item.title}
                  </p>
                  <p className="text-[#717171] text-xs sm:text-sm text-center pt-2 font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
}

// import Slider from "react-slick";

// export default function CarouselServices() {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
// 	arrows: true,
//   };
//   return (
//     <div className="slider-container">
//       <Slider {...settings} autoplay>
//         <div>
//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//         <div>
//           <h3>7</h3>
//         </div>
//         <div>
//           <h3>8</h3>
//         </div>
//         <div>
//           <h3>9</h3>
//         </div>
//       </Slider>
//     </div>
//   );
// }
