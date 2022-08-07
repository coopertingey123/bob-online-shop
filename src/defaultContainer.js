import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AllItems from "./pages/allItems";
import ShoppingCart from "./pages/shoppingCart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="expenses" element={<AllItems />} />
      <Route path="invoices" element={<ShoppingCart />} />
    </Routes>
  </BrowserRouter>
);
