import "./button.css";
const Button = ({text, type, event}) => {

  return (
   <button type={type} onClick={event} >{text}</button>
  );
};

export default Button;