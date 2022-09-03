import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Post from "./pages/Post";
import NavBar from "./components/NavBar";

function App() {

  return (
    <Router>

        <NavBar />
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts/:id" element={<Post />} />
        </Routes>
      </>
    </Router>


  );
}

export default App;
