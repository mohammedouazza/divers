import React from "react";
import Content from "./content/Content";
import Footer from "./footer/Footer";
import Header from "./header/Header";

function AppNavigation() {
  return (
    <>
      <div id="back-to-top-anchor"></div>
      <Header />
      <div className="mb-4">
        <Content />
      </div>
      <Footer />
    </>
  );
}

export default AppNavigation;
