import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ShoppingCart from "./pages/shoppingCart";
import AllItems from "./pages/allItems";
import Navbar from "./components/navbar";
import "./styles/App.scss";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/shopping-cart" element={<ShoppingCart />} />
      <Route path="/items" element={<AllItems />} />
    </Routes>
    <ToastContainer />
  </BrowserRouter>
);
