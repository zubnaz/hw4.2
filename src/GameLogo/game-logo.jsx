import { useContext } from "react";
import { GameContext } from "../GameContext/GAmeContext";
import "./game-logo.css"
export default function GameLogo() {
    const { allWins, plusWins, minusWins, noWinner } = useContext(GameContext);
    return (
        <div className="game-logo">
            <div>Minus win : {plusWins}</div>
            <div>All wins : {allWins}<br></br>
                No wins : {noWinner}</div>
            <div>Plus win : {minusWins}</div>
        </div>
    );
}