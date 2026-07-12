import Button from "./Button";
import { Link } from "react-router-dom";
import "./Form.css";

const Form = () => {
  return (
    <div className="form_wrap">
      <img src="" alt="" />
      <h2 className="title">SaveLog</h2>
      <p className="discription">소비를 기록하고 관리하세요</p>
      <p className="input_dec">이메일</p>
      <input type="email" placeholder="아이디" />

      <p className="input_dec">비밀번호</p>
      <input type="password" placeholder="비밀번호" />
      <Button text={"로그인"} />
      <p className="signup-text">
        아직 회원이 아니신가요? <Link to="/regist">회원가입</Link>
      </p>
    </div>
  );
};

export default Form;
