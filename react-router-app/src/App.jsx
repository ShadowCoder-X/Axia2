import Header from "./component/Header";
import Navigation from "./component/Navigation";
import Footer from "./component/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <h1 class="text-3xl font-bold underline text-green-700 text-center">
        Hello world!
      </h1>

      <Footer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

// BrowserRouter
// Routes
// Route
// Link

export default App;
