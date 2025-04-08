import React from "react";
import "./Home.css";
import Header from "../../components/NavBar/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";

const Home = () => {
  return (
    <div>
      <Header />
      <ExploreMenu />
    </div>
  );
};

export default Home;
