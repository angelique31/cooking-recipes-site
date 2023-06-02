import { useEffect, useState } from "react";
import { CarouselContainer, StyledImage } from "./Carousel.styled.js";

const Carousel = () => {
  const images = [
    "/assets/cheesecake-caramel-beurre-sale.jpeg",
    "/assets/creme-carambar.jpg",
    "/assets/gateau-au-chocolat.jpeg",
    "/assets/tarte-au-chocolat.jpeg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval); // Ceci est important, il nettoie l'intervalle lors du démontage du composant.
  }, [images.length]);

  return (
    <CarouselContainer>
      {images.map((img, index) => (
        <StyledImage
          key={img}
          src={img} // ici, vous avez déjà préfixé l'URL de l'image avec "/assets/" dans le tableau `images`, donc vous n'avez pas besoin de le faire ici.
          alt="#"
          active={index === currentImageIndex} // utilisez "currentImageIndex" au lieu de "step"
        />
      ))}
    </CarouselContainer>
  );
};

export default Carousel;
