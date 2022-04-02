import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/About';
import ContactPage from "./pages/Contact";
import HomePage from "./pages/Home";
import React from "react";
import FooterBar from "./components/Footerbar/FooterBar";

const App = () => {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/contact" element={<ContactPage/>} />
        </Routes>
        <FooterBar/>
    </Router>
  );
}


export default App;
