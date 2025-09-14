import { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Project from "./components/project/Project";
import Contact from "./components/contant/Contact";
import "./App.css"; // Loader CSS import
import CookieConsent from "./components/cookie/CookiePolicy";
import BackToTop from "./components/backtotop/BackToTop";

function App() {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const handlePageLoad = () => setLoading(false);

    if (document.readyState === "complete") {
      setLoading(false); 
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => window.removeEventListener("load", handlePageLoad);
  }, []);

  // Loader UI
  if (loading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
        {/* <h2>Loading...</h2> */}
      </div>
    );
  }

  // Main Website
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
      <CookieConsent/>
      <BackToTop/>
    </>
  );
}

export default App;
