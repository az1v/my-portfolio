import React, {useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import AboutMePage from "./components/pages/AboutMePage";
import ProjectsPage from "./components/pages/ProjectsPage";
import ContactPage from "./components/pages/ContactPage";
import ProjectDetailPage from "../src/ProjectsDetailPage"; 
import TechnologiesPage from "./components/pages/TechnologiesPage";
import ResponsivePage from "./components/pages/ResponsivePage";


function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setIsDarkMode((prevMode) => !prevMode);
    };
  
      
    return (
     <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/aboutMe" element={<AboutMePage/>} />
          <Route path="/projects" element={<ProjectsPage/>} />
          <Route path="/projects/:projectId" element={<ProjectDetailPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/technologies" element={<TechnologiesPage/>} />
          <Route path="responsive" element={<ResponsivePage/>} />
          </Routes>
        <Footer />
      </Router>
     </div>
    );
  }
  
  export default App;