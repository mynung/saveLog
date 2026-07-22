import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Regist from "./pages/Regist";
import Home from "./pages/Home";
import AuthProvider from "./context/AuthContext";
import TransactionProvider from "./context/TransactionContext";

function App() {
  return (
    <TransactionProvider>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/regist" element={<Regist />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </AuthProvider>
    </TransactionProvider>
  );
}

export default App;
