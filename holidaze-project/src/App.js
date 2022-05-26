
import "./sass/main.scss";

import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import HotelRooms from "./pages/HotelRooms";
import { Login } from "./pages/Login";
import { Contact } from "./pages/Contact";
import Nav from "./components/Nav";
import AuthContext, { AuthProvider } from "./context/AuthContext";



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import NavbarComp from "./components/NavbarComp";
import ListMessages from "./components/admin/ListMessage";

function App() {
  return (
    <>
    <AuthProvider>
    <Router>

      <NavbarComp/>
    
     
    
      
        <Routes>
          <Route index element={<Home />} />

          <Route path="hotels" element={<Hotels />} />
          <Route path="hotels/:id" element={<HotelRooms />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="admin" element={<Admin />} />

  
        </Routes>
      </Router>
      </AuthProvider>
    </>
  );
}

export default App;
