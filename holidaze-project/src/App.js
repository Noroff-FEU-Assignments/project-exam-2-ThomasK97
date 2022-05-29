
import "./sass/main.scss";

import Home from '../src/pages/Home';
import Hotels from "../src/pages/Hotels";
import HotelRooms from "../src/pages/HotelRooms";
import { Login } from "../src/pages/Login";
import { Contact } from "../src/pages/Contact";
import  { AuthProvider } from "../src/context/AuthContext"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "../src/pages/Admin";
import NavbarComp from "../src/components/NavbarComp"


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
