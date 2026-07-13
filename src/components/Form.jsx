import Button from "./Button";
import { Link } from "react-router-dom";
import "./Form.css";
import { useContext, useState, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const { dispatch } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "alsghd72@gmail.com" && password === "1937") {
      setError("");
      dispatch({
        type: "LOGIN",
        payload: { id: 1, name: "민홍", email: email },
      });
      console.log("로그인 성공");
      navigate("/home");
    } else {
      console.log("로그인 실패");
      setError("이메일 또는 비밀번호가 올바르지 않습니다.");
      setEmail("");
      setPassword("");
    }
  };
  return (
    <div className="form_wrap">
      <form action="" onSubmit={handleSubmit}>
        <img src="" alt="" />
        <h2 className="title">SaveLog</h2>
        <p className="discription">소비를 기록하고 관리하세요</p>

        <p className="input_dec">이메일</p>
        <input
          ref={emailRef}
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <p className="input_dec">비밀번호</p>
        <input
          ref={passwordRef}
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="error">{error}</p>}

        <Button text={"로그인"} type={"submit"} />
        <p className="signup-text">
          아직 회원이 아니신가요? <Link to="/regist">회원가입</Link>
        </p>
      </form>
    </div>
  );
};

export default Form;
