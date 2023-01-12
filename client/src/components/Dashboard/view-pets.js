import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";


function Viewpets() {
    const { loading, data } = useQuery(QUERY_ME);

  if (loading) return <p>Loading...</p>;
  console.log(data.me.pets);

  return (
    <div> 
        <h2>Your Pets</h2>
    <>
    {data.me.pets.map((item, index) => (
        <article className="service" key={index} >
        
        <ul className='service__list'>
            <li><strong>Date/Time:</strong> {item.petName}</li>
            <hr/>
            <li><strong>Date/Time:</strong> {item.petType}</li>
            <hr/>
            
            </ul>
        </article>
        ))}
    </>
    </div>
    
    );
}

export default Viewpets;
