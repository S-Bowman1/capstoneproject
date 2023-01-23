import React from "react";
import { useState } from "react";

 const BookingForm = () => {
 const [date, setDate] = useState("");
 const [restime, setTime] = useState("");
 const [guests, setGuests] = useState("");
 const [occasion, setOccasion] = useState("");

 const [availableTimes, setTimes] = useState("")

 const handleSubmit = () => {
        console.log("Submit Clicked")
}



  return (
    <div className="bookingwrapper">
        <form className="bookingform" onSubmit={handleSubmit}>
            <label for="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} />
            <label for="restime">Choose time</label>
                <select id="restime" value={restime} onChange={(e) => setTime(e.target.value)}>
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                </select>
                 <label for="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} />
                <label for="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation" />
        </form>

    </div>
  );
}

export default BookingForm;