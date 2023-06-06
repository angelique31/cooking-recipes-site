import { newsData } from "../../datas/newsData.js";
import CardSection from "../CardSection/CardSection.jsx";

const NewsSection = () => {
  return (
    <CardSection data={newsData} title="Dernières actualités" linkTo="/news" />
  );
};

export default NewsSection;
