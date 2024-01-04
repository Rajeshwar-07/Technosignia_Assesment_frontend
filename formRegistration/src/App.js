import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Heading from './components/Heading';
import Form from './components/Form';


function App() {
  return (
    <div className="app">
      <div className="appBlock">
        <Heading/>
        <Router>
         <Routes>
            <Route exact path="/" element={<Form/>}/>
         </Routes>  
        </Router> 
      </div>
    </div>
  );
}

export default App;
