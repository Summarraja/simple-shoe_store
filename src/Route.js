import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import ProductItems from './components/ProductItems';
import Item from './components/Item';
import Nav from './components/Nav';

function routes() {
    return (
        <div>
            <Router>
                <div>
                    <Nav />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="About" element={<About />} />
                        <Route path="Product" element={<Product />}>
                            <Route path="/" element={<ProductItems />} />
                        </Route>
                        <Route path="Product/:slug" element={<Item />} />
                        <Route path="*" element={<h1>Page Not Found</h1>}/>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default routes;