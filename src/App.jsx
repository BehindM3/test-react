import NavBar from './components/navBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer.jsx';
import CartPage from './components/CartPage/CartPage.jsx';
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import CheckOut from './components/CheckOut/CheckOut.jsx';
import { CartProvider } from './Context/CartContext.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {



  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar >Com-E</NavBar>
        <ToastContainer theme='dark' position="bottom-left"/>

        <Routes>
          <Route path='/' element={<ItemListContainer meeting={"Bienvenido a nuestra tienda Online"} />} />
          <Route path='/:category' element={<ItemListContainer meeting={"Bienvenido a nuestra tienda Online"} />} />
          <Route path='/detail/:idProduct' element={<ItemDetailContainer />} />
          <Route path='/cart' element={ <CartPage/> } />
          <Route path='/checkout' element={ <CheckOut/> } />
          <Route path='*' element={<ErrorPage>400</ErrorPage>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
