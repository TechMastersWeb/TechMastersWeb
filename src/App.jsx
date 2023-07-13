/* ====== React Router ====== */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
/* ====== Pages ====== */
import Home from "./components/Pages/Home/home";
import NavBar from "./components/navbar/navbar";
import NotificationHome from "./components/notifications/home-notificacion";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
