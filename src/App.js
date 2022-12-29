import React from "react";
import SearchAppBar from "./components/SearchAppBar";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/book/:id" element={<DetailPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
