import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderComponent from "../components/Header";
import HomeContainer from "../container/Home";
import AboutContainer from "../container/About";
import MoviesContainer from "../container/Movies";

import ContactContainer from "../container/Contact";
import DetailsContainer from "../container/Details";
import FooterComponent from "../components/Footer";

import SearchContainer from "../container/Search";
import SeriesContainer from "../container/Sereis";

const RouterComponents = () => {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/about" element={<AboutContainer />} />
          <Route path="/movies" element={<MoviesContainer />} />
          <Route path="/series" element={<SeriesContainer />} />
          <Route path="/search" element={<SearchContainer />} />
          <Route path="/contact" element={<ContactContainer />} />
          <Route
            path="/details/:movieid/:mediatype"
            element={<DetailsContainer />}
          />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
};

export default RouterComponents;
