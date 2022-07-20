import React from 'react';
import TopNav from './Components/Nav/TopNav';
import Home from './Components/Home';
import About from './Components/About';
import Programs from './Components/Programs';
import Team from './Components/Team';
import Contact from './Components/Contact';
import Subscribe from './Components/Subscribe';

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <>
    <Router>
      <TopNav />
      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="About" element={<About />}></Route>
        <Route path="Programs" element={<Programs />}></Route>
        <Route path="Team" element={<Team />}></Route>
        <Route path="Contact" element={<Contact />}></Route>
        <Route path="Subscribe" element={<Subscribe />}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
