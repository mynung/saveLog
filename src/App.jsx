import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Regist from "./pages/Regist";
import Home from "./pages/Home";
import AuthProvider from "./context/AuthContext";
import ExpenseProvider from "./context/ExpenseContext";

function App() {
  return (
    <ExpenseProvider>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/regist" element={<Regist />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </AuthProvider>
    </ExpenseProvider>
  );
}

export default App;
