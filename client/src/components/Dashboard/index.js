import React from "react";
import Profile from "../Profile";
import Viewappointments from "./View-appointments";
import Calendar from "../Calendar";


function Dashboard() {
  

  return (
    <div className="container services__container-2col">

        <Profile />

        <h2 className="login-h2">Pets</h2>
        <Calendar />
        <Viewappointments />

    </div>
    
  );
}

export default Dashboard;