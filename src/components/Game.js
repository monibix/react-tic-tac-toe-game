import React, { useState} from 'react';
import { calculateWinner } from '../helper';
import Board from './Board';
import '../App.css';

const Game = () => {

    const [x, setX] = useState(0)
    const [O, setO] = useState(1)
    const [player, setPlayer] = useState("X")
    const [paintPlayer, setPaintPlayer] = useState(Array(9).fill(null))

    let checkWinner = false;
    const [winner, setWinner] = useState(false)

    const handleClick = (i) => {
        if(paintPlayer[i]) return
        if (player === 'X') setX(x+1)
        if (player === 'O') setO(O+1)
        setPlayer(player === 'X' ? 'O' : 'X')
        setPaintPlayer( paintPlayer.fill(player, i , i+1) )

        checkWinner = calculateWinner(paintPlayer)
        if (checkWinner === 'X' || checkWinner === 'O') {
            setWinner(checkWinner)
        }
    }

    const playAgain = () => {
        setWinner(null)
    }

    return (
        <>
            <h1><span>DE</span><span>PASI</span><span>FY</span> Tic Tac Toe Game</h1>
            {
                winner ? 
                <div className='winner-screen'>
                    <h1>Congratulations {winner}</h1>
                    <button className='winner-btn' onClick={playAgain} >Play Again</button>
                </div>  
                :
                <div className='board-wrapper'>
                    <Board squares={paintPlayer} onClick={handleClick} />
                    <div className="info-wrapper">
                        <h3>{ !winner && `Next player: ${player}`}</h3>
                    </div>
                </div>

            }
        </>
    )
}

export default Game;

