import React from 'react';
import { Link } from 'react-router-dom';
function Nav() {
    return (
        <div className='Nav'>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Product">Product</Link>
                <Link to="/About">About</Link>
            </nav>
        </div>
    );
}
export default Nav;