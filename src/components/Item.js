import React ,{useEffect} from "react";
import {  useParams } from "react-router";
import shoes from './../shoe.json';

function Item(){
    const {slug} = useParams();
    useEffect(() => {
        window.scrollTo(0, 0);    
  }) 
    return(
        <div >
            <h1>{shoes[slug].name}</h1>
            <img src={shoes[slug].img} alt="shoe-img"className='Item-Fullscreen'/>
            
        </div>
    );
}
export default Item;