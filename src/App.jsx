import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-grow">
        <HeroSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
