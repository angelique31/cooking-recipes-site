import IconWithTitle from "../IconWithTitle/IconWithTitle";
import QuicklyIcon from "../../../assets/Icons/QuicklyIcon.svg";
import StarterIcon from "../../../assets/Icons/StarterIcon.svg";
import MainCourseIcon from "../../../assets/Icons/MainCourseIcon.svg";
import CakeIcon from "../../../assets/Icons/CakeIcon.svg";
import AperitifIcon from "../../../assets/Icons/AperitifIcon.svg";
import { Link } from "react-router-dom";
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
        <Link to={`/category/${category.title}`} key={index}>
          <IconWithTitle
            icon={() => (
              <img
                src={category.icon}
                alt={category.title}
                className="styled-icon"
              />
            )}
            title={category.title}
          />
        </Link>
      ))}
    </CategoryCardContainer>
  );
}
export default CategoryCard;
