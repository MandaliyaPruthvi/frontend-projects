import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/NavBar/NavBar";

import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import VerifyToken from "./pages/VerifyToken/VerifyToken";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
// import './i18n'; // Import i18n configuration

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === "fa") {
      document.body.setAttribute("dir", "rtl"); // Right-to-left
    } else {
      document.body.setAttribute("dir", "ltr"); // Left-to-right
    }
  }, [i18n.language]);

  return (
    <Router>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/emailverify" element={<VerifyToken />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
