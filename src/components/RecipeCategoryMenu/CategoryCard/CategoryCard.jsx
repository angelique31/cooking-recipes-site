import IconWithTitle from "../IconWithTitle/IconWithTitle";

import QuicklyIcon from "../../../assets/Icons/QuicklyIcon.svg";
import StarterIcon from "../../../assets/Icons/StarterIcon.svg";
import MainCourseIcon from "../../../assets/Icons/MainCourseIcon.svg";
import CakeIcon from "../../../assets/Icons/CakeIcon.svg";
import AperitifIcon from "../../../assets/Icons/AperitifIcon.svg";

import { CategoryCardContainer } from "./CategoryCard.styled";

const categories = [
  { icon: QuicklyIcon, title: "Rapide" },
  { icon: StarterIcon, title: "Entrées" },
  { icon: MainCourseIcon, title: "Plats" },
  { icon: CakeIcon, title: "Desserts" },
  { icon: AperitifIcon, title: "Apéritifs" },
];

function CategoryCard() {
  return (
    <CategoryCardContainer>
      {categories.map((category, index) => (
        <IconWithTitle
          key={index}
          icon={() => (
            <img
              src={category.icon}
              alt={category.title}
              className="styled-icon"
            />
          )}
          title={category.title}
        />
      ))}
    </CategoryCardContainer>
  );
}

export default CategoryCard;
