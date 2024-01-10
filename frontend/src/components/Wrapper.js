import "./Wrapper.css"; // Style your Wrapper with CSS
import BackgroundImage from "../images/Circles.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Wrapper = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="wrapper">
        <div className="wrapper-left">{children}</div>
        <div className="wrapper-right">
          <img src={BackgroundImage} alt="Logo" className="wrapper-right-img" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wrapper;
