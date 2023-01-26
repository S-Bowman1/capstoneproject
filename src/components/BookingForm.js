import React from "react";
import { useState } from "react";

 const BookingForm = (props) => {
 const [date, setDate] = useState("");
 const [restime, setTime] = useState("");
 const [guests, setGuests] = useState("");
 const [occasion, setOccasion] = useState("");
 const { availableTimes, setAvailableTimes } = props;
 const [thanks, setThanks] = useState("");

 const handleSubmit = (e) => {
        e.preventDefault();
        setDate("");
        setOccasion("");
        setGuests("");
        setThanks(<div id="thanksmessage"><p>Thanks! We'll See you Soon!</p></div>);
        setTime("");
        setAvailableTimes(availableTimes.filter(r => r !== restime));
        console.log(availableTimes);
}



  return (
    <div className="bookingwrapper">
        <form className="bookingform" onSubmit={handleSubmit}>
            <fieldset>
            <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} />
            <label htmlFor="restime">Choose time</label>
                <select id="restime" value={restime} onChange={(e) => setTime(e.target.value)}>
                {availableTimes.map((y, i) => 
  <option key={i}>{y}</option>)}
                </select>
                 <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation"  />
                </fieldset>
        </form>
        {thanks}
    </div>
  );
}

export default BookingForm;