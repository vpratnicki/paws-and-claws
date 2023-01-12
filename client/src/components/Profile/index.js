import {React, useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import EmailModal from '../Modals/EmailModal';


function Profile() {
  const [isEmailModalOpen, setState] = useState(false);
  const { loading, data } = useQuery(QUERY_ME);
  if (loading) return <p>Loading...</p>;
//   console.log(data);



const toggleEditEmail = () => {
  console.log('click')
  if(!isEmailModalOpen){
    setState(true);
  } else {
    setState(false);
  }
}



  return (

        <article className="service">
        <div className="service__head">
            <h3>Profile</h3>
        </div>
        <ul className='service__list'>
            <li>Name: {data.me.clientName}</li>
            <hr/>
            <li>Username: {data.me.username}</li>
            <hr/>
            <li>Email: {data.me.email}
            
            <div className='edit-div'>
            <a className='edit-email-trigger' onClick={toggleEditEmail}>Update</a></div>
            {isEmailModalOpen && <EmailModal
                currentEmail = {data.me.email}
                onClose = {toggleEditEmail}
              />}
            </li>
            <hr/>
            <li>Phone number: {data.me.phoneNumber}</li>
            <hr/>
            <li>Address: {data.me.homeAddress}</li>
            <hr/>
            <li>Zip: {data.me.zipcode}</li>
            </ul>
        </article>
    );
}

export default Profile;
