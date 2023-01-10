import React from "react";
import Calendar from "../Calendar";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import Auth from "../../utils/auth";

function Dashboard() {
  const { data: userData } = useQuery(QUERY_ME);
  
  const loggedIn = Auth.loggedIn();

  return (
    <div className="container services__container-2col">
        <article className="service">
          <div className="service__head">
            <h3>Profile</h3>
          </div>
          <ul className='service__list'>
            <li>
              <p>Name:</p>
            </li>
            <hr/>
            <li>
              <p>Username</p>
            </li>
            <hr/>
            <li>
              <p>Email</p>
            </li>
            <hr/>
            <li>
              <p>Address</p>
            </li>
            <hr/>
            <li>
              <p>Zip</p>
            </li>
            <hr/>
            <li>
              <p>Phone</p>
            </li>
            <hr/>
          </ul>
        </article>



        <h2 className="login-h2">Pets</h2>

        <Calendar />
    </div>
    
  );
}

export default Dashboard;