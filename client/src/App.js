import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss'

// Components
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Header from "./components/Header/Header";
import NewsLetter from "./components/Footer/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";

import { AppContext } from "./utils/context";
import Success from "./components/Success/Success";
import Failed from './components/Failed/Failed'

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppContext>
          <Header />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/category/:id"} element={<Category />} />
            <Route path={"/product/:id"} element={<SingleProduct />} />
            <Route path={"/success"} element={<Success />} />
            <Route path={"/failed"} element={<Failed />} />
          </Routes>
          <NewsLetter />
          <Footer />
        </AppContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
