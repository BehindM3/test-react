import { useState } from "react";
import './ItemDetail.css';

function ItemDetail({ product }){ 

    const [ imgFocus, setImgFocus ] = useState(product.img[0]);

    const imgsAside = product.img.filter( img => img !== imgFocus)

    function handleClickImgs(){

    }


    return(
        <main className="cont-details">  
            <section className="img-section">
                <div className="img-focus">
                    <img src={imgFocus} alt={`Imagenes principal del ${product.nameItem}`} />
                </div>
                <aside className="img-aside">
                    {
                        imgsAside.map( img => (
                          <img src={img} alt={`Imagenes laterales representativas del ${product.nameItem}`} key={img}/>  
                        ))
                    }
                </aside>
            </section>
            <section className="info-section">
                <h3>{product.nameItem}</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam voluptatibus delectus quas assumenda dolores sit blanditiis at velit fugiat itaque? Et soluta quae totam. Alias saepe aliquam reiciendis aspernatur quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reprehenderit expedita iusto porro at. Rem hic, impedit veniam adipisci fugiat vero culpa in sunt. Qui saepe repellendus facere ea laborum.</p>
                    <button className="btn-addCart">Add Cart</button>
            </section>
        </main>
    );
};

export default ItemDetail;