import React from "react";
import { Link } from "react-router-dom";


function Nav({ currentPage, handlePageChange }) {
    return (
        <header>
            <nav className="navbar__container">
                <div className="logo__container">
                    <h1>Paws & Claws</h1>
                </div>

                <ul className="nav-items">
                <li> 
                    <Link herf="#about" to="/" 
                          onClick={() => handlePageChange("About")} 
                          className={currentPage === "About" ? "navActive" : "nav-link"} >
                     About</Link> </li>
                <li>
                    <Link herf="#services" 
                          to="/services" 
                          onClick={() => handlePageChange("Services")} 
                          className={currentPage === "Projects" ? "navActive" : "nav-link"} >
                    Services</Link>
                </li>
                <li>
                    <Link herf="#testimonials"
                          to="/testimonials"
                          onClick={() => handlePageChange("Testimonials")}
                          className={currentPage === "Resume" ? "navActive" : "nav-link"} >
                Testimonials</Link></li>
                </ul>
            </nav>
        </header>
    );
}
export default Nav;