import CarouselServices from "../../components/carouselservices/CarouselServices";

export default function Clients() {
  return (
    <div id="clients" className="py-20 px-8 xl:px-40">
      <h2 className="text-4xl text-white uppercase font-extrabold text-center pt-16">
        Nuestros Clientes
      </h2>
      <CarouselServices />
    </div>
  );
}
