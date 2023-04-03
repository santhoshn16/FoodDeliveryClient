import React, { useState } from 'react';
import "./Game.css"

function Square({ value, handleClick }) {
    return (
        <>
            <button className="square" onClick={handleClick}>{value}</button>
            
        </>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}


const Game = props => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    function resetClicked(){
        setSquares(Array(9).fill(null));
        setXIsNext(true);
    }

    function squareClicked(num) {
        const updatedSquares = squares.slice();
        if (squares[num] || calculateWinner(squares)) {
            return;
        }
        if (xIsNext) {
            updatedSquares[num] = 'X';
            console.log(updatedSquares);
        }
        else {
            updatedSquares[num] = 'O';
        }
        setSquares(updatedSquares);
        setXIsNext(!xIsNext);
    }
    let winner = calculateWinner(squares);
    let message;
    if (winner) {
        message = "Winner : " + winner;
    }
    else {
        message = "Next Player : " + (xIsNext ? 'X' : 'O');
    }

    return (
        <>
            <div className="status">{message}</div>
            <div className="board-row">
                <Square value={squares[0]} handleClick={() => squareClicked(0)} />
                <Square value={squares[1]} handleClick={() => squareClicked(1)} />
                <Square value={squares[2]} handleClick={() => squareClicked(2)} />
            </div>
            <div className='board-row'>
                <Square value={squares[3]} handleClick={() => squareClicked(3)} />
                <Square value={squares[4]} handleClick={() => squareClicked(4)} />
                <Square value={squares[5]} handleClick={() => squareClicked(5)} />
            </div>
            <div className='board-row'>
                <Square value={squares[6]} handleClick={() => squareClicked(6)} />
                <Square value={squares[7]} handleClick={() => squareClicked(7)} />
                <Square value={squares[8]} handleClick={() => squareClicked(8)} />
            </div>
            <br></br>
            <div className='board-row'>
                <button className='' onClick={resetClicked}>Reset</button>
            </div>
        </>

    );

};


export default Game;