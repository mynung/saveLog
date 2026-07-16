import Button from "./Button";
import "./Header.css";

const Header = ({ setPage }) => {
  const onClick = (e) => {
    switch (e.target.innerText) {
      case "DashBoard":
        setPage(0);
        break;
      case "Record":
        setPage(1);
        break;
      case "MyPage":
        setPage(2);
        break;
      default:
        setPage(0);
        break;
    }
  };
  return (
    <div className="header_wrapper">
      <div className="header_left">
        <h1>SaveLog</h1>
      </div>

      <div className="header_right">
        <Button text={"DashBoard"} event={onClick} />
        <Button text={"Record"} event={onClick} />
        <Button text={"MyPage"} event={onClick} />
      </div>
    </div>
  );
};

export default Header;
