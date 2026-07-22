import "./button.css";
const Button = ({text, type, event, className}) => {

  return (
   <button type={type} onClick={event} className={className}>{text}</button>
  );
};

export default Button;