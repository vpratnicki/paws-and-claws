import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";


function Profile() {
  const { loading, data } = useQuery(QUERY_ME);

  if (loading) return <p>Loading...</p>;
//   console.log(data);

  return (

      <div className="container services__container-1col">
        <article className="service">
        <div className="service__head">
            <h3>Profile</h3>
        </div>
        <ul className='service__list'>
            <li>Name: {data.me.clientName}</li>
            <hr/>
            <li>Username: {data.me.username}</li>
            <hr/>
            <li>Email: {data.me.email}</li>
            <hr/>
            <li>Phone number: {data.me.phoneNumber}</li>
            <hr/>
            <li>Address: {data.me.homeAddress}</li>
            <hr/>
            <li>Zip: {data.me.zipcode}</li>
            </ul>
        </article>
    </div>
    );
}

export default Profile;
