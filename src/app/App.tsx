import { Hidden } from "@mui/material";
import Clients from "./sections/clients/Clients";
import Header from "./components/header/Header";
import Home from "./sections/home/Home";
import Services from "./sections/services/Services";
import About from "./sections/about/About";
import Footer from "./components/footer/Footer";
import SmallHeader from "./components/smallheader/SmallHeader";
import ScrollAnimation from "./components/scrollanimation/ScrollAnimation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-alice-carousel/lib/alice-carousel.css";
import "../App.css";

function App() {
  return (
    <div className="background-dgtaliza">
      <Hidden mdDown>
        <Header />
      </Hidden>
      <Hidden mdUp>
        <SmallHeader />
      </Hidden>
      <ScrollAnimation>
        <Home />
        <Services />
        <Clients />
        <About />
        <Footer />
      </ScrollAnimation>
    </div>
  );
}

export default App;
