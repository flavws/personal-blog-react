import { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/statics/navbar/Navbar";
import Footer from "./components/statics/footer/Footer";
import Home from "./pages/home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/home" element={<Home />}/>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
