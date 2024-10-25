import NavBar from './components/navBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer.jsx';
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {

  

  return (
    <BrowserRouter>

      <NavBar >Com-E</NavBar>    
      
      <Routes>
        <Route path='/' element={<ItemListContainer meeting={"Bienvenido a nuestra tienda Online"}/>}/>
        <Route path='/:category' element={ <ItemListContainer  /> } />
        <Route path='/detail/:idProduct' element={ <ItemDetailContainer />  }/>
        <Route path='*' element={ <ErrorPage>404</ErrorPage> } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
