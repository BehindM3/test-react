import NavBar from './components/NavBar/NavBar'
import Cart from "./components/Cart/Cart.jsx"
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import './App.css'
import { categories, articulos } from "./objetosPrueba.js";


function App() {

  

  return (
    <>

      <NavBar nameCategories={categories} >Com-E</NavBar>
      <Cart></Cart>
      <ItemListContainer items={articulos} meeting={"Bienvenido a nuestra tienda Online"}></ItemListContainer>

    </>
  )
}

export default App
