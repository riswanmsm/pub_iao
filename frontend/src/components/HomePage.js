import "./HomePage.css"; // style HomePage with css
import ButtonActive from "./ButtonActive";
import ButtonInactive from "./ButtonInctive";

const HomePage = () => {
  return (
    <div className="home">
      <div className="home-content">
        <div className="home-content-title">Improve as One</div>
        <hr className="home-content-separator" />
        <div className="home-content-text">
          Acting as one to keep people happy and healthy at home
        </div>
        <div className="home-btn">
          <ButtonActive />
          <div className="home-btn-separator"></div>
          <ButtonInactive />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
