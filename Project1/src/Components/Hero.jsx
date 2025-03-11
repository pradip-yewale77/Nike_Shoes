import React from "react";
const Hero = () => {
    return (
        <>
            <main className="hero container">
                <div className="hero-content">
                    <h1>YOUR FEET DESERVE THE BEST</h1>
                    <p>YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.
                        YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.
                    </p>
                    <div className="hero-btn">
                        <button>Shop Now</button>
                        <button className="secondary-btn">Category</button>
                    </div>
                    <div className="shopping">
                        <p>Also Available on</p>
                        <div className="brand-icons">
                            <img src="/images/amazon.png" alt="amazon-logo" style={{width:"100px",height:"100px"}}></img>
                            <img src="/images/filpkart.png" alt="filpkart-logo" style={{width:"100px",height:"100px"}}></img>
                        </div>
                    </div>
                </div>
                <div className="hero-image">
                <img src="/images/hero.png" alt="Hero" ></img>
                </div>
            </main>
        </>
    )
}
export default Hero