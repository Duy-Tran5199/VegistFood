
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './HomePage/Home';
import Search from './HomePage/Search';
import Account from './HomePage/Account';
import AboutUs from './HomePage/AboutUs';
import Blog from './HomePage/Blog';
import Cart from './HomePage/Cart';
import Gridlist from './HomePage/Gridlist';
import Login from './HomePage/Login';
import Product from './HomePage/Product';
import Wishlist from './HomePage/Wishlist';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Search' element={<Search/>}/>
        <Route path='/Account' element={<Account/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/Blogs' element={<Blog/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Gridlist' element={<Gridlist/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Product' element={<Product/>}/>
        <Route path='/Wishlist' element={<Wishlist/>}/>
      </Routes>
    </div>
  );
}

export default App;
