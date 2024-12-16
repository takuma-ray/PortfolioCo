import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./style.css";

import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Recruit from "./Recruit";
import Contact from "./Contact";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Router>
      <header>
        <div className="hContainer">
          <h1>ポートフォリオ株式会社</h1>
          {isMobile && (
            <button className="hamburger" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          )}
          {!isMobile && (
            <nav>
              <ul>
                <li><Link to="/">ホーム</Link></li>
                <li><Link to="/services">サービス</Link></li>
                <li><Link to="/about">会社概要</Link></li>
                <li><Link to="/recruit">採用情報</Link></li>
                <li><Link to="/contact">お問い合わせ</Link></li>
              </ul>
            </nav>
          )}
        </div>

        {isMobile && (
          <div className={`mobileOverlay ${menuOpen ? "show" : ""}`} onClick={closeMenu}></div>
        )}

        {isMobile && (
          <nav className={`mobileMenu ${menuOpen ? "open" : ""}`} onClick={closeMenu}>
            <ul onClick={(e) => e.stopPropagation()} className="mobileMenuList">
              <li><Link to="/">ホーム</Link></li>
              <li><Link to="/services">サービス</Link></li>
              <li><Link to="/about">会社概要</Link></li>
              <li><Link to="/recruit">採用情報</Link></li>
              <li><Link to="/contact">お問い合わせ</Link></li>
            </ul>
          </nav>
        )}
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/recruit" element={<Recruit />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2024 ポートフォリオ株式会社. All rights reserved.</p>
        </div>
      </footer>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);