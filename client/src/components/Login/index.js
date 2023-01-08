import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER, ADD_USER } from "../../utils/mutations";
// import Auth from "../../utils/auth";

function Login() {
const [formState, setFormState] = useState({
    email: "", 
    password: "",
 });

 const [addUser, { error }] = useMutation(ADD_USER);

 // signup submit form
 const handleFormSubmit = async (event) => {
    event.preventDefault();
    // try/catch instead of promises to handle errors
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      console.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };


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
        {error && <div>Sign up failed</div>}


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