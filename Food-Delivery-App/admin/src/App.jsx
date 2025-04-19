import React from "react";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="app-content"></div>
      <hr />
      <SideBar />
    </div>
  );
};

export default App;
