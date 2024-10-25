import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAll } from "../../utils/utils.js";
import './ItemListContaine.css'

function ItemListContainer({ meeting }){

    const[ listProduct, setListProduct ] = useState([]);
    const { category } = useParams();
    
    useEffect(()=>{
    
        try{
            let products =  getAll();

            if( !category ){
                setListProduct(products);
            }
            else{
                const filterProduct = products.filter( product => product.category === category );
                setListProduct(filterProduct);
            }
        
        }catch(err){
            console.log("No pudieron recuperarse los productos requqeridos: ", err);
        
        }
        
    }, [category]);

    
    

    return (
        <>
            <main className="main-ilc">
                <header className="hd-ilc"><h2>{meeting}</h2></header>
                <section className="container-ilc">
                    <ItemList products={listProduct} ></ItemList>
                </section>
            </main>
        </>
    );

}

export default ItemListContainer;