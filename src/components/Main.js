import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage.js";
import Chicago from "./Chicago.js";
import BookingPage from "./BookingPage.js";
import Specials from "./Specials.js";






const Main = () => {
  const [availableTimes, setAvailableTimes] = useState(["5:00pm", "6:00pm", "7:00pm"]);
  return (
    <main>
      
<Routes> 
    <Route path="/" element={<Homepage />}></Route>
    <Route path="/booking" element={<BookingPage availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />}></Route>
    <Route path="/about" element={<Chicago />}></Route>
    <Route path="/menu" element={<Specials />}></Route>
</Routes>
    </main>
  );
  }

export default Main;