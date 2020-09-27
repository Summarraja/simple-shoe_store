import React from "react";
import { Outlet } from "react-router";

function Product(){
    return(
        <div>
            <h1>Welcome to Products Page</h1>
            <Outlet/>
        </div>
    );
}
export default Product;