import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Knitty</h1>
            <div className="links">
                <a href="/Home">Home</a>
                <a href="/About">About</a>
            </div>
        </nav>
    );
}

export default Navbar;