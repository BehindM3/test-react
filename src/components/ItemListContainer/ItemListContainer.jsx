import './assets/ItemListContaine.css';

function ItemListContainer({ items = [], meeting }){

    const listItem = items.map( item => {
        if ( !item ) return "";
        
        return(
            <article className="item-ilc">
                <img className="img-ilc" src={item.img ? item.img : ""} alt={`Imagen representativa del articulo ${item.nameItem}`} />
                <div className='info-ilc'>
                    <h3 className="itemName-ilc">{item.nameItem}</h3>
                    <span className="itemPrice">${item.price ? item.price : "SIN STOCK"}</span>
                </div>
                <button className='buyButton-ilc'>Buy</button>
            </article>
        );
    });

    return (
        <>
            <main className="main-ilc">
                <header className="hd-ilc"><h2>{meeting}</h2></header>
                <section className="container-ilc">
                    {listItem}
                </section>
            </main>
        </>
    );

}

export default ItemListContainer;