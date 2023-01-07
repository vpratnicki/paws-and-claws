import React from "react";
import { Link } from "react-router-dom";


function Nav({ currentPage, handlePageChange }) {
    return (
        <header>
            <h1>Paws & Claws</h1>
            <nav>
                <ul>
                <li> 
                    <Link herf="#about" to="/" 
                          onClick={() => handlePageChange("About")} 
                          className={currentPage === "About" ? "navActive" : "nav-link"} >
                     About</Link> </li>
                <li>
                    <Link herf="#services" 
                          to="/services" 
                          onClick={() => handlePageChange("Services")} 
                          className={currentPage === "Services" ? "navActive" : "nav-link"} >
                    Services/Locations</Link>
                </li>
                <li>
                    <Link herf="#make-an-appointment"
                          to="/make-an-appointment"
                          onClick={() => handlePageChange("Login")}
                          className={currentPage === "Login" ? "navActive" : "nav-link"} >
                    Make an Appointment</Link></li>
                <li>
                    <Link herf="#dashboard"
                          to="/dashboard"
                          onClick={() => handlePageChange("Dashboard")}
                          className={currentPage === "Dashboard" ? "navActive" : "nav-link"} >
                    Dashboard</Link></li>
                </ul>
            </nav>
        </header>
    );
}
export default Nav;