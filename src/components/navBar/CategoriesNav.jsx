import categories from '../../data/categories.js'
import { Link } from 'react-router-dom'


function CategoriesNav ({ children }) {

    const categoriesLink = categories.map((category, index) => {
        return (
            <li key={index} className='nb-category'>
                <Link to={`/${category}`} className='nb-categoryItem'>
                    <strong>{category}</strong>
                </Link>
            </li>
        )
    })

    return (
        <nav className='nb-header' >
            <Link to={'/'} className='nb-title'><h1>{children}</h1></Link>
            <ul className='nb-components'>
                {categoriesLink}
            </ul>
        </nav>
    )

}

export default CategoriesNav;