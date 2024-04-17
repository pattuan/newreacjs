import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./page/layout";
import Home from "./page/home";
import Order from "./page/order";
import Login from "./page/login";
import Register from "./page/register";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     {/* <Routes>
  //     <Route path="/" element={<Layout />}>
  //       <Route index element={<Home />} />
  //       <Route path="/order" element={<Order />} />
  //     </Route>
  //     <Route path="/login" element={<Login />} />
  //     <Route path="/register" element={<Register />} />
  //   </Routes> */}
    <App />
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
