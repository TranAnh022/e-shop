import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="productlist" element={<ProductList />} />
          <Route path="product" element={<Product />} />
          <Route path="login" element={<Login />} />
          <Route path="cart" element={<Cart />} />
          <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;