import React from "react";
import "./Game.css";
import Chessboard from "chessboardjsx";
import PlayerInfo from "../../components/PlayerInfo.js";
import GameInfo from "../../components/GameInfo.js";
import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}


export default function Game(props) {
  const {height, width} = useWindowDimensions();
  let offset = width/10;
  let chessboard_width = width/3;
  if(width < 800){
    chessboard_width = width - offset;
  }
  return (
    <div className="game-page__container">
      <div className="chessboard-container">
        <PlayerInfo />
        <Chessboard position="start" width={chessboard_width} />
        <PlayerInfo />
      </div>
      <GameInfo height={chessboard_width+offset} />
    </div>
  );
}
