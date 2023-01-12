import React from "react";
import { toTimestamp } from "../../utils/helpers";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";


function Viewappointments() {
    const { loading, data } = useQuery(QUERY_ME);

  if (loading) return <p>Loading...</p>;
  console.log(data.me.appointments);
  
  toTimestamp(data.me.appointments.apptTime);
    console.log(data.me.appointments.apptTime);


  return (
    <div> 
        <h2>Your Appointments</h2>
    <>
    {data.me.appointments.map((item, index) => (
        <article className="service" key={index} >
        
        <ul className='service__list'>
            <li><strong>Date/Time:</strong> {item.apptTime}</li>
            <hr/>
            <li><strong>Service:</strong> {item.service}</li>
            <hr/>
            
            </ul>
        </article>
        ))}
    </>
    </div>
    
    );
}

export default Viewappointments;
