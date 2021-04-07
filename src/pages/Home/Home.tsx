import React from "react";
import "./Home.scss";
import { CarouselIntro} from "../../components/Carousels";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";



const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <CarouselIntro />
      <Footer />
    </div>
  );
};

export default Home;
