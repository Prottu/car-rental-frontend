import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Removed BrowserRouter
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import CarList from './components/CarList';
import BookingForm from './components/BookingForm';
import BookingSuccess from './components/BookingSuccess'; 


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/cars" element={<CarList />} />
        <Route path="/book" element={<BookingForm />} />
        <Route path="/booking-success" element={<BookingSuccess />} />

      </Routes>
    </div>
  );
}

export default App;
