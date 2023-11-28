// import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';
   
import { Link } from 'react-router-dom';
import './menus.component.css'

export function Menu ()  {
    return (
        <div className='menu'>
           <label>
           <Link to="/" className='menu-item'>Home</Link>
           </label>
           <label>
           <Link to="/Product" className='menu-item'>Product</Link>
           </label>
           <label>
           <Link to="/Orders" className='menu-item'>Orders</Link>
           </label>
        </div>
    )
}