import React from "react";
import { Route, Routes } from "react-router-dom";
import "../src/App.css";
import Header from "./components/Header/Header";
import RequiredAuth from "./components/RequiredAuth";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import CheckOut from "./Pages/CheckOut/CheckOut";
import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login/Login";
import SignUp from "./Pages/Login/Register/SignUp";
import NotFound from "./Pages/NotFound/NotFound";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/checkout"
          element={
            <RequiredAuth>
              <CheckOut />
            </RequiredAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
