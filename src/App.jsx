import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login"
import Regist from "./pages/Regist";
import Home from "./pages/Home";

function App() {
  return <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/regist" element={<Regist/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="*" element={<div>404 Not Found</div>} />
  </Routes>;
}

export default App;
