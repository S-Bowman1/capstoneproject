import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage.js";
import Chicago from "./Chicago.js";
import BookingPage from "./BookingPage.js";
import Specials from "./Specials.js";



const Main = () => {
  return (
    <main>
<Routes> 
    <Route path="/" element={<Homepage />}></Route>
    <Route path="/booking" element={<BookingPage />}></Route>
    <Route path="/about" element={<Chicago />}></Route>
    <Route path="/menu" element={<Specials />}></Route>
</Routes>
    </main>
  );
  }

export default Main;