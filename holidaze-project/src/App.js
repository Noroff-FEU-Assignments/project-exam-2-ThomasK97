import "./App.css";

import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import HotelRooms from "./pages/HotelRooms";
import { Login } from "./pages/Login";
import { Contact } from "./pages/Contact";
import Nav from "./components/Nav";

import { BrowserRouter as Router, Switch, Route, NavLink , Routes} from "react-router-dom";

function App() {
  return (
    <>
 
      <Nav/>
 <Router>
  
  
      <Routes>
        
        <Route path="hotels" element={<Hotels />} />
        <Route path="hotels/:slug" element={<HotelRooms />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route index element={<Home />} />
       

      </Routes>
      
  

</Router>
      
    </>
  );
}

export default App;
