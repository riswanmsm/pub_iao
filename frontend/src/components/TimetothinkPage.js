import "./TimetothinkPage.css";
import ButtonActive from "./ButtonActive";
import ButtonInactive from "./ButtonInctive";

const TimetothinkPage = () => {
  const navigateBookSession = () => {
    // Call your dynamic function or handle navigation logic here
    // For example, navigate to a different route
    window.location.href =
      "https://outlook.office365.com/owa/calendar/Timetothink%40bdct.onmicrosoft.com/bookings/s/oschDBs6gkGA2axlFQc8Eg2";
  };

  return (
    <div className="ttt">
      <div className="ttt-content">
        <div className="ttt-content-title">Time to think</div>
        <hr className="ttt-content-separator" />
        <div className="ttt-content-text">
          <b>What is Time to Think?</b>
          <br />
          <br />
          Time to Think is a network of experts to help you improve, innovate
          and transform healthcare across Bradford and Craven.
          <br />
          <br />
          The network of experts, using the collective knowledge across Place,
          is a dynamic force for change. It brings colleagues from across the
          system together to build connections beyond traditional roles and
          organisation silos.
          <br />
          <br />
          Time to Think offers a moment to step away and discuss an idea, a
          problem, or a project you might need some guidance on. Our network of
          experts are here to help, be it signpost or advise you.
          <br />
          <br />
          <b>Do you have a challenge and need some help?</b>
          <br />
          <br />
          Meet our experts and book a Time to Think session
        </div>
        <div className="ttt-btn">
          <ButtonActive onClick={navigateBookSession}>
            Book a session
          </ButtonActive>
          <div className="ttt-btn-separator"></div>
          <ButtonInactive>Find out more</ButtonInactive>
        </div>
      </div>
    </div>
  );
};

export default TimetothinkPage;
