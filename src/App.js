import React from 'react';
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
const App=()=> {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route path="/add" element={<AddContact></AddContact>}>
          </Route>
          <Route path="/edit/:id" element={<EditContact></EditContact>}>
          </Route>
        </Routes>
        <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
