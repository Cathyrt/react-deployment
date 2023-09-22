import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Aboutus from './components/pages/Aboutus';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import Destination from './components/pages/Destination';
import Destination1 from './components/pages/Destination1';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/Aboutus' element={<Aboutus />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/services/activity' element={<Destination />} />
        <Route path='/Destination1' element={<Destination1 />} />

      </Routes>
    </Router>
  );
}

export default App;