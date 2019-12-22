import React from "react";
import HomeDetails from "../components/Home-details";
import "../styles/home.css";

const Home: React.FC = () => {
  return (
    <div className="Home-Container">
      <div className="Home-Container-Top">
        <div>
          <h2>Home</h2>
          <HomeDetails></HomeDetails>
        </div>
      </div>
    </div>
  );
};

export default Home;
