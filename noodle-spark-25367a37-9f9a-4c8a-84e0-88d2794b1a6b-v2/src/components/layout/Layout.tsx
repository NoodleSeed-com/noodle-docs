import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="doc-site">
      <Navbar />
      <main className="doc-content">
        <Outlet />
      </main>
      <footer className="doc-footer">
        <p>© {new Date().getFullYear()} Noodle Seed. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
