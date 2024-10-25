import { useState, useEffect } from "react";
import { getProduct } from "../../utils/utils";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import LoadingPage from "../LoadingPage/LoadingPage";
import ErrorPage from "../ErrorPage/ErrorPage";

function ItemDetailContainer () {

    const { idProduct } = useParams();
    const [ loading, setLoading]  = useState(true);
    const [ productDetail, setProductDetail ] = useState(null);


    useEffect( () => {

        setLoading(true);
            
        getProduct( idProduct )
        .then( data => {
            setProductDetail(data)
            setLoading(false);

        } )
        .catch( error => {
            console.log(error)
            setLoading(false);

        });
        
        

    } , []);

    

    return (

        <>
            { loading ?
                <LoadingPage /> :
                    productDetail ? 
                    <ItemDetail product={productDetail} />:
                    <ErrorPage>400</ErrorPage>
            }
        </>

    );
    

}

export default ItemDetailContainer;