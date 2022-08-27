import "./App.css";
import "animate.css/animate.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Register from "./pages/Register/Register";
// import ContactUs from "./pages/Contact_Us/Contact_Us";
// import AboutUs from "./pages/About_Us/AboutUs";
// import Products from "./pages/Products/Products";

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products" element={<Products />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
