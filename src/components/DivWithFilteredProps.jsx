// DivWithFilteredProps.jsx

const DivWithFilteredProps = ({ isRecipePage, ...props }) => <div {...props} />;

export default DivWithFilteredProps;
