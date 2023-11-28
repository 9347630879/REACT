import { Routes,Route } from "react-router-dom";
// import { Orders } from "./components/orders.components";
import { Product } from "./components/Product.components";
import { Home } from "./menu/Home";
import {Orders} from './components/orders.components';

export function AppRouter() {
    return (
        <div>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/Product" element={<Product></Product>}></Route>
            {/* <Route path="/Orders" element={<Orders></Orders>}></Route> */}
            <Route path="/Orders" element={<Orders></Orders>}></Route>
            
        </Routes>
        </div>
    )
  } 