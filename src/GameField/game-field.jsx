import { useContext } from "react";
import "./game.css";
import { GameContext } from "../GameContext/GAmeContext";
export default function GameField() {
    const { plusWin, minusWin, noWin } = useContext(GameContext);
    const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let symb = [["", "", ""], ["", "", ""], ["", "", ""]];
    let s = "+";
    let clickNum = 0;
    const click = (index) => {
        const button = document.querySelector(`div div.game button:nth-child(${index})`);
        if (button.innerHTML != "") return;
        button.innerHTML = s;
        clickNum++;
        let row = 0, col = 0;
        for (let i = 1; i < index; i++) {

            if (col == 2) {
                row++
                col = 0;
            }
            else {
                col++;
            }

        }
        symb[row][col] = s;
        check(s);
        s = s == "+" ? "-" : "+";

    }
    const check = (player) => {
        let winner = false;
        if (symb[0][0] == player && symb[0][1] == player && symb[0][2] == player)
            winner = true;
        if (symb[1][0] == player && symb[1][1] == player && symb[1][2] == player)
            winner = true;
        if (symb[2][0] == player && symb[2][1] == player && symb[2][2] == player)
            winner = true;

        if (symb[0][0] == player && symb[1][0] == player && symb[2][0] == player)
            winner = true;
        if (symb[0][1] == player && symb[1][1] == player && symb[2][1] == player)
            winner = true;
        if (symb[0][2] == player && symb[1][2] == player && symb[2][2] == player)
            winner = true;

        if (symb[0][0] == player && symb[1][1] == player && symb[2][2] == player)
            winner = true;
        if (symb[2][0] == player && symb[1][1] == player && symb[0][2] == player)
            winner = true;

        if (winner == true) {
            end();
            player != "-" ? minusWin() : plusWin();
        }
        else {
            if (clickNum == 9) {
                noWin();
                end();
            }
        }
    }
    const end = () => {
        symb = [["", "", ""], ["", "", ""], ["", "", ""]];
        document.querySelectorAll("div div.game button").forEach((element) => {
            element.innerHTML = "";
            clickNum = 0;
        });
    }
    return (<div>
        <div className="game">
            {buttons.map((index) =>
                <button onClick={() => { click(index) }}></button>
            )}

        </div>
    </div>)
}