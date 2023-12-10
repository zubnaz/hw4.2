import { createContext, useState } from "react";

export const GameContext = createContext({
    allWins: 0,
    plusWins: 0,
    pinusWins: 0,
    noWinner: 0,
    minusWin: () => null,
    plusWin: () => null,
    noWin: () => null
})

export const GameProvider = ({ children }) => {
    const [allWins, SetAllWins] = useState(0);
    const [plusWins, SetPlusWins] = useState(0);
    const [minusWins, SetMinusWins] = useState(0);
    const [noWinner, SetNoWinner] = useState(0);
    const noWin = () => {
        SetNoWinner(noWinner + 1);
    }
    const minusWin = () => {
        SetMinusWins(minusWins + 1);
        SetAllWins(allWins + 1);
    }
    const plusWin = () => {
        SetPlusWins(plusWins + 1);
        SetAllWins(allWins + 1);
    }

    const value = { allWins, plusWins, minusWins, noWinner, minusWin, plusWin, noWin };

    return <GameContext.Provider value={value}>{children}</GameContext.Provider>

}