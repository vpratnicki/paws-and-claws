import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";


function Profile() {
  const { data } = useQuery(QUERY_ME);
  const [users, setUserData] = useState({});

  useEffect(() => {
    if (data) {
        console.log(data);
        setUserData(data.me);
    }
}, [data]);
  

  return (

    <h2>Profile</h2>
    // <div>
    //     {" "}
    //   {users.map((val) => {
    //     return <h1> {val.firstName}</h1>;
    //   })}
    // </div>

    // <div className="container services__container-2col">


    //     <article className="service">
    //       <div className="service__head">
    //         <h3>Profile</h3>
    //       </div>
    //       <ul className='service__list'>
    //         <hr/>
    //         <li>
    //           <p>Username</p>
    //         </li>
    //         <hr/>
    //         <li>
    //           <p>Email</p>
    //         </li>
    //         <hr/>
    //         <li>
    //           <p>Address</p>
    //         </li>
    //         <hr/>
    //         <li>
    //           <p>Zip</p>
    //         </li>
    //         <hr/>
    //         <li>
    //           <p>Phone</p>
    //         </li>
    //         <hr/>
    //       </ul>
    //     </article>
    // </div>

    );
}

export default Profile;
