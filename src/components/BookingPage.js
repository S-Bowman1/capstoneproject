import React from "react";
import BookingForm from "./BookingForm.js"

const BookingPage = (props) => {
  return (
      <>
        <BookingForm availableTimes={props.availableTimes} setAvailableTimes={props.setAvailableTimes} />
      </>
  );
}

export default BookingPage;