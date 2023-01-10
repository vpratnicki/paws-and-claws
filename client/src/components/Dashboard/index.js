import React from "react";
import Calendar from "../Calendar";

function Dashboard() {
  return (
    <div>
        <h2 className="login-h2">Profile</h2>
        <h2 className="login-h2">Pets</h2>

        <Calendar />
    </div>
    
  );
}

export default Dashboard;