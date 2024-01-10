import { useNavigate } from "react-router-dom";
import "./HomePage.css"; // style HomePage with css
import ButtonActive from "./ButtonActive";
import ButtonInactive from "./ButtonInctive";

const HomePage = () => {
  const navigate = useNavigate();
  const navigateTTT = () => {
    // Call your dynamic function or handle navigation logic here
    // For example, navigate to a different route
    navigate("/time-to-think");
  };
  const navigateAbout = () => {
    // Call your dynamic function or handle navigation logic here
    // For example, navigate to a different route
    navigate("/about");
  };
  return (
    <div className="home">
      <div className="home-content">
        <div className="home-content-title">Improve as One</div>
        <hr className="home-content-separator" />
        <div className="home-content-text">
          Acting as one to keep people happy and healthy at home
        </div>
        <div className="home-btn">
          <ButtonActive onClick={navigateTTT}>Time to think</ButtonActive>
          <div className="home-btn-separator"></div>
          <ButtonInactive onClick={navigateAbout}>About us</ButtonInactive>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
