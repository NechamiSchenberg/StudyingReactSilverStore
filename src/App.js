import './App.css';
import HomePage from './Components/HomePage';
import Products from './Components/Products';
import ProductDetails from './Components/productDetails';
import { Route, Routes, BrowserRouter, Router } from "react-router-dom"
import HomePageProduct from './Components/HomePageProduct';
import Header from './Components/Header';
import Cart from './Components/cart';
import About from './Components/About'
import Pay from './Components/pay';
import Confirm from './Components/Confirm';
function App() {
  return (
    <div id="wrapper">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/product' element={<Products />} />
          <Route path='/About' element={<About />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Payment' element={<Pay />} />
          <Route path='/Confirm' element={<Confirm/>}/>
          <Route path='/catgory'>
            <Route path='' element={<HomePageProduct />} />
            <Route path=':categoryID' >
              <Route path='' element={<Products />} />
              <Route path=':productID' element={<ProductDetails />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
