import { useEffect, useState } from "react";
import {
  CarouselContainer,
  ImageContainer,
  CarouselWrapper,
} from "./Carousel.styled.js";

const Carousel = () => {
  const images = [
    "/assets/sugar-recipe/cheesecake-caramel-beurre-sale.jpeg",
    "/assets/sugar-recipe/creme-dessert-chocolat.jpg",
    "/assets/sugar-recipe/tarte-citron-meringu.jpg",
    "/assets/sugar-recipe/tarte-au-chocolat.jpeg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <CarouselWrapper>
      <CarouselContainer>
        {images.map((img, index) => (
          <ImageContainer key={img} active={index === currentImageIndex}>
            <img src={img} alt="#" />
          </ImageContainer>
        ))}
      </CarouselContainer>
    </CarouselWrapper>
  );
};

export default Carousel;
