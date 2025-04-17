import 'leaflet/dist/leaflet.css';  // Make sure this is at the top
import "./App.css";


import Contact from "./pages/Contact";
import Event from "./pages/Event";
import Home from "./pages/Home";
import Live from "./pages/Live";
import Navbar from "./components/Navbar";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup"; // Add this import
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#1a1a1a]">
        {/* bg-gradient-to-b from-custom-blue bg-[#541e6d] to-custom-green */}
        <Navbar />
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/live" element={<Live />} />
          <Route path="/event" element={<Event />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
