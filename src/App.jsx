/* ====== React Router ====== */
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* ====== Pages ====== */
import Home from "./components/Pages/Home/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <NavBar />
      <NotificationHome />
    </>
  );
}

export default App;
