import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import About from "./components/about-component";
import Contact from "./components/contact-component";
import Queries from "./components/Queries-component";
import Home from "./components/home-component";
import Services from "./components/Services-component";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <br />
        <Route path="/" exact component={Home} />
        {/* <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} /> */}
        <Route path="/services" component={Services} />
        <Route path="/queries" component={Queries} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
