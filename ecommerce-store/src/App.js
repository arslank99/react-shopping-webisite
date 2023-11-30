import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
import Shop from "./components/shop/Shop";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart";
import { ContextGlobal } from "./components/context";
import Product from "./components/product/Product";
import Whislist from "./components/whislist/Whislist";
import Protected from "./Protected";
import Error from "./components/error/Error";
import DashBoard from "./components/DashBoard/DashBoard";
import DashboardOrder from "./components/DashBoard/DashboardOrder";
import DashboardProduct from "./components/DashBoard/DashboardProduct";
import OrderDetail from "./components/DashBoard/OrderDetail";

function App() {
  return (
    <ContextGlobal>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/">
              <Route path="/" element={<Header />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/whislist" element={<Whislist />} />
              <Route path="/product/:Id" element={<Product />} />

              <Route
                path="/DashBoard"
                element={<Protected Component={DashBoard} />}
              />
              <Route path="/cart" element={<Protected Component={Cart} />} />
              <Route
                path="/DashboardOrder"
                element={<Protected Component={DashboardOrder} />}
              />
              <Route
                path="/DashboardProduct"
                element={<Protected Component={DashboardProduct} />}
              />
              <Route
                path="/Orderdetails/:Id"
                element={<Protected Component={OrderDetail} />}
              />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </ContextGlobal>
  );
}

export default App;
