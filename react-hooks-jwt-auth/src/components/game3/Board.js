import React, { useEffect, useState } from 'react';
import Cell from './Cell';
import santhosh from './images/santhosh.jpg'
import CreateBoard from './utils/CreateBoard';
import InitializeCards from './utils/InitializeCards';

const style = {
    style1: {
        display: 'flex',
        flexDirection: 'row',
        width: 'fit-content',
        color: 'white',
    },
    style2: {
        width: '5%',
        float: 'left',
        border: '3px solid white',
        width: 'fit-content',
        color: 'red',
    },
    style3: {
        width: '5%',
        float: 'left',
        width: 'fit-content',
        border: '3px solid white',
        color: 'blue',
    },
    style4: {
        width: '60%',
        float: 'left',
        width: 'fit-content',
        border: '3px solid white',
        color: 'blue',
    }

}

const Board = props => {
    const [grid, setGrid] = useState([]);
    const [isPlayer1, setIsPlayer1] = useState(true);
    const [cards, setCards] = useState([]);
    const [player1, setPlayer1] = useState([]);
    const [player2, setPlayer2] = useState([]);
    useEffect(() => {
        createNewBoard();
        initialAssign();
    }, [])

    function createNewBoard() {
        let createdBoard = CreateBoard(10, 10);
        console.log(createdBoard.sequence);
        setGrid(createdBoard.sequence);
    }

    function initialAssign() {
        let Cards = InitializeCards();
        setCards(Cards.initialCards);
        setPlayer1(Cards.player1);
        setPlayer2(Cards.player2);
        console.log(Cards.player1);
        console.log(Cards.player2);

    }

    function getNewCard(playerNumber) {
        let count = 0;
        let newPickedCard = null;
        while (count < 1) {
            newPickedCard = cards[Math.floor(Math.random() * cards.length)];
            if (newPickedCard.count > 0) {
                newPickedCard.count = newPickedCard.count - 1;
            }
        }
        if(playerNumber === 1){
            newPickedCard.player = playerNumber;
            player1.push(newPickedCard);
        }
        else if(playerNumber === 2){
            newPickedCard.player = playerNumber;
            player2.push(newPickedCard);
        }
    }

    const selectedCard = (details) => {
        let newGrid = JSON.parse(JSON.stringify(grid));
        let x = details.x;
        let y = details.y;
        if ((x === 0 && y === 0) || (x === 0 && y === 9) || (x === 9 && y === 0) || (x === 9 && y === 9) || details.taken !== false) {
            console.log("that cant be yours");
        }
        else if (isPlayer1) {
            for (let i = 0; i < player1.length; i++) {
                if (newGrid[x][y].value === player1[i].value) {
                    newGrid[x][y].player = 1;
                    newGrid[x][y].taken = './images/blue_back.png';
                    player1.splice(i, 1);
                    //getNewCard(1);
                    //console.log(newGrid);
                    setGrid(newGrid);
                    setIsPlayer1(!isPlayer1);
                    break;
                }
            }

        }
        else if (!isPlayer1) {
            newGrid[x][y].player = 1;
            newGrid[x][y].taken = './images/gray_back.png';
            //console.log(newGrid);
            setGrid(newGrid);
            setIsPlayer1(!isPlayer1);
        }

    }

    return (

        <div>
            <div style={style.style2}>
                <p>Player1</p>
                {player1.map((item, index1) => {
                    return <Cell details={item} key={index1} selectedCard={selectedCard} />
                })}
            </div>
            <div style={style.style4}>
                {grid.map((row, index1) => {
                    return (
                        <div style={style.style1}>
                            {row.map((col, index2) => {
                                return <Cell details={col} key={index2} selectedCard={selectedCard} />
                            })}
                        </div>
                    )
                })
                }
            </div>
            <div style={style.style3}>
                <p>Player2</p>
                {player2.map((item, index1) => {
                    return <Cell details={item} key={index1} selectedCard={selectedCard} />
                })}
            </div>
        </div>

    )
};


export default Board;