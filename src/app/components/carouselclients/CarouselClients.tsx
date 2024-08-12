import { useState } from "react";
import Slider, { Settings } from "react-slick";
import experiencie from "../../assets/img/about/experiencie.png";
import inovation from "../../assets/img/about/inovation.png";
import support from "../../assets/img/about/support.png";
import quality from "../../assets/img/about/quality.png";
import ArrowRight from "../arrowright/ArrowRight";
import ArrowLeft from "../arrowleft/ArrowLeft";

const images = [experiencie, inovation, support, quality];

export default function CarouselClients() {
  const [imageIndex, setImageIndex] = useState(0);

  const settings: Settings = {
    infinite: true,
    lazyLoad: "ondemand",
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
    beforeChange: (_current: number, next: number) => setImageIndex(next),
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

  return (
    <div className="mx-8 xl:mx-40 mt-20">
      <Slider {...settings} draggable={false}>
        {images.map((img, idx) => (
          <div
            key={idx}
            className={idx === imageIndex ? "slideOne activeSlide" : "slideOne"}
          >
            <img src={img} alt={`Slide ${idx}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
