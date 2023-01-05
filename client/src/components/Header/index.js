import React from "react";

const Header = () => {
    return (
        <header>
            <navbar className="navbar-container">
                <div className="logo">
                    <h1>Paws & Claws</h1>
                </div>

                <div className="bars">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

                <ul className="nav-items">
                    <li className="nav-link"><a href="#">About</a></li>
                    <li className="nav-link"><a href="#">Services</a></li>
                    <li className="nav-link"><a href="#">Testimonials</a></li>
                </ul>

            </navbar>
        </header>
    );
}
export default Header;