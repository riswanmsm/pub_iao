import "./ButtonActive.css";

const ButtonActive = ({ onClick, children }) => {
  return (
    <div className="btn-active" onClick={onClick}>
      {children}
    </div>
  );
};

export default ButtonActive;
