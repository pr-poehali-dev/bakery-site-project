import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bakery from "@/pages/Bakery";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Bakery />} />
      </Routes>
    </Router>
  );
}

export default App;
