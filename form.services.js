import { saveData } from "../serviceapi/product.serviceapi";

// const url = " http://localhost:3000/orders/";


export function getProduct(data) {
    return saveData(url, data);

}