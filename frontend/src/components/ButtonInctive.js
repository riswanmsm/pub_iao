import "./ButtonInactive.css";

const ButtonInactive = ({ onClick, children }) => {
  return (
    <div className="btn-inactive" onClick={onClick}>
      {children}
    </div>
  );
};

export default ButtonInactive;
