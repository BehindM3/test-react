import NavBar from './components/navBar/Navbar'
import Cart from "./components/cart/Cart"
import './App.css'

function App() {

  const categories = ["Home", "About us", "Products",  "Contact"]

  return (
    <>
    
      <NavBar nameCategories={categories} />
      <Cart></Cart>
      <main style={{backgroundColor: '#aaa', height: '90dvh'}}>

      </main>
    </>
  )
}

export default App
