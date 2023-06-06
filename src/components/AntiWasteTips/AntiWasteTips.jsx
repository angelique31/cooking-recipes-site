import { antiWasteTipsData } from "../../datas/antiWasteTipsData.js";
import CardSection from "../CardSection/CardSection.jsx";

const AntiWasteTips = () => {
  return (
    <CardSection
      data={antiWasteTipsData}
      title="Astuces anti-gaspi"
      linkTo="#"
    />
  );
};

export default AntiWasteTips;
