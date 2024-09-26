import './assets/NavBar.css'
import Cart from "../Cart/Cart"

function NavBar( { nameCategories, children } ){

    const catsComponents = nameCategories.map((category, index) => {
        return (
            <li key={index} className='nb-category'>
                <a href={`Redirection to the ${category} page`} className='nb-categoryItem'>{category}</a>
            </li>
        )
    })

    return(
        <>
            <header className='nb-header'>
                <a href="#" className='nb-title'><h1>{children}</h1></a>
                <ul className='nb-components'>
                    {catsComponents}
                </ul>
            </header>
            <Cart></Cart>
        </>
    );
}

export default NavBar;
