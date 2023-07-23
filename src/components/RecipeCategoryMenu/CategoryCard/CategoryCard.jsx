import IconWithTitle from "../IconWithTitle/IconWithTitle";
import QuicklyIcon from "../../../assets/Icons/QuicklyIcon.svg";
import starterIcon from "../../../assets/Icons/starterIcon.svg";
import mainCourseIcon from "../../../assets/Icons/mainCourseIcon.svg";
import cakeIcon from "../../../assets/Icons/cakeIcon.svg";
import aperitifIcon from "../../../assets/Icons/aperitifIcon.svg";
import { Link } from "react-router-dom";
import { CategoryCardContainer } from "./CategoryCard.styled";

const categories = [
  { icon: QuicklyIcon, title: "Rapide" },
  { icon: starterIcon, title: "Entrées" },
  { icon: mainCourseIcon, title: "Plats" },
  { icon: cakeIcon, title: "Desserts" },
  { icon: aperitifIcon, title: "Apéritifs" },
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
