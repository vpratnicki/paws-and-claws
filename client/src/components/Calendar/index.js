import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_APPOINTMENT } from "../../utils/mutations";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import moment from 'moment';


function Calendar() {
  const [formState, setFormState ] = useState({
    apptDate: "",
    apptTime: "",
    service: "",
  });

  const [addAppointment, { error }] = useMutation(ADD_APPOINTMENT);

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [service, setService] = useState('');

  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   setFormState({
  //     ...formState, 
  //     [name]: value,
  //   });
  // };
    
    const handleSubmit = async (event) => {
      event.preventDefault();
      
    try {
      // nothing is in formstate
      console.log();
      // we put everything in individual state variables
      console.log(date, time, service.target.value);
      const { data } = await addAppointment({
        variables: {
          apptDate: parseInt(date),
          apptTime: parseInt(time),
          service: service.target.value },
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
                onChange={(date) => {
                  console.log('user selected:', date)
                  setDate(date)}}
                dateFormat="MMMM d, yyyy"
              />
            <label htmlFor="time">Time:</label>
            <DatePicker
              selected={date}
              onChange={(time) => {
                console.log('user selected:', time)
                setTime(time)
              }}
              showTimeSelect
              dateFormat="MMMM d, yyyy"
              timeFormat="h:mm a"
              timeIntervals={30}
              timeCaption="time"
            />

            <label htmlFor="service">Service:</label>
                <select 
                // value={formState.service} 
                onChange={(service) => { 
                  console.log('user selected:', service.target.value);
                  setService(service.target.value);
                }} 
                name="service">
                    <option value="Nail Trimmed"> Nail Trimmed </option>
                    <option value="Paw Pads Trimmed"> Paw Pads Trimmed </option>
                    <option value="Feet Tidied"> Feet Tidied </option>
                </select>

            <input type="submit" value="Submit" />
            </div>
          </form>
          {/* </> */}


        </div>
    </section>
    
  );
}

export default Calendar;
