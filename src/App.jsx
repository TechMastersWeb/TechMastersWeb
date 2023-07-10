/* ====== React Router ====== */
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* ====== Pages ====== */
import Home from "./components/Pages/Home/home";
import NavBar from "./components/navbar/navbar";
import NotificationHome from "./components/notifications/home-notificacion";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
