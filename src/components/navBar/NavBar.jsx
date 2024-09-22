import './assets/NavBar.css'


function NavBar( { nameCategories, children } ){

    const catsComponents = nameCategories.map((category, index) => {
        return (
            <li key={index} className='nb-category'>
                <a href={`Redirection to the ${category} page`} className='nb-categoryItem'>{category}</a>
            </li>
        )
    })

    return(
        <header className='nb-header'>
            <a href="#" className='nb-title'><h1>Comm-E</h1></a>
            <ul className='nb-components'>
                {catsComponents}
            </ul>
        </header>
    );
}

export default NavBar;
