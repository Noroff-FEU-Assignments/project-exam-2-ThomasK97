import "./App.css";

import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import HotelRooms from "./pages/HotelRooms";
import { Login } from "./pages/Login";
import { Contact } from "./pages/Contact";
import Nav from "./components/Nav";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";

function App() {
  return (
    <>
    <Router>
      <Nav />
      
        <Routes>
          <Route index element={<Home />} />

          <Route path="hotels" element={<Hotels />} />
          <Route path="hotels/:id" element={<HotelRooms />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="admin" element={<Admin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
