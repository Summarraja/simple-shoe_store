import React, {useEffect} from "react";
import shoes from '../shoe.json';
import {Link} from 'react-router-dom';
import './../App.css';

function ProductItem() {
    useEffect(() => {
          window.scrollTo(0, 0);    
    }) 
    return (
        <div>
            <div className="Item-Container">
                {Object.entries(shoes).map(([KEY, { name, img }]) => {
                    return (
                        <Link key={KEY} className="Item" to={`/Product/${KEY}`}>
                            <h3>{name}</h3>
                            <img src={img} alt="shoe-img" width="200px"/>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
}
export default ProductItem;