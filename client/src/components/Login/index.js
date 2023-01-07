import React from "react";
import { useMutation } from "@apollo/client";
import {LOGIN_USER} from '../../utils/mutations';


function Login() {
    return (
    <section>
        
        <h2 className="login-h2">Login/Create an Account</h2>

        <div className="container login__container">
        <form className="form">
            <div className="form-group">
                <h3>Create an Account:</h3>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label htmlFor="zip">Address (Street & City):</label>
                    <input type="text"></input>
                </div>
    
                <div>
                    <label htmlFor="zip">Zip code:</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="text"></input>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        <form className="form">
            <div className="form-group">
                <h3>Sign into your Account:</h3>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="text"></input>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    </section>
)
}

export default Login;