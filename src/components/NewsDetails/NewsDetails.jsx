// NewsDetails.js

import { useParams } from "react-router-dom";
import { newsData } from "../../datas/newsData.js";

const NewsDetails = () => {
  const { newsId } = useParams();
  const newsItem = newsData.find((item, index) => index === parseInt(newsId));

  return (
    <div>
      <h1>{newsItem.title}</h1>
      <img src={newsItem.image} alt={newsItem.title} />
      {newsItem.summaryTitle.map((title, index) => (
        <div key={index}>
          <h2>{title}</h2>
          <p>{newsItem.summaryText[index]}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsDetails;
