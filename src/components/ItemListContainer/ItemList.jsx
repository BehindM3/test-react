import { Link } from "react-router-dom";

function ItemList ({ products }) {

    return (
        products.map( item => {
            if ( !item ) return "";
            
            return(
                <article className="item-ilc" key={item.img[0]}>
                    <img className="img-ilc" src={item.img ? item.img[0] : "" } alt={`Imagen representativa del articulo ${item.nameItem}`} />
                    <p className="itemName-ilc">{item.nameItem}</p>
                    <div className='info-ilc'>
                        <span className="itemPrice">${item.price ? item.price : "SIN STOCK"}</span>
                        <Link to={`/detail/${item.id}`} className='detailButton-ilc'>More details</Link>
                    </div>
                </article>
            );
        })
    );

}

export default ItemList;