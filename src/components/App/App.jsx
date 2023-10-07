import React from "react";
import AppRoutes from "../Routes/AppRoutes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SideBar from "../Sidebar/Sidebar";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <SideBar />
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
};

export default App;
