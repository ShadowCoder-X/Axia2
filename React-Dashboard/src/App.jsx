import "./App.css";
//import Header from "./component/Header";
import Navigation from "./component/Navigation";
//import Footer from "./component/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div>
      <Navigation />

      {/* <Header />
      <Footer /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact/*" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
