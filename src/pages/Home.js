import React from "react";
import "./Home.css";
import Hero from "../components/Hero.js";
import Hero2 from '../components/Hero2.js';
import Hero3 from '../components/Hero3.js';
import Hero4 from '../components/Hero4.js';
import Hero5 from '../components/Hero5.js';

export default function Home(props) {
  return (
    <div className="home-page__container">
      <Hero />
      <Hero2/>
      <Hero3/>
      <Hero4/>
      <Hero5/>
    </div>
  );
}
