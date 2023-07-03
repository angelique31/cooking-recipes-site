const ArrowCarouselIcon = ({ color, direction = "right", ...props }) => {
  const transform =
    direction === "left" ? "scale(-1, 1) translate(-30, 0)" : "";

  return (
    <div style={{ padding: "50px 5px 50px 5px" }}>
      <svg
        width="20"
        height="28"
        viewBox="0 0 30 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ cursor: "pointer" }}
        {...props}
      >
        <g transform={transform}>
          <path
            fill={color}
            d="M0.360108 5.64L18.6801 24L0.360107 42.36L6.00011 48L30.0001 24L6.00011 3.88195e-06L0.360108 5.64Z"
          />
        </g>
      </svg>
    </div>
  );
};

export default ArrowCarouselIcon;
