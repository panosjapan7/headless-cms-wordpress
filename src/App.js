import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Post from "./pages/Post";
import Category from "./pages/Category";
import NavBar from "./components/NavBar";
import CategoryList from "./components/CategoryList";

function App() {
  return (
    <Router>
      <NavBar />
      <CategoryList />
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/:category" element={<Category />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
