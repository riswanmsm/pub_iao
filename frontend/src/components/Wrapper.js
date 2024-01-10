import "./Wrapper.css"; // Style your Wrapper with CSS
import BackgroundImage from "../images/Circles.png";
import HomePage from "./HomePage";

const Wrapper = () => {
  return (
    <div className="wrapper">
      <div className="wrapper-left">
        <HomePage />
      </div>
      <div className="wrapper-right">
        <img src={BackgroundImage} alt="Logo" className="wrapper-right-img" />
      </div>
    </div>
  );
};

export default Wrapper;
