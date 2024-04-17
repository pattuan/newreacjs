import logo from "./logo.svg";
import "./App.css";
import { Button, Stack } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./page/layout";
import Home from "./page/home";
import Order from "./page/order";
import Login from "./page/login";
import Register from "./page/register";


function App() {
  return (
    <div className="App">
      <div className="App">
      <h1>Hello</h1>
      <h2>How are you!</h2>
        </div>
      
        
    // </div>,
    <BrowserRouter basename="/newreacjs">
    <Routes>
        {/* <Route exact path="/Layout" element={<Layout />}/> */}
            
        
        <Route path="/home" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
