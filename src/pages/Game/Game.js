import React from "react";
import "./Game.css";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
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
  if (chessboard_width > width) {
    chessboard_width = width / 2;
  }
  if (width < 800) {
    chessboard_width = 0.9 * width;
  }
  return (
    <div className="game-page__container">
      <div className="game-page__content">
        <div className="chessboard-container">
          <PlayerInfo />
          <div
            style={{
              margin: "0",
              width: chessboard_width,
            }}
          >
            <Chessboard
              id="Configurable Board"
              onArrowsChange={function noRefCheck() {}}
              onDragOverSquare={function noRefCheck() {}}
              onMouseOutSquare={function noRefCheck() {}}
              onMouseOverSquare={function noRefCheck() {}}
              onPieceClick={function noRefCheck() {}}
              onPieceDragBegin={function noRefCheck() {}}
              onPieceDragEnd={function noRefCheck() {}}
              onPieceDrop={function noRefCheck() {}}
              onSquareClick={function noRefCheck() {}}
              onSquareRightClick={function noRefCheck() {}}
            />
          </div>
          <PlayerInfo />
        </div>
        <div id="gameInfoContainer">
          <GameInfo height={chessboard_width + offset} />
        </div>
      </div>
    </div>
  );
}
