import PropTypes from "prop-types";
import { StyledDiv, SectionDiv, StyledH2 } from "./IconWithTitle.styled";

function IconWithTitle({ icon: Icon, title }) {
  return (
    <SectionDiv>
      <StyledDiv>
        <Icon />
        <StyledH2>{title}</StyledH2>
      </StyledDiv>
    </SectionDiv>
  );
}
IconWithTitle.propTypes = {
  icon: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
export default IconWithTitle;
