import React, { useState, useEffect } from "react";
import Profile from "../Profile";
import Addpet from "./addpet";
import Viewappointments from "./View-appointments";
import Calendar from "../Calendar";


function Dashboard() {

  return (
    <div className="container services__container-2col">

        <Profile />
        <Addpet />
        <Calendar />
        <Viewappointments />

    </div>
    
  );
}

export default Dashboard;