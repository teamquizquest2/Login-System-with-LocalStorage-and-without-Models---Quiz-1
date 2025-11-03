/* File: src/App.jsx */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 🧩 Importing utils globally as required by teacher
import { sanitizeInput } from "./utils/sanitizeInput";
import { isAlphabetOnly } from "./utils/isAlphabetOnly";
import { charLength } from "./utils/charLength";
import { regEmailTest } from "./utils/regEmailTest";

// 🧩 Importing your components and pages
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./components/Signup";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";

import "./App.css";

function App() {
  // ✅ These utils will be available globally across the app (like teacher’s pattern)
  // You can use them in Signup.jsx and LoginPage.jsx easily now.

  // Just return routing
  return (
    <Router>
      <Navbar />
      <div className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
