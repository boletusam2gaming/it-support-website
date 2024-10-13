import React, { useState } from "react";
import { HashRouter as Router, Route, Routes, } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import KnowledgeBase from './components/KnowledgeBase.jsx';
import TicketingSystem from './components/TicketingSystem';
import LiveChat from './components/LiveChat';
import Auth from './components/Auth';
import Contact from './components/contact';
import './App.css';






function App() {
  

  return (
    <Router>
    <div className="App">
      
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/knowledgebase" element={<KnowledgeBase/>}/>
        <Route path="/ticketingsystem" element={<TicketingSystem/>}/>
        <Route path="/livechat" element={<LiveChat/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes> 
      <Footer/>
    </div>
   
    </Router>
  )
}

export default App
