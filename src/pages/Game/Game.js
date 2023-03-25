import React from "react";
import "./Game.css";
import Chessboard from "chessboardjsx";
import PlayerInfo from "../../components/PlayerInfo.js";
import GameInfo from "../../components/GameInfo.js";
import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export default function Game(props) {
  const { height, width } = useWindowDimensions();
  let offset = height * 0.11;
  let chessboard_width = height * 0.75;
  if(chessboard_width > width){
    chessboard_width = width/2;
  }
  if (width < 800) {
    chessboard_width = 0.9*width;
  }
  return (
    <div className="game-page__container">
      <div className="game-page__content">
        <div className="chessboard-container">
          <PlayerInfo />
          <Chessboard position="start" width={chessboard_width} draggble={true}/>
          <PlayerInfo />
        </div>
        <div id="gameInfoContainer">
          <GameInfo height={chessboard_width + offset} />
        </div>
      </div>
    </div>
  );
}
