import {getData} from '../serviceapi/product.serviceapi';

 const url="http://localhost:3000/orders/";

 export function getProduct(){
    return getData(url);   
}
