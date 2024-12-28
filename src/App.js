import './App.css';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import CategoriesPage from './Pages/Categories/CategoriesPage';
import ProductsPage from './Pages/Products/ProductsPage';
import OrderDetailsPage from './Pages/OrderDetails/OrderDetails';
import OrdersPage from './Pages/Orders/OrdersPage';
import CategoryCard from './component/CategoryCard/CategoryCard';
import LoginPage from './Pages/Login/LoginPage';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div>
     <BrowserRouter>
    <Navbar />
    <CategoryCard/>
    <Routes>
      <Route path="/"></Route>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path="/products"  element={<ProductsPage/>} />
      <Route path="/categories" element={<CategoriesPage/>} />
      <Route path="/orders"  element={<OrdersPage/>} />
      <Route path="/orders/:orderId" element={<OrderDetailsPage/>} />
      </Routes>
      <Footer/>
     </BrowserRouter>
    </div>
  
  );
}

export default App;