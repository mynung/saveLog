import DashBoard from "../components/DashBoard";
import Header from "../components/Header";
import { useState } from "react";
import Record from "../components/Record";
import MyPage from "../components/MyPage";
import "./Home.css";

const Home = () => {
  const [state, setState] = useState(0);
  return (
    <div className="home_page">
      <Header setPage={setState} />
      <main className="home_content">
        {state === 0 && <DashBoard />}
        {state === 1 && <Record />}
        {state === 2 && <MyPage />}
      </main>
    </div>
  );
};

export default Home;
