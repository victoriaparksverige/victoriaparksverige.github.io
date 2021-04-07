import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.scss";
import Winter from "../../../assets/winter-forest.jpeg";
import BrokenMailbox from "../../../assets/broken-mailbox.jpeg";

const carouselItems: Array<{ backgroundImage: string; text: string }> = [
  {
    backgroundImage: Winter,
    text:
      "Välkommen in i kylan, där temperaturen i lägenheterna kan vara så låg som 14 grader",
  },
  {
    backgroundImage: BrokenMailbox,
    text:
      "Om du letar efter en hyresvärd som du måste jaga rätt på i 3 veckor innan de åtgärdar din defekta brevlåda så har du kommit rätt",
  },
];

const Carousel: React.FC = () => {
  var settings = {
    autoplay: true,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider className="carousel" {...settings}>
      {carouselItems.map((item, index) => (
        <div key={index}>
          <div
            className="carousel-item"
            style={{
              backgroundPosition: "center",
              backgroundImage: `url(${item.backgroundImage})`,
            }}
          >
            <div className="carousel-caption">
              <span>{item.text}</span>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
