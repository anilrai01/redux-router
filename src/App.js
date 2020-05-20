import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import RecordData from "./components/RecordData";
import EditData from "./components/EditData";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar/>
      
      <Route path="/" component={RecordData}/>
      <Route path="/edit" component={EditData}/>

      </div>
    </BrowserRouter>
  );
}

export default App;
