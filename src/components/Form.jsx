import Button from "./Button";
import { Link } from "react-router-dom";
import "./Form.css";
import { useContext, useState, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Form = ({ mode }) => {
  const isRegist = mode === "regist";
  const { state ,dispatch } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //회원가입 로직
    if (isRegist) {
      
      if (!name || !email || !password || !confirmPassword) {
        setError("모든 항목을 입력해주세요.");
        return;
      }

      if (password !== confirmPassword) {
        setError("비밀번호가 일치하지 않습니다.");
        return;
      }

      if (state.users.find((user) => user.email === email)) {
        setError("이미 존재하는 이메일입니다.");
        return;
      }

      dispatch({
        type: "REGISTER",
        payload: { email, name , password },
      });

      alert("회원가입 성공");
      navigate("/");
      return;
    }

    //login 로직

    const foundUser = state.users.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      setError("");
      dispatch({
        type: "LOGIN",
        payload: foundUser,
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

        {isRegist && (
          <>
            <p className="input_dec">이름</p>
            <input
              type="text"
              placeholder="이름"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </>
        )}

        <p className="input_dec">비밀번호</p>
        <input
          ref={passwordRef}
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {isRegist && (
          <>
            <p className="input_dec">비밀번호 확인</p>
            <input
              type="password"
              placeholder="비밀번호 확인"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </>
        )}

        {error && <p className="error">{error}</p>}

        <Button text={isRegist ? "회원가입" : "로그인"} type={"submit"} />
        <p className="signup-text">
          {isRegist ? (
            <>
              이미 계정이 있으신가요? <Link to="/">로그인</Link>
            </>
          ) : (
            <>
              아직 회원이 아니신가요? <Link to="/regist">회원가입</Link>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Form;
