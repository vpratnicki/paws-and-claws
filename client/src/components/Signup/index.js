import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
// import Auth from "../../utils/auth";

const Signup = () => {
const [formState, setFormState] = useState({
    clientName: "",
    username: "",
    email: "", 
    password: "",
    homeAddress: "",
    zipcode: "",
 });

 const [addUser, { error }] = useMutation(ADD_USER);

 // update state based on form input changes
 const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

 // signup submit form
 const handleFormSubmit = async (event) => {
    event.preventDefault();
    // try/catch instead of promises to handle errors
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      console.login(data);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      clientName: "",
      username: "",
      email: "",
      homeAddress: "",
      zipcode: "",
      password: "",
    });
  };
    return (
    <section>
        <h2 className="login-h2">Login/Create an Account</h2>
        <div className="container login__container">
        <form onSubmit={handleFormSubmit} className="form">
            <div className="form-group">
                <h3>Create an Account:</h3>
                    <label htmlFor="name">Name:</label>
                    <input 
                    placeholder="Your name"
                    name="clientName"
                    type="clientName"
                    id="clientName"
                    value={formState.clientName}
                    onChange={handleChange}
                    />
                    <label htmlFor="username">Username:</label>
                    <input
                    placeholder="Your username"
                    name="username"
                    type="username"
                    id="username"
                    value={formState.username}
                    onChange={handleChange}
                    />
                    <label htmlFor="email">Email:</label>
                    <input 
                    placeholder="Your email"
                    name="email"
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                    <label htmlFor="homeAddress">Address (Street & City):</label>
                    <input 
                    placeholder="Your Address"
                    name="homeAddress"
                    type="address"
                    id="homeAddress"
                    value={formState.homeAddress}
                    onChange={handleChange}
                  />
                    <label htmlFor="zip">Zip code:</label>
                    <input 
                    placeholder="Your Zip Code"
                    name="zipcode"
                    type="zipcode"
                    id="zipcode"
                    value={formState.zipcode}
                    onChange={handleChange}
                    />

                    <label htmlFor="password">Password:</label>
                    <input 
                    placeholder="Your password"
                    name="password"
                    type="password"
                    id="password"
                    value={formState.password}
                    onChange={handleChange}
                    />

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
};

export default Signup;