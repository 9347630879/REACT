import react from 'react';
import "../menu/menus.component"

import { Link } from 'react-router-dom';



export class Menuclass extends react.Component {
constructor() {
    super();
    }

    render() {
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
}