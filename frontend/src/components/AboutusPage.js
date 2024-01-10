import "./AboutusPage.css";
import ButtonActive from "./ButtonActive";

const AboutusPage = () => {
  const navigateBookSession = () => {
    // Call your dynamic function or handle navigation logic here
    // For example, navigate to a different route
    window.location.href =
      "https://outlook.office365.com/owa/calendar/Timetothink%40bdct.onmicrosoft.com/bookings/s/oschDBs6gkGA2axlFQc8Eg2";
  };

  return (
    <div className="about">
      <div className="about-content">
        <div className="about-content-title">About us</div>
        <hr className="about-content-separator" />
        <div className="about-content-text">
          Improve as One is a pivotal component of the "Act as One" strategy
          bringing everyone across Place (Bradford and Craven) to come together
          and work beyond organisational silos with a commitment to ensuring
          quality care through unified actions, collaborative efforts, and
          continuous improvement.
          <br />
          <br />
          <b>Our Purpose</b>
          <br />
          <br />
          Is to create a culture of learning, adaptation, and improvement across
          the system by promoting an environment of togetherness where everyone
          working at Place can collaborate, share knowledge and seek best
          practice for the challenges that they face.
          <br />
          <br />
          <b>Our Partnership</b>
          <br />
          <br />
          Is dedicated to developing a unified approach for improvement and
          overcoming barriers in accessing coaching and resources. Our focus is
          on break free from individual Trusts to easily involve those in
          primary care, social care, and the voluntary sector.
          <br />
          <br />
          <b>Our People</b>
          <br />
          <br />
          Improve as One is forming a robust network of experts which will
          become the bedrock of our strategy for cross system collaboration
          allowing users to connect and share knowledge quickly.
          <br />
          <br />
          <b>Do you have a challenge and need some help?</b>
          <br />
          <br />
          Meet our experts and book a Time to Think session
        </div>
        <div className="about-btn">
          <ButtonActive onClick={navigateBookSession}>
            Book a session
          </ButtonActive>
        </div>
      </div>
    </div>
  );
};

export default AboutusPage;
