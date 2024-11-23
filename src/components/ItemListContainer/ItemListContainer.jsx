import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDocs, collection, query, where } from "firebase/firestore";
import db from "../../db/db.js";
import './ItemListContaine.css'

function ItemListContainer({ meeting }){

    const[ listProduct, setListProduct ] = useState([]);
    const { category } = useParams();
    
    const getProducts = () => {
        const productsRef = collection(db, "products");

        getDocs(productsRef)
        .then( dataDB => {

            const data = dataDB.docs.map( productDB => {
                return { id: productDB.id, ...productDB.data() }
            })

            setListProduct(data);
        })
    };

    const getProductByCategory = () => {
        const productRef = collection(db, "products");
        const queryFilter = query( productRef, where( "category", "==", category) );

        getDocs(queryFilter)
        .then( dataDB => {

            const data = dataDB.docs.map( productDB => {
                return { id: productDB.id, ...productDB.data() }
            })

            setListProduct(data);
        });
    }

    useEffect(()=>{
        try{

            if(!category){
                getProducts();
            }
            else{
                getProductByCategory();
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