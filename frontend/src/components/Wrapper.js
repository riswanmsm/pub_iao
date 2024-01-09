import "./Wrapper.css"; // Style your Wrapper with CSS
import BackgroundImage from "../images/Circles.png";

const Wrapper = () => {
  return (
    <div className="wrapper">
      <div className="wrapper-left"></div>
      <div className="wrapper-right">
        <img src={BackgroundImage} alt="Logo" className="wrapper-right-img" />
      </div>
    </div>
  );
};

export default Wrapper;
