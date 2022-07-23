import { Container } from "@chakra-ui/react";

import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Footer from "./components/Footer";
function App() {
  return (
    <Container className="App" maxW={"none"} p={0}>
      <nav>
        <Navbar />
      </nav>

      <Container
        style={{ padding: "20px 0 0 0" }}
        maxW="container.xl"
        mt={"88px"}
        boxSizing="border-box"
      >
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path={`/products/:id`} element={<ProductDetails />} />
          <Route path="/products/mangoes/:subcategory" element={<Products />} />
          <Route
            path="/products/vegetables/:subcategory"
            element={<Products />}
          />
          <Route path="/products/fruits/:subcategory" element={<Products />} />
          <Route path="/products/herbs/:subcategory" element={<Products />} />
          <Route
            path="/products/dryfruits/:subcategory"
            element={<Products />}
          />
          <Route
            path="/products/kitchenstapels/:subcategory"
            element={<Products />}
          />
          <Route
            path="/products/category/:subcategory"
            element={<Products />}
          />

          <Route path="/login" element={<Login />} />

          <Route
            path="/checkout"
            element={
                <Checkout />
            }
          />
        </Routes>
      </Container>

      <footer>
        <Footer />
      </footer>
    </Container>
  );
}

export default App;
