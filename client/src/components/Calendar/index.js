import React, { useState } from "react";
// import { useMutation } from "@apollo/client";
// import { ADD_APPOINTMENT } from "../../utils/mutations";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import moment from 'moment';


function Calendar() {
  const [dateForm, setDateForm] = useState({
    date: "",
    time: ""
  });

  // cost [addAppointment, { error }] = useMutation(ADD_APPOINTMENT);

  const [date, setDate] = useState(new Date());

  const handleChange = (event) => {
    const { name, value } = event.target;

    setDateForm({
      ...dateForm, 
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(dateForm);
      const { data } = await addAppointment({
        variables: {
          date: dateForm.date,
          time: dateForm.time
        },
      });
      console.log('Here is the appointment data =' + data);
    } catch (e) {
      console.error(e);
      }
    };
  return (
    <section>
        <h2 className="login-h2">Schedule your Appointment</h2>
        <div className="container">
          
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label htmlFor="date">Date:</label>
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                // timeCaption="time"
                dateFormat="MMMM d, yyyy"
              />
            <label htmlFor="time">Time:</label>
            <DatePicker
              selected={date}
              onChange={(date) => setDate(date)}
              showTimeSelect
              timeFormat="h:mm a"
              timeIntervals={30}
              timeCaption="time"
              dateFormat="h:mm aa"
            />
            {/* <input type="text"
            name="time"
            placeholder="appointment-time"
            onChange={handleUpdate}
            value={moment(date).format("h:mm a")}
            /> */}
            <input type="submit" value="Submit" />
            </div>
          </form>
          {/* </> */}


        </div>
    </section>
    
  );
}

export default Calendar;
