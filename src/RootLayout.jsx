import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navandfooter/Navbar";
import Footer from "./components/navandfooter/Footer";

function RootLayout() {
  return (
    <div
      className="root-layout d-flex flex-column"
      style={{ minHeight: "100vh" }}>
      <Navbar />
      <main
        className="flex-grow-1"
        style={{
          padding: "20px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
