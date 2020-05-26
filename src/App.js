import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import RecordData from "./components/RecordData";
import TaskDataContent from "./components/TaskDataContent";
import EditData from "./components/EditData";
import NotFound from "./components/NotFound";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/edit/:id" render={(props) => <EditData {...props} /> } />
          <Route path="/edit" component={TaskDataContent} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact={true} component={RecordData} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
