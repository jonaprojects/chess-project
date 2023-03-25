import React from "react";
import "./Hero4.css";
import { ReactComponent as GoldenStarSVG } from "./golden_star.svg";
import { ReactComponent as BlackStarSVG } from  './black_star.svg';
import { ReactComponent as WhiteStarSVG } from  './white_star.svg';

export default function Hero4(props) {
  return (
    <div className="hero4-container">
        <div className="hero4-title">Testimonials</div>
      <div className="testimonials">
        <div className="testimonial1-container">
          <div className="testimonial-content">
            <span className="quotation-mark">“</span>As someone who is new to
            chess, I've found this website to be a fantastic resource
            <span className="quotation-mark">“</span>
          </div>
          <div className="testimonial-author">Jennifer, a new player</div>
          <div className="stars">
            <GoldenStarSVG width={32} height={32}/>
            <GoldenStarSVG width={32} height={32}/>
            <GoldenStarSVG width={32} height={32}/>
            <GoldenStarSVG width={32} height={32}/>
            <GoldenStarSVG width={32} height={32}/>
          </div>
        </div>
        <div className="testimonial2-container">
          <div className="testimonial-content">
            <span className="quotation-mark">“</span>Game-changer! Easy to use
            and challenging.
            <span className="quotation-mark">“</span>
          </div>
          <div className="testimonial-author">Danny, a chess coach</div>
          <div className="stars">
            <GoldenStarSVG width={32} height={32}/>
            <GoldenStarSVG width={32} height={32}/>
            <GoldenStarSVG width={32} height={32}/>
            <GoldenStarSVG width={32} height={32}/>
            <BlackStarSVG width={30} height={30}/>
          </div>
        </div>
      </div>
    </div>
  );
}
