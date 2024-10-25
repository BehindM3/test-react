import products from "../data/products";

const getAll = () => (products);

const getProduct = (idProduct) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const productReq = products.find( p => p.id === parseInt(idProduct));

            if( productReq ){
                resolve( productReq ); 
            }
            else{
                reject(new Error('Fail to load the page'));
            }

        }, 1000) 
    })

};

export {getAll, getProduct};
