import React, { Component } from "react";
import Header from "./components/Header";
import Project from "./components/Project";
import ReactGA from "react-ga";
ReactGA.initialize("UA-138662303-1");
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  render() {
    return (
      <div className="container-fluid" style={{ padding: 0 }}>
        <Header
          mainImage="https://s3.amazonaws.com/dunton-portfolio/media/ny.jpg"
          headshot="https://s3.amazonaws.com/dunton-portfolio/media/headshot.png"
        />
        <Project
          name="Service Now"
          link="service-now"
          image="https://s3.amazonaws.com/dunton-portfolio/media/service_now.jpg"
        />
        <Project
          name="Oscar Watch Tracker"
          link="oscar watch"
          image="https://s3.amazonaws.com/dunton-portfolio/media/oscar-watch.jpg"
        />
        <Project
          name="Cole Haan Chasing Ambition"
          link="cole haan"
          image="https://s3.amazonaws.com/dunton-portfolio/media/cole-haan.png"
        />
        <Project
          name="Movie Finder (React/Flux)"
          link="movie-finder"
          image="https://s3.amazonaws.com/dunton-portfolio/media/movie-finder.jpg"
        />
        <Project
          name="Weather Forecaster (React/Redux)"
          link="weather"
          image="https://s3.amazonaws.com/dunton-portfolio/media/weather.jpg"
        />
        <Project
          name="Ryantube (React)"
          link="ryantube"
          image="https://s3.amazonaws.com/dunton-portfolio/media/ryantube.jpg"
        />
        <Project
          name="Todo List App (React)"
          link="todo"
          image="https://s3.amazonaws.com/dunton-portfolio/media/todo.png"
        />
        <Project
          name="Neighborhood Map"
          link="neighborhood"
          image="https://s3.amazonaws.com/dunton-portfolio/media/maps.jpg"
        />
        <Project
          name="AJAX Location API Information"
          link="ajax"
          image="https://s3.amazonaws.com/dunton-portfolio/media/nyt.jpg"
        />
        <Project
          name="Frogger Game"
          link="frogger"
          image="https://s3.amazonaws.com/dunton-portfolio/media/rainforest.jpg"
        />

        <Project
          name="My Resume"
          link="resume"
          image="https://s3.amazonaws.com/dunton-portfolio/media/resume.jpg"
        />
        <Project
          name="Contact Me!"
          link="contact"
          image="https://s3.amazonaws.com/dunton-portfolio/media/contact.jpg"
        />
      </div>
    );
  }
}

export default App;
