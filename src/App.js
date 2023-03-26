import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import "./App.scss";

function App() {
  return (

    <BrowserRouter>
    <Header></Header> 
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:imdbID" element={<MovieDetail/>} />
        <Route path="/pagenotfound" element={<PageNotFound/>} />
      </Routes>
      </div>  
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
