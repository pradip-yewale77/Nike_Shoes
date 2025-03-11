import React from "react";
const Navigation = () => {
    return (
        <>
            <nav className="container">
                <div className="logo">
                    <img src="/images/logo.png" alt="logo" style={{ width: "100px", height: "100px" }} />
                </div>
                <ul>
                    <li href="#">Menu</li>
                    <li href="#">Location</li>
                    <li href="#">About</li>
                    <li href="#">Contact</li>
                </ul>
                <button>login</button>
            </nav>
        </>
    )
}
export default Navigation