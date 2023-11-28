
import {getData} from '../serviceapi/product.serviceapi';

 const url=" http://localhost:3000/product";
 

 export function getProduct(){
    return getData(url);   
}
