import Cart from '../cart/Cart.jsx'
import CategoriesNav from './CategoriesNav.jsx';
import './NavBar.css'

function NavBar( { children } ){

    return(
        <>
            <CategoriesNav>{children}</CategoriesNav>
            <Cart></Cart>
        </>
    );
}

export default NavBar;
