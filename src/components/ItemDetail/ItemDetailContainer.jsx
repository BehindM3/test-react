import { useState, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import LoadingPage from "../LoadingPage/LoadingPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import db from "../../db/db.js";

function ItemDetailContainer () {

    const { idProduct } = useParams();
    const [ loading, setLoading]  = useState(true);
    const [ productDetail, setProductDetail ] = useState(null);


    const getProduct = () => {
        const docRef = doc(db, "products", idProduct);

        getDoc(docRef)
        .then( dataDB => {
            if( !dataDB.data() ){
                throw new Error("Product Not Found");
            }
            
            const data = { id: dataDB.id, ...dataDB.data() };
            
            setProductDetail(data);
            setLoading(false);
        })
        .catch( (err) => {
            setProductDetail(null);
            setLoading(false);
        });

    }


    useEffect( () => {

        setLoading(true);
        getProduct();

    } , []);

    

    return (

        <>
            { loading ?
                <LoadingPage /> :
                    productDetail ? 
                    <ItemDetail product={productDetail} />:
                    <ErrorPage>404</ErrorPage>
            }
        </>

    );
    

}

export default ItemDetailContainer;