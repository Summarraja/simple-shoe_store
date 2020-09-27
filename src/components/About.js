import React from "react";
import shoe from './../images/shoes.jpg';
function About() {
    return (
        <div className='About'>
            <div>
                <h1>About Us</h1>
            </div>
            <div >
                <img src={shoe} alt='shoe-pic' width='60%' className='about-img '/>
            </div>
            <h1 className='About-Title'>World leading Online Shoes selling store.
            We are presenting world's best brands
             </h1>
            <h2 className='About-Desc'>Life in my shoes is Body and soul's pioneering and powerful multi-platform compaign that challanging the frear and
            misunderstanding surrounding the HV in the UK. At it's heart, the compaign needs to promote empathy
            through creative mediums that built understanding of what life is someone's else shoes.
            </h2>

        </div>
    );
}
export default About;